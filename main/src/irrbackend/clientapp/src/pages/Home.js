import './styles/home.css';
import GitFetch from "../components/GitFetch";
import BookFetch from "../components/BookFetch";
import ProjectFetch from "../components/ProjectFetch";
import React from 'react';

class HomePage extends React.Component {
    render(){
        return (
            <div className="Home">
                <h1>Welcome!</h1>
                <p>If you don't know, my name's Isaac Perks.</p>
                <p>This website serves as a way to visualize my portfolio, provide my resume, and post my personal blogs or research.</p>

                <p>Below is a quickview of my recent(30day) activity on github, recent projects & commits, along with my last reviewed book and personal blog post.</p>
                <p>Take a look at my <a href="github.com/najir">GitHub</a> to see my source code and recent projects</p>
                <p>Or go to my <a href="/resume">Resume</a> to view my json wrapped resume!</p> 
                <p>You can also head over to my <a href="/about">About Me</a> page for contact info and an overview of my life and experience!</p>

                <GitFetch />
                <div className="booksandprojects">
                    <BookFetch />
                    <ProjectFetch />
                </div>
            </div>
        );
    }    
}

export default HomePage;
