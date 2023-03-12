import "./styles/project.css";
import React from 'react';
import { createRef } from 'react';

class ProjectFetch extends React.Component{
  constructor(props){
    super(props);
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
      var compPos = this.element.current.getBoundingClientRect().top;    
      var scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > compPos){
          this.setScroll(true);
      } else {
          this.setScroll(false);
      }
    }
  
  }

  componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount(){
      window.addEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <div ref={this.element} className={this.state.scroll ? "transition" : ""}>
              <div id="clearbox" className="mt-5 mb-5">
                <div className="d-flex justify-content-start align-items-center">
                  <i className="bi bi-server font-large"></i>
                  <h5 id="textboxmain" className="ms-2">Featured Project</h5>
                </div>
                <p className="mt-5 mb-5">Here is my most recently featured project, source can be found at <a href="https://github.com/najir">GitHub</a></p>
              </div>
            </div>
            
        )
    }
}

export default ProjectFetch