import React, { Component } from 'react';
import Header from 'components/Header';
import About from 'components/About';
import Experience from 'components/Experience';
import Footer from 'components/Footer';
import Projects from 'components/projects';
import Skills from 'components/Skills';
import Twitter from 'components/twitter';
import $ from 'jquery';
import "./App.scss";
import styled from 'styled-components/macro';


const HomepageLayout = styled.div
`
  background-color: ${(p) => p.color};
`;


class Homepage extends Component {
  
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  componentDidMount() {
    this.loadSharedData();
    this.loadResumeFromPath();
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

  render() {
    return (
      <HomepageLayout
        color={({ theme }) => `${theme.colors.lightContrast}`}
      >
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          className="container"
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          className="container"
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          className="container"
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Twitter className="center"/>
        <Experience
          className="container"
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </HomepageLayout>
    );
  }
}

export default Homepage;