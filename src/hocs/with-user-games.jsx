import { graphql } from '@apollo/react-hoc';
import { fetchUserGamesQuery } from 'lib/graphql/queries';

export default graphql(fetchUserGamesQuery, { props: ({ ownProps, data }) => 
{
    if (data.loading) return { data };
    if (!data.userGames) return;

    const userGames = data["userGames"];
    const games = userGames.games || [];

    return { userGames, games, data };
},
});