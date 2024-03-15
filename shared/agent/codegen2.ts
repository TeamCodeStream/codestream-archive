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
		"src/providers/newrelic/nerdgraph/gql/": {
			preset: "client",
			presetConfig: {
				// fragmentMasking: false
			},
			plugins: [
				// "typescript",
				// "typescript-operations",
				// "typed-document-node",
			],
			// config: {
			// 	enumsAsTypes: true,
			// 	dedupeFragments: true,
			// 	flattenGeneratedTypes: true,
			// 	flattenGeneratedTypesIncludeFragments: true,
			// 	mergeFragmentTypes: true,
			// 	namingConvention: {
			// 		typeNames: "change-case-all#pascalCase",
			// 		transformUnderscore: false,
			// 	},
			// },
		},
	},
};

export default config;
