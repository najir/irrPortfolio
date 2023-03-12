import resume from "../resume.json"
import React from "react"

class UserInfo extends React.Component{
    render(){
        return (
            <div>
                <div class="flex-user">
                <h1 id="maintitle">{resume.basics.name}</h1>
                <h3 id="maintitle" style={{marginLeft: "24px"}}>{resume.basics.label}</h3>
                </div>
                <hr style={{width:"100%"}}></hr>
            </div>
            
           
        )
    }
}

export class ProfileWrapper extends React.Component{
    render(){
        return (
            <div>
                <div class="flex-header" style={{margin:"15px 0 0 0"}}>
                    <h6 id="profile">{resume.basics.email}</h6>
                    <h6 id="profile">{resume.basics.phone}</h6>
                    <h6 id="profile">{resume.basics.url}</h6>
                </div>
                {resume.basics.profiles.map((col, row) =>
                    <this.ProfileHelper key={row} {...col} />)}
            </div>
            
        )
    }
    ProfileHelper(props){
        return (
            <div>
                <h6 id="profile">{props.network}: {props.url}</h6>
            </div>
        )
    }
}

export default UserInfo;