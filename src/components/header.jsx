import React, { Component } from "react";
import   {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1 style={{
                    fontSize:'70px'
                  }}>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <Link to="/report">
                    <button
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Report Now
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
