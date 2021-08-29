import React, { Component } from 'react';
import Header from 'components/Header';
import About from 'components/About';
import Experience from 'components/Experience';
import Footer from 'components/Footer';
import Projects from 'components/projects';
import Skills from 'components/Skills';
import Twitter from 'components/twitter';
import Navigation from 'Navigation';
import $ from 'jquery';
import "./App.scss";
import styled from 'styled-components/macro';


const HomepageLayout = styled.div
`
  background-color: ${(p) => p.bg};
`;


class Homepage extends Component {
  
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
      assetData: {}
    };
  }

  componentDidMount() {
    this.loadSharedData();
    this.loadResumeFromPath();
    this.loadAssetsData();
  }

  loadResumeFromPath() {
    $.ajax({
      url: `portfolio_responses.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) 
      { 
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadAssetsData()
  {
    $.ajax({
      url: `project_assets_data.json`,
      dataType: "json",
      cache: false,
      success: function (data)
      {
        this.setState({ assetData: data });
      }
      .bind(this),
      error: function (xhr, status, err)
      {
        alert(err);
      },
    });
  }

  render() {
    return (
      <HomepageLayout bg={({ theme }) => `${theme.colors.accent}`} id="wrapper" className="toggled">
        <Navigation />
        <div className="page-content-wrapper">
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          className="container-fluid"
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          className="container-fluid"
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
          gameAssets={this.state.assetData.assets}
        />
        <Skills
          className="container-fluid"
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Twitter className="container-fluid"/>
        <Experience
          className="container-fluid"
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      </HomepageLayout>
    );
  }
}

export default Homepage;