import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Typing from 'react-typing-animation';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e)
  }

  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <React.Fragment>     
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#nav-nowrap" onClick={(e) => this.handleClick} title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
               <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
               <li><Link activeClass="active" to="resume" spy={true} smooth={true} offset={-70} duration={500}>Resume</Link></li>
               <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Works</Link></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">
                 <Typing>
                  <span>I am {resumeData.name}</span>
                  <Typing.Delay ms={10000} />
                  <Typing.Backspace count={20} />
                  {resumeData.role.map(element => {
                    return (
                    <div>
                      <span>{element}</span>
                      <Typing.Delay ms={1500} />
                      <Typing.Backspace count={20} />
                    </div>
                    )
                  })}
                  <span>I am {resumeData.name}</span>
                </Typing>
               </h1>
               <h3 data-aos="fade-right" data-aos-delay="2000" style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role[0]}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}