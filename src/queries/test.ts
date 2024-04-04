import { graphql } from '../gql'

export const getTransfersQueryDocument = graphql(/* GraphQL */ `
    query GetTransfers {
        transfers (limit: 10) {
            id
            from {
                id
            }
            to {
                id
            }
            amount
        }
    }

`)
