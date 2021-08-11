import React from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "scss/light-slider.scss";
import AwesomeSliderStyles2 from "scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import unityIcon from '@iconify/icons-logos/unity';
import cSharpIcon from '@iconify/icons-logos/c-sharp';
import { Icon } from '@iconify/react';



function ProjectDetailsModal(props)
{

  const 
  {
    data,
    onHide,
  } = props;

  if (data) 
  {

    var {
      technologies,
      images,
      title,
      description,
      url
    } = data;

    if (technologies) 
    {
      
      var tech = technologies.map((icons, i) => {
      var l_IconToUse;
      
      switch (icons.class)
      {
        case "devicon-unity-plain":
          l_IconToUse = unityIcon;
          break;
        case "devicon-csharp-plain":
          l_IconToUse = cSharpIcon;
          break;
        default:
          l_IconToUse = icons.class;
        break;
      }
      

        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center">
                <Icon icon={l_IconToUse} style={{ fontSize: "100%" }}>
                  <p className="text-center">
                    {icons.name}
                  </p>
                </Icon>
              </div>
            </span>
          </li>
        );
      });


      if (images) {
        var img = images.map((elem, i) => {
          return <div key={i} data-src={elem} />;
        });
      }
    }

  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>

          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}



export default ProjectDetailsModal;
