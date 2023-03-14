import './styles/home.css';
import GitFetch from "../components/GitFetch";
import BookFetch from "../components/BookFetch";
import BlogFetch from "../components/BlogFetch";
import ProjectFetch from "../components/ProjectFetch";
import React from 'react';

class HomePage extends React.Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
      window.scrollTo(0, 0);
    }
    render(){
        return (
            <div>
              <div id="titleimage">
                <h1 id="titlecard" className="float-end text-end sign-animation">
                  <span>&#60;</span>Desktop Applications<span> /&#62;</span> <br/>
                  <span>&#60;</span>Server Integration<span> /&#62;</span> <br/>
                  <span>&#60;</span>Web Development<span> /&#62;</span><span className="blink">|</span>
                </h1>
                <div id="pagefill"></div>
                <h4 id="textboxmain" className="mt-5 ms-3">Welcome to my Portfolio!</h4>
                <div id="greybox" className="w-75">
                  <p>As an aspiring developer this website displays information on everything from project details to git commit history</p>
                  <br/>
                  <p><a href="/about">About Me</a>: Personal details and contact information</p>
                  <p><a href="/portfolio">Portfolio</a>: A list of my current and past projects</p>
                  <p><a href="/blog">About Me</a>: Personal blog to write book summaries and research !Incomplete</p>
                </div>
                <div className="transition-in contactbar">
                  <a id="contactlink"href="/resume">Head over to my resume</a>
                  <i className="bi bi-arrow-right-circle float-right font-small"></i>
                </div>
              </div>
              <GitFetch />
              <ProjectFetch />
              <div className="bookandblogwrapper">
                <div id="pagefill"></div>
                <div className="bookandblog">
                    <BookFetch />
                    <BlogFetch />
                    <div id="pagefill"></div>
                </div>
                <div id="pagefill"></div>
              </div>
            </div>
        );
    }    
}

export default HomePage;
