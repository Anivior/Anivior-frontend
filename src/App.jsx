import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import ProneAreas from './components/ProneAreas'
import About from './components/about';
import Gallery from './components/gallery';
import Team from './components/Team';
import Contact from './components/contact';
import NGORegister from './components/NGORegister';
import JsonData from './data/data.json';
import ReportAnimal from './components/ReportAnimal'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    const landingPage = 
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <ProneAreas/>
        <Gallery />
        <About data={this.state.landingPageData.About} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />

      </div>

    return (
      <Router>
        <Route exact path = "/">{landingPage}</Route>
        <Route path = "/ngoregister" component={NGORegister}/>
        <Route path = "/report" component={ReportAnimal}/>
      </Router>
    )
  }
}

export default App;
