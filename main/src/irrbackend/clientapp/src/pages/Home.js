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
                <div id="pagefill"></div>
                <h4 id="textboxmain" className="mt-5 ms-4">Welcome to my Portfolio!</h4>
                <div id="greybox" className="w-75">
                  <p className='mb-5'>This website serves as a way to visualize my portfolio, provide my resume, and post my personal blogs or research.</p>

                  <p>Below is a quickview of my recent(30day) activity on github, recent projects & commits, along with my last reviewed book and personal blog post.</p>
                </div>
                <div className="contactbar">
                  <a id="contactlink"href="/portfolio">View my Resume and Contact Info</a>
                  <i className="bi bi-arrow-right-circle float-right font-small"></i>
                </div>

                <div className="info">
                  <GitFetch />
                  <div className="bookandblog">
                    <BookFetch />
                    <BlogFetch />
                  </div>
                  <ProjectFetch />
                </div>
            </div>
        );
    }    
}

export default HomePage;
