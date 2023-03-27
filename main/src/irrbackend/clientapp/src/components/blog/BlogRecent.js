import "./styles/bloglist.css";
import React from 'react';
import { createRef } from 'react';

class BlogRecent extends React.Component{
  constructor(props){
    super(props);
    this.testBLog = {
      title: "Test Blog",
      summary: "This is a test of an input blog that is pulled from my backend server",
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
            <div ref={this.element} className={this.state.scroll ? "transition w-50" : "w-50 opacity-0"} id="greybox">
              <div className="d-flex p-2 justify-content-end align-items-end">
                <i className="bi bi-book-half font-large"></i>
                <h5 id="textboxmain" className="float-start m-2">Recent Book</h5>
              </div>
              <div className="blog-recent">
                <h2>{this.testBLog.title}</h2>
                <div>
                  <h5>{this.testBLog.author}</h5>
                  <h6>{this.testBLog.postdate}</h6>
                </div>
                <p>{this.testBLog.summary}</p>
                <button>Read More</button>
              </div>
            </div>
        )
    }
}

export default BlogRecent;
