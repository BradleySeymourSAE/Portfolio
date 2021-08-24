import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';
import "sidebar-styles.css";




function Navigation()
{
    return (
        <div id="sidebar-wrapper" className="d-none d-sm-block">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <div href="#">Bradley Seymour</div>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#featured-projects">Feature Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#twitter">Twitter Feed</a></li>
                <li><a href="#resume">Experience</a></li>
                <li><a href="#footer">Social</a></li>
            </ul>
        </div>
    )
}


export default Navigation;