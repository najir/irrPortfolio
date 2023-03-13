import "./styles/git.css";
import React from 'react';
import { createRef } from 'react';

class GitFetch extends React.Component{
  constructor(props){
    super(props);
    this.exampleData = [
      0,1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,2,0,0,0,2,1,4,5,6,7,0,8,7,5
    ];
    this.projectData = [
      0,2,3,7,6
    ];
    this.languageData = [
      {name: "cpp",
       amount: 5},
       {name: "c#",
       amount: 5},
       {name: "python",
       amount: 5}
    ];
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
            <div ref={this.element} className={this.state.scroll ? "transition" : ""}>
              <div id="clearbox" className="mb-5 mt-5">
                <div className="d-flex justify-content-start align-items-center">
                  <i className="bi bi-graph-up font-large"></i>
                  <h5 id="textboxmain" className="ms-2">Performance and Activity</h5>
                </div>
                <p className="mt-5 mb-5">A small visualization of my recent personal acitivty</p>


                <div className="data-wrapper">
                  <div className="commit-list">
                    <p>Commits 30/Days</p>
                    <div className="commit-box">
                      {this.exampleData.map((key)=>{
                        return <div className="data-object" style={{opacity: (1.1-1/(key+1))}} ></div>
                      })}
                    </div>
                  </div>


                  <div>
                    <p className="mb-2 pb-0">Projects Launched or Completed /month</p>
                    <div className="bar-graph">
                      {this.projectData.map((data) => {
                        return <div className="bar" style={{width: 5 + 495*(data/10)}} />
                      })}
                      <p className="mb-0 pb-0">0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3</p>
                    </div>
                  </div>

                  <div className="pie-wrapper">
                    <div className="pie-chart"></div>
                    <div className="pie-data">
                      {this.languageData.map((data, key) =>{
                        var color = "rgb(var(--color" + (key+1);
                        color+= "))";
                        var value = {backgroundColor: color};
                        return <div className="d-flex"> <p>{data.name}: {data.amount}</p> <div id="colorbox" style={value}> </div></div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default GitFetch;