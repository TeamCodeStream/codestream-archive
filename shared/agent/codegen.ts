import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	// false to silence console messages
	verbose: true,
	debug: true,
	noSilentErrors: true,
	schema: {
		"https://nerd-graph.nr-ops.net/graphql": {
			headers: {
				"api-key": process.env.NR_USER_APIKEY!,
				"NewRelic-Requesting-Services": "CodeStream",
			},
		},
	},
	documents: "src/providers/newrelic/nerdgraph/**/*.graphql",
	generates: {
		"src/providers/newrelic/nerdgraph/nerdgraph.ts": {
			// preset: "client",
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-graphql-request",
				{
					add: {
						content: `/* tslint:disable */
/* eslint-disable */
/* This file was automatically generated on ${new Date().toLocaleString()} and should not be edited by hand. */
						`,
					},
				},
			],
			config: {
				// rawRequest: true,

				/**
				 * whether __typename gets added to the generated types
				 */
				skipTypename: false,
				omitOperationSuffix: false,
				preResolveTypes: true,
				extractAllFieldsToTypes: true,
				noNamespaces: true,
				avoidOptionals: false,
				enumsAsTypes: true,
				exportFragmentSpreadSubTypes: true,
				flattenGeneratedTypes: true,
				flattenGeneratedTypesIncludeFragments: true,
				dedupeOperationSuffix: true,
				dedupeFragments: true,
				noExport: false,
				disableDescriptions: true,
				skipTypeNameForRoot: true,
				namingConvention: {
					typeNames: "change-case-all#pascalCase",
					transformUnderscore: false,
				},
			},
		},
		"./nerdgraph.schema.json": {
			plugins: ["introspection"],
		},
	},
};

export default config;
