import React from "react";
import Typical from "react-typical";
import styled from 'styled-components/macro';
import * as Styled from './styled';


const DeveloperName = styled.h1
`
  font-family: 'Poppins';
  font-size: 3em;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.lighten};
`;

const DeveloperRoleContainer = styled.div`
  height: 75px;
`;

const DeveloperRoles = styled(Typical)
`
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 2em;
    color: ${({ theme }) => theme.colors.lighten};
`;

function Header(props)
{
  let titles;

  const { sharedData } = props;
  if (sharedData)
  {
    var name = sharedData.name;
    titles = sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
  }

  const HeaderTitleTypeAnimation = React.memo( () => {
    return <DeveloperRoles className="title-styles" steps={titles} loop={50} />
  }, (props, prevProp) => true);

  return (
    <Styled.SectionHeader id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div style={{height: '100%'}}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br/>
            <DeveloperName>
              <Typical steps={[name]} wrapper="p" />
            </DeveloperName>
            <DeveloperRoleContainer className="title-container">
              <HeaderTitleTypeAnimation />
            </DeveloperRoleContainer>
          </div>
        </div>
      </div>
    </Styled.SectionHeader>
  );
}

export default Header;
