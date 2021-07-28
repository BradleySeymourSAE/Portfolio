import React from 'react';
import Layout from 'components/portfolio/layout';
import Message from 'components/ui/message';
import Tweets from 'components/portfolio/component/tweets';
import routes from 'config/routes';
import styled from 'styled-components/macro';
import { useQuery } from '@apollo/react-hooks';
import { fetchAccountTweetsQuery } from 'lib/graphql/queries';
import Spinner from 'components/ui/spinner';



const TwitterFieldsContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 50%;
    padding: 50px;
`;

const Title = styled(Message)
`
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 21px;
    color: ${({ theme }) => theme.colors.alphaBlack80};
    font-weight: 600;
    margin-bottom: 15px;

    & span {
        font-weight: normal;
    }
`;

const FollowerCount = styled(Message)
`
    font-size: 11px;
    margin-bottom: 7.5px;
    align-items: center;
    justify-content: center;
`;

const Subtitle = styled(Message)
`
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.alphaBlack80};
    font-weight: 600;
    margin-bottom: 6px;

    & span {
        font-weight: normal;
    }
`;


function Portfolio(props)
{
    const { username = 'seemore_gamedev' } = props;
    let l_PortfolioTitle = "Bradley Seymour";
    let l_PortfolioCatchline = "Hi, I'm Bradley and I am a Game Developer. I have a passion for coding and creating unique experiences for others to learn from"
    const { loading, error, data } = useQuery(fetchAccountTweetsQuery, { variables: { username }});
    
    if (loading) return <Spinner fill={({ theme }) => theme.colors.greyDarken4} />;
    if (error) return `${error.message}`;
    const { user } = data.fetchUserTweets;
   const tweets = user.timeline;


    return (
        <Layout
            title={l_PortfolioTitle}
            subtitle={l_PortfolioCatchline}
            color={({ theme }) => theme.colors.lightBlueLighten4}
        >
            <TwitterFieldsContainer>
            <Title color={({ theme }) => theme.colors.black} isVisible text={`${user.name}`} />
            <FollowerCount color={({ theme }) => theme.colors.greyDarken4} isVisible text={`Followers: ${user.public_metrics["followers_count"]} Following: ${user.public_metrics["following_count"]} Tweets: ${user.public_metrics["tweet_count"]}`}/>
            <Subtitle color={({ theme }) => theme.colors.lightBlueLighten4} isVisible text={user.description} />
                <Tweets user={user} timeline={tweets} username={username} />
            </TwitterFieldsContainer>
        </Layout>
    );
}

export default Portfolio;