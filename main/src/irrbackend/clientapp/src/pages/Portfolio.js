import "./styles/portfolio.css";
import React from 'react';
import ProjectFetch from "../components/ProjectFetch"

class PortfolioPage extends React.Component{
    render() {
        return (
            <div className="portfoliopage">
                <h1>My Portfolio</h1>
                <p>Welcome to my Portfolio page. Here you can find all of my projects, with some information, links, and downloads!</p>
                <p>More information and source code can be found at my <a href="github.com/najir">GitHub</a> account</p>
                <ProjectFetch />
            </div>
        )
    }
}

export default PortfolioPage
