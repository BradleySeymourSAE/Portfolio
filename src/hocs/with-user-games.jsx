import { graphql } from '@apollo/react-hoc';
import { fetchUserGamesQuery } from 'lib/graphql/queries';

export default graphql(fetchUserGamesQuery, { props: ({ ownProps, data }) => 
{
    if (data.loading) return { data };
    if (!data.userGames) return;

    let userGames = data["userGames"];
    
    userGames = userGames.filter(game => game.title !== "LuftRanger");

    const games = userGames.games || [];

    return { userGames, games, data };
},
});