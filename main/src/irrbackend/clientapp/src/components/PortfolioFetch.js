import "./styles/portfoliofetch.css";
import React from 'react';
import { createRef } from 'react';

class PortfolioFetch extends React.Component{
  constructor(props){
    super(props);
    this.projectData=[{
      title: "IrrPortfolio",
      image: "linear-gradient(90deg, rgba(113,131,204,1), rgba(60,131,100,1))",
      language: "C#",
      startdate: "02/20/2023",
      lastupdate: "03/20/2023",
      description: "My personal portfolio website source code",
      link: "https://github.com/najir/irrPortfolio"
    },{
        title: "IrrResume",
        image: "linear-gradient(90deg, rgba(50,131,204,1), rgba(60,131,25,1))",
        language: "Javascript",
        startdate: "03/02/2023",
        lastupdate: "3/20/2023",
        description: "A JSON Schema based resume that can be viewed as a front-end webpage via REACT and printed to a PDF for physical copy.",
        link: "https://github.com/najir/irrResume"
      },{
        title: "LauncherZ",
        image: "linear-gradient(90deg, rgba(113,50,204,1), rgba(60,200,100,1))",
        language: "Python",
        startdate: "02/09/2023",
        lastupdate: "02/23/2023",
        description: "A front end GUI replacement launcher to pair with an existing codebase for Monster Hunter Frontiers launcher",
        link: "https://github.com/najir/launcherZ"
      },{
        title: "Readify",
        image: "linear-gradient(90deg, rgba(113,131,204,1), rgba(60,131,100,1))",
        language: "C++",
        startdate: "02/02/2023",
        lastupdate: "02/11/2023",
        description: "A personal book journal that lets you save info on books and mark when finished.",
        link: "https://github.com/najir/Readify"
      },{
        title: "DSA",
        language: "C++",
        startdate: "12/05/2022",
        lastupdate: "01/31/2023",
        description: "Basic project to practice implementing Data Structures",
        link: "https://github.com/najir/DSA"
      },{
        title: "RustPSM",
        image: "linear-gradient(90deg, rgba(113,131,100,1), rgba(30,131,100,1))",
        language: "Javascript",
        startdate: "04/09/2022",
        lastupdate: "07/21/2022",
        description: "Rust Player Stat Module is a basic Javascript based application that will allow you to pull and modify player information via steam name or ID. Data is then used to make comparative assessments and is displayed to the user",
        link: "https://github.com/najir/rustPSM"
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
                    return <div className="portfolio-object" style={{backgroundImage: data.image}}>
                        <div className="project-section">
                          <h2>{data.title}</h2>
                          <p>{data.language} | {data.startdate} | Updated on {data.lastupdate}</p>
                          <div className="project-image" style={{backgroundImage: data.image}} />
                          <p id="greybox">{data.description}</p>
                          <p className="mt-5"><a href={data.link}>GitHub</a></p>
                        </div>
                     </div>
                })}
              </div>
            </div>
        )
    }
}

export default PortfolioFetch