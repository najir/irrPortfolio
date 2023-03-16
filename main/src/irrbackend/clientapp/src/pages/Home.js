import './styles/home.css';
import GitFetch from "../components/GitFetch";
import BookFetch from "../components/BookFetch";
import BlogFetch from "../components/BlogFetch";
import ProjectFetch from "../components/ProjectFetch";
import InfoWidget from "../components/InfoWidget";
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
              <div id="titleimage"><div className="transition-in">
                <InfoWidget />
                <div id="pagefill-medium"></div>

                <div id="textboxmain" className="mt-5 ms-3 welcome-box\">Welcome to my Portfolio!</div>

                <div id="greybox" className="w-50">
                  <p>Built with ASP.NET and React, this website contains a host of revelant features such as: </p>
                  <br />
                  <div className = "d-flex flex-column">
                    <div className = "d-flex align-items-end">
                      <i class="bi bi-people font-small me-1 mb-1"></i>
                      <p>Duende User Authentication</p>
                    </div>
                    <div className = "d-flex align-items-end">
                      <i class="bi bi-stack font-small me-1 mb-1"></i>
                      <p>Web Api</p>
                    </div>
                    <div className = "d-flex align-items-end">
                      <i class="bi bi-hdd-rack font-small me-1 mb-1"></i>
                      <p>Full Database integration and access via SQL | Test on Azure</p>
                    </div>
                    <div className = "d-flex align-items-end">
                      <i class="bi bi-filetype-jsx font-small me-1 mb-1"></i>
                      <p>Dynamic webpages via Bootstrap and REACT's virtual DOM updates</p>
                    </div>
                    <div className = "d-flex align-items-end">
                      <i class="bi bi-blockquote-right font-small me-1 mb-1"></i>
                      <p>A fully featured blog</p>
                    </div>
                    <div className = "d-flex align-items-end">
                      <i class="bi bi-file-earmark-person font-small me-1 mb-1"></i>
                      <p>Integrated resume via a resume JSON schema</p>
                    </div>
                  </div>
                  <br/>
                </div>

                <div className="contactbar">
                  <a id="contactlink"href="/resume">Head over to my resume</a>
                  <i className="bi bi-arrow-right-circle float-right font-small"></i>
                </div>
                
              </div></div>
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
