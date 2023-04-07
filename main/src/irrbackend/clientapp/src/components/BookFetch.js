import "./styles/book.css";
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
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
              <div className="d-flex align-content-center">
                <i className="bi bi-book-half font-large"></i>
                <h3 className="float-start mt-2">Recent Book</h3>
              </div>
              <p>My last book review can be seen below</p>
              <div className="blog-recent">
                <h2>MVC Unleashed by Stephen Walther</h2>
                <h6 className="user">Isaac Perks</h6>
                <hr />
                <img className="book-image" src="https://www.informit.com/ShowCover.aspx?isbn=0672329980" alt="Book" />
                <p>A 2023 review of Stephen Walthers MVC Unleashed. Bought used, this is an unbelievably worthwhile resource. You should be able to reliably find used copies at local stores and online too.</p>
                <h6 className="date">Reviewed April 5th 2023</h6>
                <button><NavLink tag={Link} to={`/blog/4`}>Read More</NavLink></button>
              </div>
            </div>
        )
    }
}

export default BookFetch