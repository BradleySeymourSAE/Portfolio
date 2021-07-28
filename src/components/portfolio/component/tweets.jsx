import React from 'react';
import Spinner from 'components/ui/spinner';
import Tweet from './tweet';



function Tweets(props)
{
    const { user, timeline, username } = props;

    return (
            timeline.map(tweet => (
                <Tweet key={tweet.id} user={user} tweet={tweet} username={username}></Tweet>
            ))
    );
}

export default Tweets;
