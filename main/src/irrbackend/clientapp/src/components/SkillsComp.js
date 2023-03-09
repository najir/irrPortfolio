import "./styles/skills.css";
import React from 'react';

class SkillsComp extends React.Component{
    constructor(props){
        super(props);
        this.skillList = [ServerBackend, WebDevelopment, ComputerApplications]
    }
    render() {
        return(
            <div>
                this.skillList.map(name, index)
            </div>
        )
    }
}

export default SkillsComp;
