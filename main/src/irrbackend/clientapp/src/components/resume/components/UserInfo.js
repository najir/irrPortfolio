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
                <div class="flex-header" style={{}}>
                    <div className="flex-icon">
                      <i className="bi bi-envelope icon-size"></i>
                      <h6 id="profile">{resume.basics.email}</h6>
                    </div>

                    <div className="flex-icon">
                      <i className="bi bi-telephone icon-size"></i>
                      <h6 id="profile">{resume.basics.phone}</h6>
                    </div>
                    <div className="flex-icon">
                      <i className="bi bi-github icon-size"></i>
                      <h6 id="profile">{resume.basics.url}</h6>
                    </div>
                    <div className="flex-icon">
                      <i class="bi bi-house-door-fill icon-size"></i>
                      <h6 id="profile">{resume.basics.location.address}, {resume.basics.location.city} OR</h6>
                    </div>
                </div>
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