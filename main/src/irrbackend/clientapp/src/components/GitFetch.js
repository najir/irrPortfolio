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
       percent: "50%"},
       {name: "c#",
       percent: "60%"},
       {name: "python",
       percent: "80%"},
       {name: "javascript",
       percent: "100%"}
    ];
    this.pieValue = "";
    this.element = createRef();
    this.onScroll = this.onScroll.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.setPie = this.setPie.bind(this);

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
  setPie(){
    this.pieValue = "conic-gradient(rgb(var(--color0)) 0 ";
    this.pieValue += this.languageData[0].percent +",";
    this.pieValue += " rgb(var(--color1)) " + this.languageData[0].percent  + " " + this.languageData[1].percent + ","; 
    this.pieValue += " rgb(var(--color2)) " + this.languageData[1].percent  + " " + this.languageData[2].percent + ",";
    this.pieValue += " rgb(var(--color3)) " + this.languageData[2].percent  + " " + this.languageData[3].percent + ")";
  }

  componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <div ref={this.element} className={this.state.scroll ? "transition" : "opacity-0"}>
              <div id="clearbox" className="mb-5 mt-5">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="bi bi-graph-up font-large"></i>
                  <h2 className="mt-4 ms-3">Performance</h2>
                </div>
                <div id="greybox" className="w-50 mt-5 mb-5">
                  <p>An overview of my recent progress, performance, and activity.</p>
                  <p>Updated automatically from my GitHub account</p>
                </div>
                <div className="data-wrapper">
                  <div className="commit-list">
                    <p>Commits ~30 Days</p>
                    <div className="commit-box">
                      {this.exampleData.map((key)=>{
                        var color = "rgba(var(--theme1-other),";
                        color +=  (1.1-1/(key+1)) + ")";
                        return <div className="data-object" style={{backgroundColor: color}} ><span>{key} contributions</span></div>
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 pb-0">Projects Completed ~4 Months</p>
                    <div className="bar-graph">
                      {this.projectData.map((data) => {
                        return <div className="bar" style={{width: 5 + 495*(data/10)}}><span>{data} projects completed</span></div>
                      })}
                    </div>
                  </div>

                  <div className="pie-wrapper">
                    {this.setPie()}
                    <div className="pie-chart" style={{backgroundImage: this.pieValue}}></div>
                    <div className="pie-data">
                      {this.languageData.map((data, key) =>{
                        var color = "rgb(var(--color" + key;
                        color+= "))";
                        var value = {backgroundColor: color};
                        return <div className="d-flex"> <p>{data.name}</p> <div id="colorbox" style={value}> </div></div>
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default GitFetch;