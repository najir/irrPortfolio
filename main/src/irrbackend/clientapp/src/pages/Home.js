import './styles/home.css';
import GitFetch from "../components/GitFetch";
import BookFetch from "../components/BookFetch";
import BlogFetch from "../components/BlogFetch";
import ProjectFetch from "../components/ProjectFetch";
import React from 'react';

class HomePage extends React.Component {
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
                  <p className='mb-5'>This website serves as a way to visualize my portfolio, provide my resume, and post my personal blogs or research.</p>

                  <p>Below is a quickview of my recent(30day) activity on github, recent projects & commits, along with my last reviewed book and personal blog post.</p>
                </div>
                <div className="transition-in contactbar">
                  <a id="contactlink"href="/resume">Head over to my resume</a>
                  <i className="bi bi-arrow-right-circle float-right font-small"></i>
                </div>
              </div>
              <GitFetch />
              <div id="pagefill"></div>
              <div className="bookandblogwrapper">
                <div className="bookandblog">
                    <BookFetch />
                    <BlogFetch />
                    <div id="pagefill"></div>
                </div>
                <div id="pagefill"></div>
              </div>
              <ProjectFetch />
              <div id="pagefill"></div>
            </div>
        );
    }    
}

export default HomePage;
