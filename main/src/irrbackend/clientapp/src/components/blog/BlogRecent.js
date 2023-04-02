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
      scroll: false,
      recentData: {
        title: "loading",
        summary: "",
        postDate: "YYYY-MM-DD"
      }
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

  async componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
      await fetch(`${process.env.PUBLIC_URL}/api/blog/latestblog`, {
        method: "GET",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }).then(response => response.json())
        .then(data => this.setState({recentData : data}));
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <div ref={this.element} className={this.state.scroll ? "transition w-50 blog-recent-card" : "w-50 opacity-0 blog-recent-card"}>
              <div className="d-flex align-content-center">
                <i className="bi bi-text-paragraph font-large"></i>
                <h3 className="mt-2">Latest Blog</h3>
              </div>
              <div className="blog-recent">
                <h2>{this.state.recentData.title}</h2>
                <h6 className="user">Isaac Perks</h6>
                <hr />
                <p>{this.state.recentData.summary}</p>
                <h6 className="date">Posted on {this.state.recentData.postDate.slice(0, 10)}</h6>
                <button>Read More</button>
              </div>
            </div>
        )
    }
}

export default BlogRecent;
