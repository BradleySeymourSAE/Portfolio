import React from 'react';
import Message from 'components/ui/message';
import Tweets from 'components/twitter/component/tweets';
import styled from 'styled-components/macro';
import Spinner from 'components/ui/spinner';
import verticalSmoothScrollingStyles from 'css/vertical-smooth-scrolling-css';
import * as Styled from '../../styled';



const TwitterFieldsContainer = styled.div`
    max-height: 500px;
    ${verticalSmoothScrollingStyles};
`;



function RecentTweets(props)
{

    const 
    {
        loading,
        error,
        data: 
        {
            fetchUserTweets
        },
    } = props;

    let followers, following, tweetsCount;

    if (loading) return <Spinner fill={({ theme }) => `${theme.colors.greyDarken4}`} />;
    if (error) return `${error.message}`;

    if (fetchUserTweets)
    {
        var user = fetchUserTweets["user"];
        var userStats = user["public_metrics"];
        var description = user["description"];
        var tweets = user["timeline"];
        if (userStats)
        {
            followers = userStats["followers_count"] ?? 0;
            following = userStats["following_count"] ?? 0;
            tweetsCount = userStats["tweet_count"] ?? 0;
        }

        var sectionTitle = "Live Twitter Feed";

        return (
            <Styled.SectionLayout id="twitter" className="center">
                <div class="col s12">
                    <div class="col s12">
                <Styled.SectionTitle class="center">
                    <span className="text-black">
                        {sectionTitle}
                    </span>
                </Styled.SectionTitle>
                <TwitterFieldsContainer className="col s8">
                    <Tweets user={user} timeline={tweets} />
                </TwitterFieldsContainer>
                </div>
             </div>
            </Styled.SectionLayout>
    );
}
else
{
    return (
    <Styled.SectionLayout id="twitter">
        <p>Waiting for tweets...</p>
    </Styled.SectionLayout>
    );
}
}

export default RecentTweets;