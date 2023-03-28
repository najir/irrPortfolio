import './styles/blog.css';
import React from 'react';
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
            <div>
                <div id="titleimage"><div className="transition-in">
                  <InfoWidget text="My Blog"/>
                  <div id="pagefill"></div>
                </div></div>
                <button>New Post</button>
                <BlogListWidget />
            </div>
        )
    }
}

export default BlogPage
