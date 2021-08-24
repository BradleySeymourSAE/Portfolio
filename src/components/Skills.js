import React, { Component } from "react";
import * as Styled from './styled';
import styled from 'styled-components/macro';
import theme from 'css/theme';


const Skill = styled.li
`

    li > i 
    {
      color: ${({ theme }) => theme.colors.accent};
    }

    i > p
    {
      color: ${({ theme }) => theme.colors.greyDarken4};
      font-size: 1rem;
      font-weight: 800;
      font-family: 'Poppins';
      
    }
`;

const SkillsContainer = styled.ul
`
  font-size: 24px;
`;


function Skills(props) {
  const { sharedSkills, resumeBasicInfo } = props;

    if (sharedSkills && resumeBasicInfo) 
    {
      var sectionName = resumeBasicInfo.section_name.skills;

      var skills = sharedSkills.icons.map((skills, i) => 
      {
        var color = theme.colors.darken;

        return (
          <Skill className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "150%", color: color }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "6px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </Skill>
        );
      });
    }

    return (
      <Styled.SectionLayout id="skills" style={{ paddingBottom: '5%' }}>
        <div className="col-md-12">
          <div className="col-md-12">
            <Styled.SectionTitle className="section-title">
              <span className="text-black">
                {sectionName}
              </span>
            </Styled.SectionTitle>
          </div>
          <div className="col-md-12 text-center">
            <SkillsContainer className="list-inline mx-auto skill-icon">
              {skills}
            </SkillsContainer>
          </div>
        </div>
      </Styled.SectionLayout>
    );
}

export default Skills;
