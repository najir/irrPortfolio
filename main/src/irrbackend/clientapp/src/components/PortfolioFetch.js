import "./styles/portfoliofetch.css";
import React from 'react';
import { createRef } from 'react';

class PortfolioFetch extends React.Component{
  constructor(props){
    super(props);
    this.projectData=[{
      title: "test project",
      language: "c++",
      startdate: "05/11/1999",
      lastupdate: "3/12/2022",
      description: "This is a test description of my project and it's details. More information can be found at the source!!!",
      link: "https://www.github.com/najir"
    },{
        title: "test project1",
        language: "python",
        startdate: "05/11/1999",
        lastupdate: "3/12/2022",
        description: "This is a test description of my project and it's details. More information can be found at the source!!!",
        link: "https://www.github.com/najir"
      },{
        title: "test project2",
        language: "javascript",
        startdate: "05/11/1999",
        lastupdate: "3/12/2022",
        description: "This is a test description of my project and it's details. More information can be found at the source!!!",
        link: "https://www.github.com/najir"
      },{
        title: "test3",
        language: "c#",
        startdate: "05/11/1999",
        lastupdate: "3/12/2022",
        description: "This is a test description of my project and it's details. More information can be found at the source!!!",
        link: "https://www.github.com/najir"
      }]
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
              <div className="portfolio-wrapper">
                {this.projectData.map((data) =>{
                    return <div className="portfolio-object">
                        <div className="project-section">
                        <div className="d-flex justify-content-start align-items-center gap-1">
                            <h2>{data.title}</h2>
                            <p>{data.language} | {data.startdate} | Updated on {data.lastupdate}</p>
                        </div>
                        <p>{data.description}</p>
                        <p>View the source code at it's <a href={data.link}>GitHub</a> link</p>
                        </div>
                     </div>
                })}
              </div>
            </div>
        )
    }
}

export default PortfolioFetch