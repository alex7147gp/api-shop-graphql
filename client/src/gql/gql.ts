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
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "query GetProducts {\n  photos {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetProduct($id: ID!) {\n  photo(id: $id) {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetCategories {\n  categories {\n    id\n    cover\n    name\n    emoji\n    path\n  }\n}\n\nquery GetCategory($categoryId: ID!) {\n  photos(categoryId: $categoryId) {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetFavory {\n  favs {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nmutation signup($input: UserCredentials!) {\n  signup(input: $input)\n}\n\nmutation login($input: UserCredentials!) {\n  login(input: $input)\n}\n\nmutation likeProduct($input: LikePhoto!) {\n  likePhoto(input: $input) {\n    id\n    likes\n    liked\n  }\n}": types.GetProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts {\n  photos {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetProduct($id: ID!) {\n  photo(id: $id) {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetCategories {\n  categories {\n    id\n    cover\n    name\n    emoji\n    path\n  }\n}\n\nquery GetCategory($categoryId: ID!) {\n  photos(categoryId: $categoryId) {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetFavory {\n  favs {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nmutation signup($input: UserCredentials!) {\n  signup(input: $input)\n}\n\nmutation login($input: UserCredentials!) {\n  login(input: $input)\n}\n\nmutation likeProduct($input: LikePhoto!) {\n  likePhoto(input: $input) {\n    id\n    likes\n    liked\n  }\n}"): (typeof documents)["query GetProducts {\n  photos {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetProduct($id: ID!) {\n  photo(id: $id) {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetCategories {\n  categories {\n    id\n    cover\n    name\n    emoji\n    path\n  }\n}\n\nquery GetCategory($categoryId: ID!) {\n  photos(categoryId: $categoryId) {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nquery GetFavory {\n  favs {\n    id\n    categoryId\n    src\n    likes\n    liked\n    userId\n  }\n}\n\nmutation signup($input: UserCredentials!) {\n  signup(input: $input)\n}\n\nmutation login($input: UserCredentials!) {\n  login(input: $input)\n}\n\nmutation likeProduct($input: LikePhoto!) {\n  likePhoto(input: $input) {\n    id\n    likes\n    liked\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;