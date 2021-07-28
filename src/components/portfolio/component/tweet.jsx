import React from 'react';
import Text from 'components/web-ui/text';
import Link from 'components/web-ui/link';
import Image from 'components/web-ui/image';
import moment from 'moment';
import styled from 'styled-components/macro';


const TweetViewContainer = styled.div
`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: #000000;
    background-color: ${({ theme }) => theme.colors.greyLighten4};
    padding: 1.48rem 2rem;
    border-radius: ${({ theme }) => theme.radius.sml};
    box-shadow: ${({ theme }) => theme.shadow.depth3};
`;

const TwitterImage = styled.img
`
    padding: 0.48rem 0.64rem;
    box-shadow: ${({ theme }) => theme.shadow.depth2};
    border-radius: ${({ theme }) => theme.radius.sml};
    width: 150px;
    height: 150px;
    padding-bottom: ${(p) => (p.ratio ? p.ratio * 100 : 75)}%;
`;

const TwitterUsername = styled(Text)
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

const TweetDescription = styled(Text)
`
    font-size: 1.1rem;
    line-height: 1.35;
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
    const { username, tweet, image } = props;
    let hasDisplayImageUrl = false;

    if (image)
    {
        hasDisplayImageUrl = true;
    }

    return (
        <TweetUrl target="_blank" to={`https://twitter.com/${username}/status/${tweet.id}`}>
            <TweetViewContainer key={tweet.id}>
                <TwitterUsername>@{username} - <span>{formatDateTime(tweet.created_at)}</span></TwitterUsername>
                <TweetDescription>
                    {tweet.text}
                </TweetDescription>
               
                {hasDisplayImageUrl && (
                    <TwitterImage alt="" src={image}></TwitterImage>
                )}
            </TweetViewContainer>
        </TweetUrl>
    );
}


export default Tweet;