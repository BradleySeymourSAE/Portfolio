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
import Badge from "react-bootstrap/Badge";



const WorkTitle = styled.div`
  text-align: left;
  font-size: 2em;
  font-weight: ${({ theme }) => theme.fonts.weights.bolder};
  color: ${({ theme }) => theme.colors.greyDarken4};
  margin-bottom: 3px;
`;

const CompanyTitle = styled.div`
  text-align: left;
  font-size: 1.4em;
  font-weight: ${({ theme }) => theme.fonts.weights.normal};
  color: ${({ theme }) => theme.colors.greyDarken3};
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin-bottom: 10px;
`;

const TechnologyBadgeContainer = styled.div`
    margin-bottom: 8px;
`;

const TechnologyBadge = styled(Badge)`
   background-color: ${({ theme }) => theme.colors.accent};
   color: ${({ theme }) => theme.colors.darken};   
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
              pill
              className="main-badge mr-2 mb-2"
              key={i}>
              {technology}
            </TechnologyBadge>
          );
        });
        var l_TechnologyBadges = technologies.map((technology, i) => {
          return (
            <TechnologyBadge 
                pill
                className="experience-badge mr-2 mb-2" 
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
            <TechnologyBadgeContainer style={{ textAlign: "left" }}>
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
            <TechnologyBadgeContainer>
              {l_TechnologyBadges}
            </TechnologyBadgeContainer>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <Styled.SectionLayout id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <Styled.SectionTitle className="section-title">
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </Styled.SectionTitle>
          </div>
        </div>
        {/*
            <!-- Vertical Timeline Begins Here -->
        */}
        <div className="col-md-8 mx-auto" style={{ marginBottom: "30px" }}>
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
