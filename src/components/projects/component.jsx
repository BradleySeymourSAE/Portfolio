import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import * as Styled from '../styled';
import styled from 'styled-components/macro';


const StyledProject = styled.div
`

`;

const StyledProjectTitle = styled.p
`
  color: ${({ theme }) => theme.colors.greyDarken4};
  font-size: 1.3em;
  font-weight: 900;
  margin: 5px;
  padding: 0.48rem;
  font-family: 'Poppins';
`;

const StyledProjectDate = styled.span
`
  margin-top: 5%;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.darkContrast};
  background-color: ${({ theme }) => theme.colors.accentContrast};
`;



function Projects(props) {
    const [state, setState] = useState({ detailsModalShow: false, deps: {} });

    const {
        resumeProjects,
        resumeBasicInfo,
    } = props;

    const detailsModalShow = (data) => setState({ detailsModalShow: true, deps: data });
    const detailsModalHide = () => setState({ detailsModalShow: false });

    if (resumeProjects && resumeBasicInfo) {
      var sectionName = resumeBasicInfo.section_name.projects;
      var localProjects = resumeProjects;
    
      if (!props.userGames) return <div>Loading...</div>;

      // Loop through each of the games coming in from our api 
        props.userGames.map((game) => {
            // loop through the local projects 
            localProjects.map(project => 
            {
                // If the game title matches the local games title 
                if (game.title.includes(project.title))
                {
                    // add the data to the game 
                    var { startDate, description, images, url, technologies } = project;
                    game["startDate"] = startDate;
                    game["description"] = description;
                    game["images"] = images;
                    game["url"] = url;
                    game["technologies"] = technologies;
                }
                return project;
            });

            if (!game.startDate)
              game["startDate"] = 2021;

            return game;
        });
         
      var projects = props.userGames.map(function (projects, index) 
      {

        if (!projects.title || !projects.cover_url)
          return;

        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                        src={projects.cover_url}
                        alt=""
                        height="230"
                        style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                    />
                  <StyledProjectDate className="project-date">
                    {projects.startDate}
                  </StyledProjectDate>
                  <br />
                  <StyledProjectTitle className="project-title-settings mt-3">
                    {projects.title}
                  </StyledProjectTitle>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <Styled.SectionLayout id="featured-projects">
        <div className="col-md-12">
          <Styled.SectionTitle className="section-title">
            <span>{sectionName}</span>
          </Styled.SectionTitle>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">
              {projects}
            </div>
          </div>
          <ProjectDetailsModal
            show={state.detailsModalShow}
            onHide={detailsModalHide}
            data={state.deps}
          />
        </div>
      </Styled.SectionLayout>
    );
  }

export default Projects;
