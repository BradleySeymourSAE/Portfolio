import { loader } from 'graphql.macro';

const fetchAccountTweetsQuery = loader('./fetch-user-tweets.gql');
const fetchItchIOGamesQuery = loader('./fetch-user-games.gql');

export {
    fetchAccountTweetsQuery,
    fetchItchIOGamesQuery,
};
