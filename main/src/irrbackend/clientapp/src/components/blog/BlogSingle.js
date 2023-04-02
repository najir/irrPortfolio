import "./styles/bloglist.css";
import { useEditor, EditorContent } from '@tiptap/react';
import React from 'react';
import { createRef } from 'react';

class BlogSingle extends React.Component{
  constructor(props){
    super(props);
    this.editorcontent = Object.assign({}, {"type":"doc"}, props.blogcontent);
    this.editor = useEditor(editorcontent);
    this.element = createRef();
    this.onScroll = this.onScroll.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.state={
      scroll: false
    };
  }    
  setScroll(state){
    this.setState({
        scroll: state,
        blogData: {
          "title" : "loading",
          "summary" : "",
          "postDate" : "",
          "blogcontent" : "",
        }
    });
  }
  onScroll(){
    if(this.element.current){
      var compPos = this.element.current.getBoundingClientRect().top - 100;    
      var scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > compPos){
          this.setScroll(true);
          window.removeEventListener('scroll', this.onScroll);
      }
    }
  }

 componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
      
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <div ref={this.element} className={this.state.scroll ? "transition w-50" : "w-50 opacity-0"} id="greybox">
              <div className="blog-single">
                <h2>{this.testBLog.title}</h2>
                <div>
                <h5>Isaac Perks</h5>
                <h6>{this.testBLog.postdate}</h6>
                </div>
                <p>{this.testBLog.summary}</p>
              </div>
            </div>
        )
    }
}

export default BlogSingle;
