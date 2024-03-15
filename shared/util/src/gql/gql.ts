/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation EntityRelationshipUserDefinedCreateOrReplaceMutation($sourceEntityGuid: EntityGuid!, $targetEntityGuid: EntityGuid!) {\n  entityRelationshipUserDefinedCreateOrReplace(\n    sourceEntityGuid: $sourceEntityGuid\n    targetEntityGuid: $targetEntityGuid\n    type: BUILT_FROM\n  ) {\n    errors {\n      message\n      type\n    }\n  }\n}": types.EntityRelationshipUserDefinedCreateOrReplaceMutationDocument,
    "mutation ReferenceEntityCreateOrUpdateRepositoryMutation($accountId: Int!, $name: String!, $url: String!) {\n  referenceEntityCreateOrUpdateRepository(\n    sync: true\n    repositories: [{accountId: $accountId, name: $name, url: $url}]\n  ) {\n    created\n    updated\n    failures {\n      guid\n      message\n      type\n    }\n  }\n}": types.ReferenceEntityCreateOrUpdateRepositoryMutationDocument,
    "fragment EntityFields on Entity {\n  accountId\n  account {\n    name\n    id\n  }\n  goldenMetrics {\n    metrics {\n      query\n      name\n    }\n  }\n  guid\n  name\n  entityType\n  type\n}": types.EntityFieldsFragmentDoc,
    "query fetchEntitiesByIds($guids: [EntityGuid]!) {\n  actor {\n    entities(guids: $guids) {\n      ...EntityFields\n    }\n  }\n}": types.FetchEntitiesByIdsDocument,
    "query fetchEntityById($guid: EntityGuid!) {\n  actor {\n    entity(guid: $guid) {\n      ...EntityFields\n    }\n  }\n}": types.FetchEntityByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation EntityRelationshipUserDefinedCreateOrReplaceMutation($sourceEntityGuid: EntityGuid!, $targetEntityGuid: EntityGuid!) {\n  entityRelationshipUserDefinedCreateOrReplace(\n    sourceEntityGuid: $sourceEntityGuid\n    targetEntityGuid: $targetEntityGuid\n    type: BUILT_FROM\n  ) {\n    errors {\n      message\n      type\n    }\n  }\n}"): (typeof documents)["mutation EntityRelationshipUserDefinedCreateOrReplaceMutation($sourceEntityGuid: EntityGuid!, $targetEntityGuid: EntityGuid!) {\n  entityRelationshipUserDefinedCreateOrReplace(\n    sourceEntityGuid: $sourceEntityGuid\n    targetEntityGuid: $targetEntityGuid\n    type: BUILT_FROM\n  ) {\n    errors {\n      message\n      type\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReferenceEntityCreateOrUpdateRepositoryMutation($accountId: Int!, $name: String!, $url: String!) {\n  referenceEntityCreateOrUpdateRepository(\n    sync: true\n    repositories: [{accountId: $accountId, name: $name, url: $url}]\n  ) {\n    created\n    updated\n    failures {\n      guid\n      message\n      type\n    }\n  }\n}"): (typeof documents)["mutation ReferenceEntityCreateOrUpdateRepositoryMutation($accountId: Int!, $name: String!, $url: String!) {\n  referenceEntityCreateOrUpdateRepository(\n    sync: true\n    repositories: [{accountId: $accountId, name: $name, url: $url}]\n  ) {\n    created\n    updated\n    failures {\n      guid\n      message\n      type\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment EntityFields on Entity {\n  accountId\n  account {\n    name\n    id\n  }\n  goldenMetrics {\n    metrics {\n      query\n      name\n    }\n  }\n  guid\n  name\n  entityType\n  type\n}"): (typeof documents)["fragment EntityFields on Entity {\n  accountId\n  account {\n    name\n    id\n  }\n  goldenMetrics {\n    metrics {\n      query\n      name\n    }\n  }\n  guid\n  name\n  entityType\n  type\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query fetchEntitiesByIds($guids: [EntityGuid]!) {\n  actor {\n    entities(guids: $guids) {\n      ...EntityFields\n    }\n  }\n}"): (typeof documents)["query fetchEntitiesByIds($guids: [EntityGuid]!) {\n  actor {\n    entities(guids: $guids) {\n      ...EntityFields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query fetchEntityById($guid: EntityGuid!) {\n  actor {\n    entity(guid: $guid) {\n      ...EntityFields\n    }\n  }\n}"): (typeof documents)["query fetchEntityById($guid: EntityGuid!) {\n  actor {\n    entity(guid: $guid) {\n      ...EntityFields\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;