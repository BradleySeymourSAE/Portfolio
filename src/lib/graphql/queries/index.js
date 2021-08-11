import { loader } from 'graphql.macro';

const userTweetsQuery = loader('./fetch-user-tweets.gql');
const fetchUserGamesQuery = loader('./fetch-user-games.gql');

export {
    userTweetsQuery,
    fetchUserGamesQuery
};
