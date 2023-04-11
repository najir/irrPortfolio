import "./styles/bloglist.css";
import React from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createRef } from 'react';

class BlogList extends React.Component{
  constructor(props){
    super(props);
    this.testBLogs = [
      {title: "Test Blog",
      summary: "This is a test of an input blog that is pulled from my backend server",
      author: "Isaac Perks",
      postdate: "5/12/2022",
      isprivate: "false"},
      {title: "Test2 Blog",
      summary: "This is a test of an input blog that is pulled from my backend server",
      author: "Isaac Perks",
      postdate: "5/12/2022",
      isprivate: "false"}
    ];
    this.element = createRef();
    this.onScroll = this.onScroll.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.state={
      scroll: false,
      listData: []
    };
  }    
  setScroll(state){
    this.setState({
        scroll: state
    });
  }
  onScroll(){
    if(this.element.current){
      var compPos = this.element.current.getBoundingClientRect().top - 50;    
      var scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > compPos){
          this.setScroll(true);
          window.removeEventListener('scroll', this.onScroll);
      }
    }
  
  }

  async componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
      await fetch(`${process.env.PUBLIC_URL}/api/blog/listblog`, {
        method: "GET",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }).then(response => response.json())
        .then(data => this.setState({listData : data}));
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <div ref={this.element} className={this.state.scroll ? "transition blog-list-container" : " opacity-0 blog-list-container"}>
              {this.state.listData.map((data) =>{
                return <div className="blog-list-card"><div className="blog-list">
                    <h2>{data.title}</h2>
                    <h6 className="user">Isaac Perks</h6>
                    <hr />
                    <p>{data.summary}</p>
                    <h6 className="date">Posted on {data.postDate.slice(0, 10)}</h6>
                    <button><NavLink tag={Link} to={`/blog/${data.id}`}>Read More</NavLink></button>
              </div></div>
              })}
            </div>
        )
    }
}

export default BlogList;