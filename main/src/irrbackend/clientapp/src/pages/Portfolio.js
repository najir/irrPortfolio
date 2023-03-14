import "./styles/portfolio.css";
import React from 'react';
import ProjectFetch from "../components/ProjectFetch"
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
            <div className="portfoliopage">
                <div className="portfolio-title">
                  <div id="pagefill"></div>
                  <h1>Project Portfolio</h1>
                  <div id="greybox" className="w-75">
                    <p>Below is a list of my recent and past projects. You can find specific information and links to repo's for each individual project</p>
                    <p>A more generalized overview of my recent projects can be seen on the homepage</p>
                  </div>
              </div>
                <ProjectFetch />
                <PortfolioFetch />
            </div>
        )
    }
}

export default PortfolioPage
