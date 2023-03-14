import "./styles/book.css";
import React from 'react';
import { createRef } from 'react';

class BookFetch extends React.Component{
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
              <div className="d-flex p-2 justify-content-start align-items-end">
                <i className="bi bi-book-half font-large"></i>
                <h5 id="textboxmain" className="float-start m-2">Recent Book</h5>
              </div>
              <p>My last book review can be seen below</p>
            </div>
        )
    }
}

export default BookFetch