import "./styles/portfoliofetch.css";
import React from 'react';
import { createRef } from 'react';
import launcherzImage from "../img/launcherz.png";
import portfolioImage from "../img/portfolio.png";
import readifyImage from "../img/readify.png";
import kvsImage from "../img/kvs.png";
import resumeImage from "../img/resume.png";
import rustPSMImage from "../img/rustPSM.png";

class PortfolioFetch extends React.Component{
  constructor(props){
    super(props);
    this.projectData=[{
      title: "IrrPortfolio",
      image: `url(${portfolioImage})`,
      language: "C#",
      startdate: "02/20/2023",
      lastupdate: "03/20/2023",
      description: "My personal portfolio website source code, this website itself. Fully featured C# ASP.net backend with React frontend to allow dynamic webpages, and web api calls for needed information. All hosted on Microsoft Azure webservices.",
      link: "https://github.com/najir/irrPortfolio"
    },{
        title: "IrrResume",
        image: `url(${resumeImage})`,
        language: "Javascript",
        startdate: "03/02/2023",
        lastupdate: "3/20/2023",
        description: "A JSON Schema based resume that can be viewed as a front-end webpage via REACT and printed to a PDF for physical copy.",
        link: "https://github.com/najir/irrResume"
      },{
        title: "LauncherZ",
        image: `url(${launcherzImage})`,
        language: "Python",
        startdate: "02/09/2023",
        lastupdate: "02/23/2023",
        description: "Python based Pyside 6 QT project that implements a custom game launcher to an existing game. Allows users to add their own private servers. Provides server owners to pass along detailed information, images for advertisements and updates, an accessable rss feed for news, and outside links for install instructions.",
        link: "https://github.com/najir/launcherZ"
      },{
        title: "KyotoVS",
        image: `url(${kvsImage})`,
        language: "Json",
        startdate: "03/16/2023",
        lastupdate: "3/22/2023",
        description: "My own Visual Studio theme. Based on Ayu Light and Nushu for visual studio code, my theme intends to be light, colored and pastel. Inspired vaguely by traditional japanese writing with an off-white background and cherry blossoms with pastel pinks and oranges for accents.",
        link: "https://github.com/najir/irrResume"
      },{
        title: "Readify",
        image: `url(${readifyImage})`,
        language: "C++",
        startdate: "02/02/2023",
        lastupdate: "02/11/2023",
        description: "C++ based QT Framework project that allows users to create and update a list of personal books that they can go through and mark as finished, update with notes or otherwise keep track of for the future.",
        link: "https://github.com/najir/Readify"
      },{
        title: "DSA",
        language: "C++",
        startdate: "12/05/2022",
        lastupdate: "01/31/2023",
        description: "C++ based project that simply implements and tests all the major datastructures I learned through school for practice purposes",
        link: "https://github.com/najir/DSA"
      },{
        title: "RustPSM",
        image: `url(${rustPSMImage})`,
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
      var compPos = this.element.current.getBoundingClientRect().top - 50;    
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
                        <a href={data.link} target="_blank" rel="noopener noreferrer">
                        <div className="wrapper-image" style={{backgroundImage: data.image}} />
                        <div className="project-section">
                          <h2>{data.title}</h2>
                          <p className="portfolioproject-info">{data.language} | {data.startdate} | Updated on {data.lastupdate}</p>
                          <div className="project-image" style={{backgroundImage: data.image}} />
                          <p id="greybox">{data.description}</p>
                        </div></a>
                     </div>
                })}
              </div>
            </div>
        )
    }
}

export default PortfolioFetch
