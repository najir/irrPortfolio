import "./styles/skills.css";
import React from 'react';
import { createRef } from 'react';

class SkillsComp extends React.Component{
    constructor(props){
        super(props);
        this.ServerBackend=[
            "ASP .NET 7.0",
            "C#",
            "JavaScript",
            "MVC",
            "Entity Framework",
            "NODE.js",
            "Flask",
            "SQL",
            "SQLite3",
            "PostGre SQL",
            "AWS RDS/EC2",
            "Express",
            "Identity 4",
            "REST",
            "GraphQL",
            "Azure"
          ];
          this.WebDevelopment=[
            "HTML",
            "CSS",
            "JavaScript",
            "REACT",
            "VUE",
            "NODE",
            "Bootstrap",
            "React-router",
            "TipTap"
          ];
          this.DesktopApplications=[
            "QT Framework",
            "C++",
            "Python",
            "QT Designer",
            "TKBuilder",
            "SQLite3",
            "Pyside"
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

    render(){
        return(
            <div ref={this.element} className={this.state.scroll ? "transition" : ""}>
              <div className="skills-wrapper" id="greybox">
                    <div className="skill-title">
                      <h3>Web Development</h3>
                      <div className="skill-item-wrapper">
                        {this.WebDevelopment.map((item) =>{
                        return(<div className="skill-item"><p>{item}</p></div>)
                        })}
                      </div>
                    </div>
                    <div className="skill-title">
                      <h3>Server Backend</h3>
                      <div className="skill-item-wrapper">
                        {this.ServerBackend.map((item) =>{
                        return(<div className="skill-item"><p>{item}</p></div>)
                        })}
                      </div>
                    </div>
                    <div className="skill-title">
                      <h3>Desktop Applications</h3>
                      <div className="skill-item-wrapper">
                        {this.DesktopApplications.map((item) =>{
                        return(<div className="skill-item"><p>{item}</p></div>)
                        })}
                      </div>
                    </div>
              </div>
            </div>
        )
    }
}

export default SkillsComp;
