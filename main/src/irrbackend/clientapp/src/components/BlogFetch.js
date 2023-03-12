import "./styles/blogfetch.css";
import React from 'react';
import { createRef } from 'react';

class BlogFetch extends React.Component{
  constructor(props){
    super(props);
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
      var compPos = this.element.current.getBoundingClientRect().top;    
      var scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > compPos){
          this.setScroll(true);
      } else {
          this.setScroll(false);
      }
    }
  
  }

  componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount(){
      window.addEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <div ref={this.element} className={this.state.scroll ? "transition w-50" : "w-50"} id="greybox">
              <div className="d-flex p-2 justify-content-end align-items-end">
                <h5 id="textboxmain" className="float-end m-2">Recent Blog</h5>
                <i className="bi bi-blockquote-left font-large"></i>
              </div>
              <p>My last blog post can be seen below</p>
            </div>
        )
    }
}

export default BlogFetch;