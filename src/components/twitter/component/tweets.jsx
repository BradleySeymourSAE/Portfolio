import React from 'react';
import Tweet from './tweet';



function Tweets(props)
{
    const { user, timeline } = props;

    return (
            timeline.map(tweet => (
                <Tweet key={tweet.id} tweet={tweet} username={user.username}></Tweet>
            ))
    );
}

export default Tweets;
