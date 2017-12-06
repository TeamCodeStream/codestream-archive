'use strict';

var BoundAsync = require(process.env.CS_API_TOP + '/lib/util/bound_async');
var RestfulRequest = require('./restful_request');

class GetManyRequest extends RestfulRequest {

	process (callback) {
		BoundAsync.series(this, [
			this.formQuery,
			this.preFetchHook,
			this.fetch,
			this.sanitize,
			this.respond
		], callback);
	}

	formQuery (callback) {
		this.queryAndOptions = this.makeQueryAndOptions();
		if (!this.queryAndOptions.fetchNothing && !this.queryAndOptions.query) {
			return callback(this.queryAndOptions); // error
		}
		process.nextTick(callback);
	}

	preFetchHook (callback) {
		callback();
	}

	fetch (callback) {
		let { func, query, queryOptions } = this.queryAndOptions;
		if (this.queryAndOptions.fetchNothing) {
			this.models = [];
			return callback();
		}
		this.data[this.module.collectionName][func](
			query,
			(error, models) => {
				if (error) { return callback(error); }
				this.models = models;
				callback();
			},
			queryOptions
		);
	}

	makeQueryAndOptions () {
		let query = this.buildQuery();
		if (typeof query === 'string') {
			return this.errorHandler.error('badQuery', { reason: query });
		}
		else if (query === false) {
			// fetch nothing
			return { fetchNothing: true };
		}
		let queryOptions = this.getQueryOptions();
		let func;
		if (query) {
			func = 'getByQuery';
		}
		else {
			func = 'getByIds';
			query = this.ids || this.request.query.ids || this.request.body.ids;
			if (!query) {
				return this.errorHandler.error('parameterRequired', { info: 'ids' });
			}
			if (typeof query === 'string') {
				query = decodeURIComponent(query).toLowerCase().split(',');
			}
		}
		return { func, query, queryOptions };
	}

	sanitize (callback) {
		this.sanitizeModels(
			this.models,
			(error, objects) => {
				if (error) { return callback(error); }
				this.sanitizedObjects = objects;
				callback();
			}
		);
	}

	respond (callback) {
		this.responseData = this.responseData || {};
		const collectionName = this.module.collectionName || 'objects';
		this.responseData[collectionName] = this.sanitizedObjects;
		process.nextTick(callback);
	}

	buildQuery () {
		return null;
	}

	getQueryOptions () {
		return {};
	}
}

module.exports = GetManyRequest;
