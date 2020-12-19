import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Gallery from './components/gallery';
import Team from './components/Team';
import Contact from './components/contact';
import NGORegister from './components/NGORegister';
import JsonData from './data/data.json';
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
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <Gallery />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />

      </div>

    return (
      <Router>
        <Route exact path = "/">{landingPage}</Route>
        <Route path = "/ngoregister" component={NGORegister}/>
      </Router>
    )
  }
}

export default App;
