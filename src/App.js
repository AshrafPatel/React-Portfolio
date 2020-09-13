import "./App.css"
import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import ReactLogo from './BlockLoader.svg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  delay: 400, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
    this.displayLoader = this.displayLoader.bind(this);
  }

  displayLoader() {
    this.setState({
      loading: false
    })
  }


  componentDidMount() {
    setTimeout(this.displayLoader, 500)
  }

  render() {
    return (
      this.state.loading ? 
      <div className="loader"><img src={ReactLogo} alt="Loading"/><h2 className="loadText">Loading</h2></div> :
      <div className="App" style={{textAlign: "left"}}>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;