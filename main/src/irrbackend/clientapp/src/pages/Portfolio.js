import "./styles/portfolio.css";
import React from 'react';
import ProjectFetch from "../components/ProjectFetch";
import InfoWidget from "../components/InfoWidget";
import PortfolioFetch from "../components/PortfolioFetch";

class PortfolioPage extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
              <div id="titleimage"><div className="transition-in">
                <InfoWidget text="Portfolio"/>
                <div className="portfolio-title">
                  <div id="pagefill"></div>
                  <div id="greybox" className="w-75">
                    <p>Welcome to my Projects page!</p>
                    <p>Currently a simple list of my recent projects, with some details and a link to their source code. Colors are a temp. representation of what a picture would look like, if I could pull from githubs social images</p>
                  </div>
                </div>
              </div></div>
              <ProjectFetch />
              <PortfolioFetch />
            </div>
        )
    }
}

export default PortfolioPage
