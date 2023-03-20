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
                    <h1 className="text-start">Blog is currently seperated to a new project due to complexity</h1>
                  </div>
                </div></div>
            </div>
        )
    }
}

export default BlogPage
