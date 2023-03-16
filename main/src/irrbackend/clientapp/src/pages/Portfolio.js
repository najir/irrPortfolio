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
                    <p>All information below is pulled from Githubs API to provide live details and information</p>
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
