import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Anivior
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#ProneAreas" className="page-scroll">
                  Prone Areas
                </a>
              </li>

              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>

              <li>
                <NavLink to="/ngoregister" className="page-scroll" style={{fontWeight: 900, color: "#333"}}>
                  NGO Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
