import React from 'react';
import Text from 'components/web-ui/text';
import Link from 'components/web-ui/link';
import moment from 'moment';
import styled from 'styled-components/macro';

const TweetViewContainer = styled.div
`
    font-family: ${({ theme }) => theme.fonts.poppins};
    margin: 10px;
    color: ${({ theme }) => theme.colors.lighten};
    background-color: ${({ theme }) => theme.colors.darkenAccent};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.radius.lrg};
    max-width: 800px;
`;

const TwitterImage = styled.img
`   
    margin-top: 15px;
    padding: 0.48rem;
    box-shadow: ${({ theme }) => theme.shadow.depth1};
    border-radius: ${({ theme }) => theme.radius.lrg};
    width: 50%;
    background-image: ${(p) => p.src && `url('${p.src}');`};
    border-color: ${({ theme }) => theme.colors.greyDarken4};
    border-size: 1px;
`;

const TwitterUsername = styled.p
`
font-family: ${({ theme }) => theme.fonts.poppins};
font-size: 14px;
  color: ${({ theme }) => theme.colors.lighten};
  font-weight: 600;
  margin-bottom: 6px;

  & span {
    font-weight: normal;
  }
`;

const TweetDescription = styled.p
`
    font-size: 1.1rem;
    line-height: 1.35;
    text-shadow: none !important;
`;

const TweetUrl = styled(Link)
`
    text-decoration: none;
    display: block;
    width: 100%;
`;

const formatDateTime = (dateTime) => moment(dateTime, 'YYYY-MM-DD HH-mm-ss').format('MMM Do');

function Tweet(props)
{
    const { username, tweet } = props;
    let image_url;

    if (tweet.includes && tweet.includes.media)
    {
        image_url = tweet.includes.media[0].url;
    }

    return (
        <TweetUrl target="_blank" to={`https://twitter.com/${username}/status/${tweet.id}`}>
            <TweetViewContainer key={tweet.id}>
                <TwitterUsername>@{username} - <span>{formatDateTime(tweet.created_at)}</span></TwitterUsername>
                <TweetDescription>
                    {tweet.text}
                </TweetDescription>
                {image_url && <TwitterImage src={image_url} alt="..." />}
            </TweetViewContainer>
        </TweetUrl>
    );
}


export default Tweet;