import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <About  data={this.state.resumeData.About}/>
        <Gallery />
        <Testimonials  data={this.state.resumeData.Testimonials}/>
        <Team  data={this.state.resumeData.Team}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
