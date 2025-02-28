import * as Types from '../schema.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ListProposalsQueryVariables = Types.Exact<{
  where?: Types.Proposal_Filter;
  skip?: Types.Scalars['Int'];
  first?: Types.Scalars['Int'];
  orderBy?: Types.Proposal_OrderBy;
  orderDirection?: Types.OrderDirection;
  connectedAddress?: Types.InputMaybe<Types.Scalars['Bytes']>;
}>;

export type ListProposalsQuery = {
  proposals: Array<{
    id: string;
    createdAt: string;
    createdBy: string;
    txHash: string;
    proposalId: string;
    prevProposalId: string;
    proposalDataHash: string;
    proposalData: string;
    actionGasEstimate: string;
    details: string;
    title?: string | undefined;
    description?: string | undefined;
    proposalType: string;
    contentURI?: string | undefined;
    contentURIType?: string | undefined;
    sponsorTxHash?: string | undefined;
    sponsored: boolean;
    selfSponsor: boolean;
    sponsor?: string | undefined;
    sponsorTxAt?: string | undefined;
    votingPeriod: string;
    votingStarts: string;
    votingEnds: string;
    gracePeriod: string;
    graceEnds: string;
    expiration: string;
    expirationQueryField: string;
    cancelledTxHash?: string | undefined;
    cancelledBy?: string | undefined;
    cancelled: boolean;
    cancelledTxAt?: string | undefined;
    yesBalance: string;
    noBalance: string;
    yesVotes: string;
    noVotes: string;
    processTxHash?: string | undefined;
    processedBy?: string | undefined;
    processed: boolean;
    processTxAt?: string | undefined;
    actionFailed: boolean;
    passed: boolean;
    proposalOffering: string;
    maxTotalSharesAndLootAtYesVote: string;
    tributeToken?: string | undefined;
    tributeOffered?: string | undefined;
    tributeTokenSymbol?: string | undefined;
    tributeTokenDecimals?: string | undefined;
    tributeEscrowRecipient?: string | undefined;
    sponsorMembership?: { memberAddress: string; shares: string } | undefined;
    dao: { totalShares: string; quorumPercent: string };
    votes?:
      | Array<{
          id: string;
          txHash: string;
          createdAt: string;
          daoAddress: string;
          approved: boolean;
          balance: string;
          member: { id: string; memberAddress: string };
        }>
      | undefined;
  }>;
};

export type ListConnectedMemberProposalsQueryVariables = Types.Exact<{
  where?: Types.Proposal_Filter;
  memberWhere?: Types.Member_Filter;
  skip?: Types.Scalars['Int'];
  first?: Types.Scalars['Int'];
  orderBy?: Types.Proposal_OrderBy;
  orderDirection?: Types.OrderDirection;
  connectedAddress?: Types.InputMaybe<Types.Scalars['Bytes']>;
}>;

export type ListConnectedMemberProposalsQuery = {
  proposals: Array<{
    id: string;
    connectedMemberVotes?:
      | Array<{
          id: string;
          txHash: string;
          createdAt: string;
          daoAddress: string;
          approved: boolean;
          balance: string;
          member: { id: string; memberAddress: string };
        }>
      | undefined;
  }>;
};

export type FindProposalQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  connectedAddress?: Types.InputMaybe<Types.Scalars['Bytes']>;
}>;

export type FindProposalQuery = {
  proposal?:
    | {
        id: string;
        createdAt: string;
        createdBy: string;
        txHash: string;
        proposalId: string;
        prevProposalId: string;
        proposalDataHash: string;
        proposalData: string;
        actionGasEstimate: string;
        details: string;
        title?: string | undefined;
        description?: string | undefined;
        proposalType: string;
        contentURI?: string | undefined;
        contentURIType?: string | undefined;
        sponsorTxHash?: string | undefined;
        sponsored: boolean;
        selfSponsor: boolean;
        sponsor?: string | undefined;
        sponsorTxAt?: string | undefined;
        votingPeriod: string;
        votingStarts: string;
        votingEnds: string;
        gracePeriod: string;
        graceEnds: string;
        expiration: string;
        expirationQueryField: string;
        cancelledTxHash?: string | undefined;
        cancelledBy?: string | undefined;
        cancelled: boolean;
        cancelledTxAt?: string | undefined;
        yesBalance: string;
        noBalance: string;
        yesVotes: string;
        noVotes: string;
        processTxHash?: string | undefined;
        processedBy?: string | undefined;
        processed: boolean;
        processTxAt?: string | undefined;
        actionFailed: boolean;
        passed: boolean;
        proposalOffering: string;
        maxTotalSharesAndLootAtYesVote: string;
        tributeToken?: string | undefined;
        tributeOffered?: string | undefined;
        tributeTokenSymbol?: string | undefined;
        tributeTokenDecimals?: string | undefined;
        tributeEscrowRecipient?: string | undefined;
        sponsorMembership?:
          | { memberAddress: string; shares: string }
          | undefined;
        dao: { totalShares: string; quorumPercent: string };
        votes?:
          | Array<{
              id: string;
              txHash: string;
              createdAt: string;
              daoAddress: string;
              approved: boolean;
              balance: string;
              member: { id: string; memberAddress: string };
            }>
          | undefined;
        connectedMemberVotes?:
          | Array<{
              id: string;
              txHash: string;
              createdAt: string;
              daoAddress: string;
              approved: boolean;
              balance: string;
              member: { id: string; memberAddress: string };
            }>
          | undefined;
      }
    | undefined;
};

export const ListProposalsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listProposals' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Proposal_filter' },
            },
          },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '100' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Proposal_orderBy' },
            },
          },
          defaultValue: { kind: 'EnumValue', value: 'id' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderDirection' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'OrderDirection' },
            },
          },
          defaultValue: { kind: 'EnumValue', value: 'asc' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'connectedAddress' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Bytes' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'proposals' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderDirection' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'proposalId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prevProposalId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalDataHash' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalData' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'actionGasEstimate' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'details' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'contentURI' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contentURIType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sponsorTxHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsored' } },
                { kind: 'Field', name: { kind: 'Name', value: 'selfSponsor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsorTxAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingPeriod' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingStarts' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'votingEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gracePeriod' } },
                { kind: 'Field', name: { kind: 'Name', value: 'graceEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiration' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'expirationQueryField' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cancelledTxHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'cancelledBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cancelled' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cancelledTxAt' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'yesBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'yesVotes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noVotes' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'processTxHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'processedBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'processed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'processTxAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'actionFailed' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'passed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalOffering' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'maxTotalSharesAndLootAtYesVote',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeOffered' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenSymbol' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenDecimals' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeEscrowRecipient' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sponsorMembership' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'memberAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shares' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'dao' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalShares' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quorumPercent' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txHash' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'daoAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'approved' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memberAddress' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListProposalsQuery, ListProposalsQueryVariables>;
export const ListConnectedMemberProposalsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listConnectedMemberProposals' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Proposal_filter' },
            },
          },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'memberWhere' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Member_filter' },
            },
          },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '100' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Proposal_orderBy' },
            },
          },
          defaultValue: { kind: 'EnumValue', value: 'id' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderDirection' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'OrderDirection' },
            },
          },
          defaultValue: { kind: 'EnumValue', value: 'asc' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'connectedAddress' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Bytes' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'proposals' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderDirection' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'connectedMemberVotes' },
                  name: { kind: 'Name', value: 'votes' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'member_' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'memberWhere' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txHash' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'daoAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'approved' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memberAddress' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListConnectedMemberProposalsQuery,
  ListConnectedMemberProposalsQueryVariables
>;
export const FindProposalDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findProposal' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'connectedAddress' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Bytes' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'proposal' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txHash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'proposalId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prevProposalId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalDataHash' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalData' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'actionGasEstimate' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'details' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'contentURI' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contentURIType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sponsorTxHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsored' } },
                { kind: 'Field', name: { kind: 'Name', value: 'selfSponsor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsorTxAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingPeriod' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingStarts' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'votingEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gracePeriod' } },
                { kind: 'Field', name: { kind: 'Name', value: 'graceEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiration' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'expirationQueryField' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cancelledTxHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'cancelledBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cancelled' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cancelledTxAt' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'yesBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'yesVotes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noVotes' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'processTxHash' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'processedBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'processed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'processTxAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'actionFailed' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'passed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalOffering' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'maxTotalSharesAndLootAtYesVote',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeOffered' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenSymbol' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenDecimals' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeEscrowRecipient' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sponsorMembership' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'memberAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shares' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'dao' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalShares' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quorumPercent' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txHash' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'daoAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'approved' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memberAddress' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'connectedMemberVotes' },
                  name: { kind: 'Name', value: 'votes' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'member_' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: {
                                    kind: 'Name',
                                    value: 'memberAddress',
                                  },
                                  value: {
                                    kind: 'Variable',
                                    name: {
                                      kind: 'Name',
                                      value: 'connectedAddress',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txHash' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'daoAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'approved' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memberAddress' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindProposalQuery, FindProposalQueryVariables>;
