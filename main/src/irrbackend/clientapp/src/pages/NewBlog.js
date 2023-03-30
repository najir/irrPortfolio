import './styles/newblog.css';
import React from 'react';
import InfoWidget from '../components/InfoWidget';
import BlogEditorWidget from "../components/blog/BlogEditor";

class NewBlog extends React.Component{
    constructor(props){
        super(props)
        this.state ={
        };
    }
    inputChange(event){
        this.setState({
            [event.target.name]: this.target.value
        });
    }

    submitBlog() {
        var title = this.state.title;
        var description = this.state.description;
        var error = "";
        var returnValue = true;
        if(title < 4 || title > 12){
            error += "Title must be within 4 and 12 characters long \r\n";
        } if(description > 48){
            error += "Description must be less than 48 characters long \r\n";
        }
        if(error){
            returnValue = false;
            alert(error);
        }
        return returnValue;
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
                  <div className="d-flex gap-3 m-3">
                    <h5>Title: </h5>
                    <input type="text" name="title" className="title-input" value={this.state.title} onChange={this.inputChange}></input>
                    <h5>Description: </h5>
                    <input type="text" name="description" className="description-input" value={this.state.description} onChange={this.inputChange}></input>
                  </div>
                  <BlogEditorWidget />
                  <button onClick={this.submitBlog} className="post-button">Post Blog</button>
                </div>
            </div>
        )
    }
}

export default NewBlog
