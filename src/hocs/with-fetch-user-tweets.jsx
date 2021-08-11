import { graphql } from '@apollo/react-hoc';
import { userTweetsQuery } from 'lib/graphql/queries';



export default graphql(userTweetsQuery, { 
    options: ({ username }) => 
    ({
        fetchPolicy: 'no-cache',
        variables: { username: username || "seemore_gamedev" },
    }),
    props: ({ ownProps, data }) => 
{

    if (data.loading) return { data };
    if (!data.fetchUserTweets) return;

    const fetchUserTweets = data["fetchUserTweets"];
    const user = fetchUserTweets["user"];
    const timeline = user["timeline"] || [];


    return { fetchUserTweets, user, timeline, data };
},
});