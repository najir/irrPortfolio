import './styles/blog.css';
import React from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import InfoWidget from '../components/InfoWidget';
import BlogListWidget from "../components/blog/BlogList";

class BlogPage extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="blog-page">
                <div id="titleimage"><div className="transition-in">
                  <InfoWidget text="My Blog"/>
                  <div id="pagefill"></div>
                </div></div>
                <button><NavLink tag={Link} to="/createblog">New Post</NavLink></button>
                <BlogListWidget />
            </div>
        )
    }
}

export default BlogPage
