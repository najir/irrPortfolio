import "./styles/blog.css";
import React from 'react';

class BlogPage extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="blogpage">
                <h1>This is a Blog page, no current implementation as of right now :o</h1>
            </div>
        )
    }
}

export default BlogPage
