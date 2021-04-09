import React, { Component } from "react";

export class ProneAreas extends Component {
  render() {


    return (
      <div id="ProneAreas" className="text-center" style = {{"padding-bottom": -50}}>
        <div className="container">
          <div className="section-title">
            <h2>Prone Areas</h2>
            <p>
              Regions which have been reported to have more accidents than anywhere else, thus requiring more focus.
            </p>
            <div style = {{"padding-top": 75}}>
              <iframe title="Prone areas" src="https://www.google.com/maps/d/u/0/embed?mid=1rRQMdfefBbctMI0sjhvjlFaBD4EzEbvY" width="100%" height="480"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProneAreas;
