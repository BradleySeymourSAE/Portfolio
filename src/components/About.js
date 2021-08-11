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
        <div className="col s12">
          <Styled.SectionTitle 
              className="center" color={({ theme }) => `${theme.colors.greyDarken4}`} 
              weight={`${({ theme }) => theme.fonts.weights.bolder}`}
            >
            <span>
              {sectionName}
            </span>
          </Styled.SectionTitle>

            <div className="col s12">
              <div className="row center">

                {/* <!-- Avatar Image Placeholder --> */}
                <div className="col m6 pull-m1 center">
                  <div className="col m6 center">
                    <img
                      className="responsive-img"
                      height="150px"
                      src={profilepic}
                      alt="Avatar placeholder"
                    />
                  </div>
                </div>

                {/* <!-- Card Text Box  --> */}
                <div className="col m6 pull-m1 center">
                  <div className="col s12">
                    <div className="card col s12" style={{ marginTop: "1rem", paddingTop: '10px' }}>
              
                    <Styled.SectionContent
                      className="card-content valign-wrapper"
                      style={{
                        fontFamily: "Poppins",
                        height: "auto",
                        fontSize: "1em",
                        lineHeight: "150%",
                        padding: "1rem 1.48rem"
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
