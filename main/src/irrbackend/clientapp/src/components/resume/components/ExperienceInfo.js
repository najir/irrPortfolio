import React from "react";
import resume from "../resume.json"

class ExperienceInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }
    render() {
        return (
            <div>
                <h2 id="title">Projects<span className="icon-float"><i class="bi bi-kanban-fill icon-float"></i></span></h2>
                {resume.projects.map((col, row) => 
                <ProjectWrapper key={row} {...col}/>)}
                <h6>See more of my projects and available source code at my Github: https://github.com/najir </h6>
                <EducationWrapper />

                <h2 id="title">Work<span className="icon-float"><i class="bi bi-building-fill icon-float"></i></span></h2>

                <h4 id="experiencetitle">{resume.work[0].name}</h4>
                <h5>{resume.work[0].position}</h5>
                <h6 className="date-color">{resume.work[0].startDate} - {resume.work[0].endDate}</h6>
                <p style={{fontSize: "12px", color:"black"}}>{resume.work[0].summary}</p>

                <h2 id="title">Volunteer and Other Experience<span className="icon-float"><i class="bi bi-briefcase-fill icon-float"></i></span></h2>
                {resume.volunteer.map((col, row) => 
                <VolunteerWrapper key={row} {...col}/>)}
                <OtherExpWrapper />
            </div>
        )
    }
}

class EducationWrapper extends React.Component{
    render() {
        return (
            <div>
                <h2 id="title">Education<span className="icon-float"><i class="bi bi-mortarboard-fill icon-float"></i></span></h2>
                <h3>{resume.education[0].institution}</h3>
                <h6 id="educationname" className="date-color">{resume.education[0].startDate} - {resume.education[0].endDate}, {resume.education[0].studyType} in {resume.education[0].area}</h6>
                <this.educationHelper />
                <h3>{resume.education[1].institution}</h3>
                <h6 id="educationname" className="date-color">{resume.education[1].startDate} - {resume.education[1].endDate}</h6>
            </div>
        )
    }
    educationHelper(){
        return(
            <div id="projectwrapper">
                <h6>Relevant Courses Include;</h6>
                <div class="flex-other">
                    {resume.education[0].courses.map((col, row) =>
                        <h6 id="courses" key={row}>{col}</h6>)}
                </div>
            </div>
        )
    }
}

class VolunteerWrapper extends React.Component{
    render(){
        return(
            <div>
                <h5>{this.props.organization}</h5>
                <h6 className="date-color">{this.props.date}</h6>
            </div>
        )
    }
}

class OtherExpWrapper extends React.Component{
    render(){
        return resume.other.map((col, row) =>
        <this.otherExperienceHelper key={row} {...col} />)
    }
    otherExperienceHelper(props){
        return(
            <div>
                <h5 id="experiencetitle">{props.name}</h5>
                <p style={{fontSize: "12px"}}>{props.description}</p>
                <h6 className="date-color">{props.date}</h6>
            </div>
        )
    }
}

class ProjectWrapper extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h6 className="date-color">{this.props.date}</h6>
                <p style={{fontSize: "12px"}}>{this.props.description}</p>
                <div id="projectwrapper" class="flex-list">
                    {this.props.keywords.map((col, row) =>
                    <h6 id="keyword-project" key={row}>{col}</h6>)}
                </div>
            </div>
        )
    }
}

class WorkWrapper extends React.Component{

}

export default ExperienceInfo;