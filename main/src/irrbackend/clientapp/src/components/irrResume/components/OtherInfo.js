import resume from "../resume.json"
import React from "react"

class OtherInfo extends React.Component{
    render(){
        return(
            <div>
                <InfoWrapper />
            </div>
        )
    }
}

class InfoWrapper extends React.Component{
    render(){
        return(
            <div>
                <h5 id="subtitle">Other Interests</h5>
                {resume.interests.map((col, row) =>
                    <this.InfoHelper key={row} {...col} />)}
            </div>
        )
    }

    InfoHelper(props){
        return(
            <div id="interestname">
                <h6>{props.name}</h6>
                <div class="flex-other">
                    {props.keywords.map((col, row) =>
                        <h6 id="interest" key={row}>{col}</h6>)}
                </div>
            </div>
        )
    }
}

export default OtherInfo