import React from "react";
import * as Styled from './styled';
import styled from 'styled-components/macro';

const SocialLinks = styled.div
`
margin-top: 25px;

    div > a
    {
      margin: 5px;
    }
`;

const SocialCallToActionContainer = styled.div
`

`;

const SocialCallToAction = styled.a
`

`;

const SocialIcon = styled.i
`

`;

const CopyrightContainer = styled.div
``;


const Copyright = styled.div
`

`;



function Footer(props)
{
  const { sharedBasicInfo } = props;

  if (sharedBasicInfo)
  {
    var networks = sharedBasicInfo.social.map((network) => {
      return (
        <SocialCallToActionContainer key={network.name} className="margin-small">
          <SocialCallToAction href={network.url} target="_blank" rel="noopener noreferrer">
            <SocialIcon className={network.class}></SocialIcon>
          </SocialCallToAction>
        </SocialCallToActionContainer>
      );
    });
  }

  return (
    <Styled.SectionFooter>
      <div className="row">
        <SocialLinks className="social-links center">
          {networks}
        </SocialLinks>

        <CopyrightContainer className="copyright center col s12">
          <Copyright>
            <small>
              Copyright &copy;{" "}
              {sharedBasicInfo
                ? sharedBasicInfo.name
                : "???"}
            </small>
          </Copyright>
        </CopyrightContainer>
      </div>
    </Styled.SectionFooter>
  );
}

export default Footer;
