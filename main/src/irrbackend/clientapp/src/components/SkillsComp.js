import "./styles/skills.css";
import React from 'react';
import { createRef } from 'react';

class SkillsComp extends React.Component{
    constructor(props){
        super(props);
        this.skillList = [ServerBackend, WebDevelopment, ComputerApplications]
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
        return(
            <div ref={this.element} className={this.state.scroll ? "transition" : ""}>
                this.skillList.map(name, index)
            </div>
        )
    }
}

export default SkillsComp;
