import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from '@iconify/react';
import cSharpIcon from '@iconify/icons-logos/c-sharp';
import javascriptIcon from '@iconify/icons-logos/javascript';
import styled from 'styled-components/macro';
import * as Styled from './styled';



const WorkTitle = styled.div`
  text-align: left;
  font-size: 1.15em;
  font-weight: ${({ theme }) => theme.fonts.weights.bolder};
  color: ${({ theme }) => theme.colors.greyDarken4};
  margin-bottom: 3px;
`;

const CompanyTitle = styled.div`
  text-align: left;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fonts.weights.normal};
  color: ${({ theme }) => theme.colors.greyDarken3};
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin-bottom: 10px;
`;

const TechnologyBadgeContainer = styled.div`
    margin-bottom: 8px;
`;

const TechnologyBadge = styled.span`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-family: ${(props) => props.font};
    margin: 3px;
`;


function Experience(props) 
{
  const { 
    resumeExperience, 
    resumeBasicInfo 
  } = props;

  if (resumeExperience && resumeBasicInfo)
  {
      var sectionName = resumeBasicInfo.section_name.experience;

      var work = resumeExperience.map(function (work, i) 
      {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var l_MainTechnologyBadges = mainTechnologies.map((technology, i) => {
          return (
            <TechnologyBadge 
              bg={({ theme }) => `${theme.colors.blueLighten4}`}
              color={({ theme }) => `${theme.colors.greyDarken4}`}
              font={({ theme }) => `${theme.fonts.poppins}`}
              weight={({ theme }) => `${theme.fonts.bold}`}
              className="main-badge col"
              key={i}>
              {technology}
            </TechnologyBadge>
          );
        });
        var l_TechnologyBadges = technologies.map((technology, i) => {
          return (
            <TechnologyBadge 
                bg={({ theme }) => `${theme.colors.blueLighten4}`}
                color={({ theme }) => `${theme.colors.greyDarken4}`}
                font={({ theme }) => `${theme.fonts.poppins}`}
                weight={({ theme }) => `${theme.fonts.bold}`}
                className="experience-badge col" 
                key={i}
              >
              {technology}
            </TechnologyBadge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#1F1F1F",
              color: "#fff",
              fontSize: "16px",
              textAlign: "center",
            }}
            icon={<Icon icon={cSharpIcon} style={{ paddingRight: "1.5px" }} />}
            key={i}
          >
            <TechnologyBadgeContainer className="row">
              {l_MainTechnologyBadges}
            </TechnologyBadgeContainer>

            <WorkTitle
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </WorkTitle>
            <CompanyTitle
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </CompanyTitle>
            <TechnologyBadgeContainer className="row">
              {l_TechnologyBadges}
            </TechnologyBadgeContainer>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <Styled.SectionLayout id="resume" bg={({ theme }) => `${theme.colors.darkAccent}`}>
        <div className="col s12">
          <div className="col s12">
            <Styled.SectionTitle className="center">
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </Styled.SectionTitle>
          </div>
        </div>
        <div className="col s12 m8" style={{ marginBottom: "30px" }}>
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#1F1F1F",
                color: "#fff",
                textAlign: "center"
              }}
              icon={
                <Icon icon={javascriptIcon} style={{ paddingRight: "3px" }} />
              }
            />
          </VerticalTimeline>
        </div>
      </Styled.SectionLayout>
    );
}

export default Experience;
