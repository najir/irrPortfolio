import './styles/blog.css';
import React from 'react';
import InfoWidget from '../components/InfoWidget';

class BlogPage extends React.Component{
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
                  <InfoWidget text="My Blog"/>
                  <div id="pagefill"></div>
                  <div id="greybox">
                    <h1 className="text-start">This blog will provide a fully featured text editor and comment history, along with the bulk of my
                    User Auth features and admin page. This project is currently seperated due to complexity, can be seen here:</h1>
                  </div>
                </div></div>
            </div>
        )
    }
}

export default BlogPage
