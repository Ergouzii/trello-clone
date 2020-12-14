import { gql } from '@apollo/client';

export const ADD_COLUMN = gql`
  mutation addColumn($user: String!, $colName: String!) {
    addColumn(user: $user, colName: $colName)
  }
`;

export const DELETE_COLUMN = gql`
  mutation addColumn($user: String!, $colId: ID!) {
    deleteColumn(user: $user, colId: $colId)
  }
`;

export const UPDATE_COLUMNS = gql`
  mutation updateColumns($user: String!, $cols: [updateColumnsInput!]!) {
    updateColumns(user: $user, cols: $cols)
  }
`;
