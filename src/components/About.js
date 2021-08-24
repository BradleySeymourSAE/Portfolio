import React from "react";
import { Icon } from "@iconify/react";
import unityIcon from "@iconify/icons-logos/unity";
import blenderIcon from '@iconify/icons-logos/blender';
import cSharpIcon from '@iconify/icons-logos/c-sharp';
import * as Styled from './styled';


function About(props){
  
  const { 
    sharedBasicInfo,
    resumeBasicInfo
  } = props;

    if (sharedBasicInfo) 
    {
      var profilepic = "images/" + sharedBasicInfo.image;
    }

    if (resumeBasicInfo) 
    {
      var sectionName = resumeBasicInfo.section_name.about;
      var about = resumeBasicInfo.description;
    }

    return (
      <Styled.SectionLayout id="about">
        <div className="col-md-12">
          <Styled.SectionTitle 
              className="section-title"
              weight={`${({ theme }) => theme.fonts.weights.bolder}`}
            >
            <span>
              {sectionName}
            </span>
          </Styled.SectionTitle>

            <div className="row center mx-auto mb-5">
              <div className="col-md-6 mb-8 center">

                {/* <!-- Avatar Image Placeholder --> */}
                <div className="polaroid">
                  <span style={{ cursor: "auto" }}>
                    <img
                      height="195"
                      src={profilepic}
                      alt="Avatar placeholder"
                    />
                  </span>
                </div>

                {/* <!-- Card Text Box  --> */}
                <div className="col-md-10 center">
                  <div className="col-md-12">
                    <div className="card">
                    <Styled.SectionContent
                      className="card-body text-justify ml-4 mr-3"
                      style={{
                        fontFamily: "Poppins",
                        height: "auto",
                        fontSize: "1.6em",
                        lineHeight: "200%",
                        padding: "2rem"
                      }}
                     >
                      {about}
                    </Styled.SectionContent>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </Styled.SectionLayout>
    );
}

export default About;
