import "./styles/project.css";
import React from 'react';
import { createRef } from 'react';
import launcherzImage from "../img/launcherz.png"

class ProjectFetch extends React.Component{
  constructor(props){
    super(props);
    this.projectData={
      title: "LauncherZ",
        image: `url(${launcherzImage})`,
        language: "Python",
        startdate: "02/09/2023",
        lastupdate: "02/23/2023",
        description: "Python based Pyside 6 QT project that implements a custom game launcher to an existing game. Allows users to add their own private servers. Provides server owners to pass along detailed information, images for advertisements and updates, an accessable rss feed for news, and outside links for install instructions.",
        link: "https://github.com/najir/launcherZ"
    }
    this.exampleData = [
      0,1,2,3,4,3,3,7,8,4,3
    ];
    this.element = createRef();
    this.onScroll = this.onScroll.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.state={
      scroll: false
    };
  }    
  setScroll(state){
    this.setState({
        scroll: state
    });
  }
  onScroll(){
    if(this.element.current){
      var compPos = this.element.current.getBoundingClientRect().top - 100;    
      var scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > compPos){
          this.setScroll(true);
          window.removeEventListener('scroll', this.onScroll);
      }
    }
  
  }

  componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <div ref={this.element} className={this.state.scroll ? "transition" : "opacity-0"}>
              <div id="clearbox" className="mt-5 mb-5">

                <div className="d-flex justify-content-start align-items-start">
                  <i className="bi bi-server font-large mb-2"></i>
                  <h5 id="textboxmain" className="ms-2">Featured Project</h5>
                </div>

                <div className="d-flex">
                  <div className="project-image-card" style={{backgroundImage: this.projectData.image}} />
                  <div>
                    <h2>{this.projectData.title}</h2>
                    <div className="featured-details">
                      <p><a href={this.projectData.link} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                      <p>Primary Language: {this.projectData.language}</p>
                      <p>Start Date: {this.projectData.startdate}</p>
                      <p>Last Updated: {this.projectData.lastupdate}</p>
                    </div>
                    <p id="greybox" >{this.projectData.description}</p>     

                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <i class="bi bi-clock-history font-small me-1 mb-2"></i>
                      <p className="mb-2 pb-0">Update History ~10 Days</p>
                    </div>
                    <div className="bar-graph-top">
                      {this.exampleData.map((data) => {
                        return <div className="bar-top" style={{height: 5 + 195*(data/10)}}><span>{data} updates</span></div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>    
        )
    }
}

export default ProjectFetch