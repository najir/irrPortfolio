import './styles/newblog.css';
import React from 'react';
import InfoWidget from '../components/InfoWidget';
import BlogEditorWidget from "../components/blog/BlogEditor";

class NewBlog extends React.Component{
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
                  <InfoWidget text="New Post"/>
                </div></div>
                <div className="create-blog">
                  <BlogEditorWidget />
                </div>
            </div>
        )
    }
}

export default NewBlog
