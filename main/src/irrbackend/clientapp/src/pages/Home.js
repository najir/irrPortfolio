import './styles/home.css';
import GitFetch from "../components/GitFetch";
import BookFetch from "../components/BookFetch";
import BlogRecentWidget from "../components/blog/BlogRecent";
import ProjectFetch from "../components/ProjectFetch";
import InfoWidget from "../components/InfoWidget";
import SkillsComp from '../components/SkillsComp';
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
            <div className="home">
              <div id="titleimage"><div className="transition-in">
                <InfoWidget />
                <div id="pagefill-medium"></div>

                <div id="textboxmain" className="mt-5 ms-3 welcome-box\">Welcome to my Portfolio!</div>

                <div id="greybox" className="w-50">
                  <p>Built with ASP.NET and React, Hosted on Azure, and secured with Cloudflare. This website contains a host of revelant features such as: </p>
                  <br />
                  <div className = "d-flex flex-column">
                    <div className = "d-flex align-items-start">
                      <i class="bi bi-people font-small me-1 mb-1"></i>
                      <p>Duende User Authentication</p>
                    </div>
                    <div className = "d-flex align-items-start">
                      <i class="bi bi-stack font-small me-1 mb-1"></i>
                      <p>Web Api</p>
                    </div>
                    <div className = "d-flex align-items-start">
                      <i class="bi bi-hdd-rack font-small me-1 mb-1"></i>
                      <p>Complete database storage access via SQL | Running on AzureSQL</p>
                    </div>
                    <div className = "d-flex align-items-start">
                      <i class="bi bi-blockquote-left font-small me-1 mb-1"></i>
                      <p>Fully integrated blog, editing/modifying/posting/viewing</p>
                    </div>
                    <div className = "d-flex align-items-start">
                      <i class="bi bi-filetype-jsx font-small me-1 mb-1"></i>
                      <p>Dynamic webpages via Bootstrap and REACT's virtual DOM updates</p>
                    </div>
                    <div className = "d-flex align-items-start">
                      <i class="bi bi-file-earmark-person font-small me-1 mb-1"></i>
                      <p>Integrated resume via a React-Wrapped JSON schema</p>
                    </div>
                  </div>
                  <br/>
                </div>

                <div className="contactbar">
                  <a id="contactlink" href="/resume" target="_blank" rel="noopener noreferrer">Head over to my resume</a>
                  <i className="bi bi-arrow-right-circle float-right font-small"></i>
                </div>
                
              </div></div>
              <GitFetch />
              <ProjectFetch />
              <div className="bookandblogwrapper transition">
                <div id="pagefill-medium"></div>
                <div className="bookandblog">
                    <BookFetch />
                    <BlogRecentWidget />
                    <div id="pagefill-medium"></div>
                </div>
                <div id="pagefill"></div>
              </div>
              <div id="pagefill-medium"></div>
              <SkillsComp />
              <div id="pagefill-small"></div>
            </div>
        );
    }    
}

export default HomePage;
