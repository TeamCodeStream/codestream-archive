'use strict';

var PubNubTest = require('./pubnub_test');
var NoAccessTest = require('./no_access_test');
//var RevokeAccessTest = require('./revoke_access_test');
var UnsubscribeTest = require('./unsubscribe_test');
var HistoryTest = require('./history_test');
var MultipleHistoryTest = require('./multiple_history_test');

// make jshint happy
/* globals describe */

/* jshint -W071 */

describe('pubnub', function() {

	this.timeout(20000);

	new PubNubTest().test();
	new NoAccessTest().test();
//	new RevokeAccessTest().test(); // Disabled because the test is not passing reliably, TODO: COD-64
	new UnsubscribeTest().test();
	new HistoryTest().test();
	new MultipleHistoryTest().test();
});

/* jshint +W071 */
