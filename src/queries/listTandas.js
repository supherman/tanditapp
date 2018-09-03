import gql from 'graphql-tag';

export default gql`
  query listTandas {
    listTandas {
      items {
        id
        status
        frequency
        amount
        participants {
          id
          userId
        }
      }
    }
  }
`;
