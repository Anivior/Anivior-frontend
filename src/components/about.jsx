import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>Anivior is a web-based application that 
associates user and close by NGOs in real time so 
that user can anonymously provide live location and 
report the subtleties of hurt and surrendered animals. 
Application likewise gives a map that monitors 
mishaps and pin points more accident prone regions.
</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
