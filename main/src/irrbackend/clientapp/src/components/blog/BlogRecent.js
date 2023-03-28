import "./styles/blogrecent.css";
import React from 'react';
import { createRef } from 'react';

class BlogRecent extends React.Component{
  constructor(props){
    super(props);
    this.testBLog = {
      title: "A Whole Test Blog! A test",
      summary: "This is a test of an input blog that is pulled from my backend server. This description is meant to be a test to see how the data shows up on the front end",
      author: "Isaac Perks",
      postdate: "5/12/2022",
      isprivate: "false"
    };
    this.element = createRef();
    this.onScroll = this.onScroll.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.state={
      scroll: false
    };
  }    
  setScroll(state){
    this.setState({
        scroll: state
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
            <div ref={this.element} className={this.state.scroll ? "transition w-50 blog-recent-card" : "w-50 opacity-0 blog-recent-card"}>
              <i className="bi bi-text-paragraph font-large"></i>
              <div className="blog-recent">
                <h2>{this.testBLog.title}</h2>
                <h6 className="user">{this.testBLog.author}</h6>
                <hr />
                <p>{this.testBLog.summary}</p>
                <h6 className="date">Posted on {this.testBLog.postdate}</h6>
                <button>Read More</button>
              </div>
            </div>
        )
    }
}

export default BlogRecent;
