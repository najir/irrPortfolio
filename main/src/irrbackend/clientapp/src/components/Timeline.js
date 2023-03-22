import "./styles/timeline.css";
import React from 'react';
import { createRef } from 'react';

class Timeline extends React.Component{
    constructor(props){
        super(props);
        this.element = createRef();
        this.onScroll = this.onScroll.bind(this);
        this.setScroll = this.setScroll.bind(this);
        this.state={
        scroll: false
        };
        this.timelineData = [
            {   
                start: "2014",
                end: "2015",
                title: "Game dev group",
                description: "Started a group making art and game-logic for other independent studios"
            },
            {title: "gap"},
            {title: "gap"},
            {
                start: "2015",
                end: "2017",
                title: "UE4 Game development",
                description: "Made several small projects with UE4 BP's, Maya, Zbrush, and Blender"
            },
            {title: "gap"},
            {title: "gap"},
            {title: "gap"},
            {
                start: "2017",
                end: "2019",
                title: "Lane Community College",
                description: ""
            },
            {title: "gap"},
            {title: "gap"},
            {title: "gap"},
            {title: "gap"},
            {
                start: "2019",
                end: "2021",
                title: "University Of Oregon",
                description: ""
            },
            {title: "gap"},
            {title: "gap"},
            {title: "gap"},
            {
                start: "Mar 2022",
                end: "May 2022",
                title: "rustPSM",
                description: "Details in portfolio page!"
            },
            {title: "gap"},
            {
                start: "Dec 2022",
                end: "Jan 2023",
                title: "Data Structures",
                description: "Details in portfolio page!"
            },
            {
                start: "Jan 2023",
                end: "Feb 2023",
                title: "Bookify",
                description: "Details in Portfolio page"
            },
            {
                start: "Feb 2023",
                end: "Feb 2023",
                title: "LauncherZ",
                description: "Details in portfolio page"
            },
            {
                start: "Feb 2023",
                end: "Mar 2023",
                title: "irrResume",
                description: "Details in portfolio page"
            },
            {
                start: "Feb 2023",
                end: "Mar 2023",
                title: "irrPortfolio",
                description: "Details in portfolio page"
            },
        ]
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
        return(
            <div  ref={this.element} className={this.state.scroll ? "transition" : ""}>
                <div id="clearbox">
                    <div className="timeline-bar"></div>
                    <div className="timeline-wrapper">
                        {this.timelineData.map((data)=>{
                            if(data.title==="gap"){
                                return <div className="timeline-gap"></div>
                            }else{
                                return(
                                    <div>
                                        <div className="circle-date">{data.start}</div>
                                        <div className="timeline-circle">
                                        <span>
                                            <p className="date-text">{data.start}-{data.end}</p>
                                            <p>{data.title}</p>
                                            <p>{data.description}</p>
                                        </span>
                                        </div>
                                    </div>
                                )
                            } 
                        })}
                    </div>
                </div>
            </div>

    )}
}

export default Timeline;
