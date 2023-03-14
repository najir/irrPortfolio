import "./styles/project.css";
import React from 'react';
import { createRef } from 'react';

class ProjectFetch extends React.Component{
  constructor(props){
    super(props);
    this.projectData={
      title: "test project",
      language: "c++",
      startdate: "05/11/1999",
      lastupdate: "3/12/2022",
      description: "This is a test description of my project and it's details. More information can be found at the source!!!",
      link: "https://www.github.com/najir"
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

                <div className="d-flex justify-content-start align-items-center">
                  <i className="bi bi-server font-large"></i>
                  <h5 id="textboxmain" className="ms-2">Featured Project</h5>
                </div>

                <div className="project-section">
                  <div className="d-flex justify-content-start align-items-center gap-5">
                    <h2>{this.projectData.title}</h2>
                    <p>{this.projectData.language} | {this.projectData.startdate} | Updated on {this.projectData.lastupdate}</p>
                  </div>
                  <div className="d-flex gap-5">
                    <p>{this.projectData.description}</p>
                      <div>
                      <p className="mb-2 pb-0">Update History ~10 Days</p>
                      <div className="bar-graph-top">
                        {this.exampleData.map((data) => {
                          return <div className="bar-top" style={{height: 5 + 195*(data/10)}}><span>{data} updates</span></div>
                        })}
                      </div>

                  </div>
                  </div>
                  <p>View the source code at it's <a href={this.projectData.link}>GitHub</a> link</p>
                </div>

              </div>
            </div>
            
        )
    }
}

export default ProjectFetch