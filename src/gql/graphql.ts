/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Big number integer */
  BigInt: { input: any; output: any; }
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  /** Account address */
  id: Scalars['String']['output'];
  transfersFrom: Array<Transfer>;
  transfersTo: Array<Transfer>;
};


export type AccountTransfersFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransferOrderByInput>>;
  where?: InputMaybe<TransferWhereInput>;
};


export type AccountTransfersToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransferOrderByInput>>;
  where?: InputMaybe<TransferWhereInput>;
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  cursor: Scalars['String']['output'];
  node: Account;
};

export enum AccountOrderByInput {
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST'
}

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  transfersFrom_every?: InputMaybe<TransferWhereInput>;
  transfersFrom_none?: InputMaybe<TransferWhereInput>;
  transfersFrom_some?: InputMaybe<TransferWhereInput>;
  transfersTo_every?: InputMaybe<TransferWhereInput>;
  transfersTo_none?: InputMaybe<TransferWhereInput>;
  transfersTo_some?: InputMaybe<TransferWhereInput>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  accountById?: Maybe<Account>;
  /** @deprecated Use accountById */
  accountByUniqueInput?: Maybe<Account>;
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  squidStatus?: Maybe<SquidStatus>;
  transferById?: Maybe<Transfer>;
  /** @deprecated Use transferById */
  transferByUniqueInput?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  transfersConnection: TransfersConnection;
};


export type QueryAccountByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAccountByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AccountOrderByInput>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryTransferByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryTransferByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransferOrderByInput>>;
  where?: InputMaybe<TransferWhereInput>;
};


export type QueryTransfersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TransferOrderByInput>;
  where?: InputMaybe<TransferWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type Transfer = {
  __typename?: 'Transfer';
  amount: Scalars['BigInt']['output'];
  blockHash: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  extrinsicHash?: Maybe<Scalars['String']['output']>;
  fee: Scalars['BigInt']['output'];
  from: Account;
  id: Scalars['String']['output'];
  remark?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['DateTime']['output'];
  to: Account;
  type: Scalars['String']['output'];
};

export type TransferEdge = {
  __typename?: 'TransferEdge';
  cursor: Scalars['String']['output'];
  node: Transfer;
};

export enum TransferOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountAscNullsFirst = 'amount_ASC_NULLS_FIRST',
  AmountDesc = 'amount_DESC',
  AmountDescNullsLast = 'amount_DESC_NULLS_LAST',
  BlockHashAsc = 'blockHash_ASC',
  BlockHashAscNullsFirst = 'blockHash_ASC_NULLS_FIRST',
  BlockHashDesc = 'blockHash_DESC',
  BlockHashDescNullsLast = 'blockHash_DESC_NULLS_LAST',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberAscNullsFirst = 'blockNumber_ASC_NULLS_FIRST',
  BlockNumberDesc = 'blockNumber_DESC',
  BlockNumberDescNullsLast = 'blockNumber_DESC_NULLS_LAST',
  ExtrinsicHashAsc = 'extrinsicHash_ASC',
  ExtrinsicHashAscNullsFirst = 'extrinsicHash_ASC_NULLS_FIRST',
  ExtrinsicHashDesc = 'extrinsicHash_DESC',
  ExtrinsicHashDescNullsLast = 'extrinsicHash_DESC_NULLS_LAST',
  FeeAsc = 'fee_ASC',
  FeeAscNullsFirst = 'fee_ASC_NULLS_FIRST',
  FeeDesc = 'fee_DESC',
  FeeDescNullsLast = 'fee_DESC_NULLS_LAST',
  FromIdAsc = 'from_id_ASC',
  FromIdAscNullsFirst = 'from_id_ASC_NULLS_FIRST',
  FromIdDesc = 'from_id_DESC',
  FromIdDescNullsLast = 'from_id_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  RemarkAsc = 'remark_ASC',
  RemarkAscNullsFirst = 'remark_ASC_NULLS_FIRST',
  RemarkDesc = 'remark_DESC',
  RemarkDescNullsLast = 'remark_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST',
  ToIdAsc = 'to_id_ASC',
  ToIdAscNullsFirst = 'to_id_ASC_NULLS_FIRST',
  ToIdDesc = 'to_id_DESC',
  ToIdDescNullsLast = 'to_id_DESC_NULLS_LAST',
  TypeAsc = 'type_ASC',
  TypeAscNullsFirst = 'type_ASC_NULLS_FIRST',
  TypeDesc = 'type_DESC',
  TypeDescNullsLast = 'type_DESC_NULLS_LAST'
}

export type TransferWhereInput = {
  AND?: InputMaybe<Array<TransferWhereInput>>;
  OR?: InputMaybe<Array<TransferWhereInput>>;
  amount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockHash_contains?: InputMaybe<Scalars['String']['input']>;
  blockHash_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  blockHash_endsWith?: InputMaybe<Scalars['String']['input']>;
  blockHash_eq?: InputMaybe<Scalars['String']['input']>;
  blockHash_gt?: InputMaybe<Scalars['String']['input']>;
  blockHash_gte?: InputMaybe<Scalars['String']['input']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  blockHash_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockHash_lt?: InputMaybe<Scalars['String']['input']>;
  blockHash_lte?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_eq?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  blockHash_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  blockHash_startsWith?: InputMaybe<Scalars['String']['input']>;
  blockNumber_eq?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  extrinsicHash_contains?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_endsWith?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_eq?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_gt?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_gte?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  extrinsicHash_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  extrinsicHash_lt?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_lte?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_not_eq?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  extrinsicHash_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  extrinsicHash_startsWith?: InputMaybe<Scalars['String']['input']>;
  fee_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<AccountWhereInput>;
  from_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  remark_contains?: InputMaybe<Scalars['String']['input']>;
  remark_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  remark_endsWith?: InputMaybe<Scalars['String']['input']>;
  remark_eq?: InputMaybe<Scalars['String']['input']>;
  remark_gt?: InputMaybe<Scalars['String']['input']>;
  remark_gte?: InputMaybe<Scalars['String']['input']>;
  remark_in?: InputMaybe<Array<Scalars['String']['input']>>;
  remark_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  remark_lt?: InputMaybe<Scalars['String']['input']>;
  remark_lte?: InputMaybe<Scalars['String']['input']>;
  remark_not_contains?: InputMaybe<Scalars['String']['input']>;
  remark_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  remark_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  remark_not_eq?: InputMaybe<Scalars['String']['input']>;
  remark_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  remark_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  remark_startsWith?: InputMaybe<Scalars['String']['input']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  to?: InputMaybe<AccountWhereInput>;
  to_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  type_endsWith?: InputMaybe<Scalars['String']['input']>;
  type_eq?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  type_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  type_not_eq?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TransfersConnection = {
  __typename?: 'TransfersConnection';
  edges: Array<TransferEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WhereIdInput = {
  id: Scalars['String']['input'];
};

export type GetTransfersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransfersQuery = { __typename?: 'Query', transfers: Array<{ __typename?: 'Transfer', id: string, amount: any, from: { __typename?: 'Account', id: string }, to: { __typename?: 'Account', id: string } }> };


export const GetTransfersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTransfers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transfers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<GetTransfersQuery, GetTransfersQueryVariables>;