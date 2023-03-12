import "./styles/about.css";
import React from 'react';

class AboutPage extends React.Component{
    constructor(props){
        super(props);
        this.readmore = true;
        this.aboutText = "Growing up around the age of 12 I spent a lot of time developing games. Starting from RPG maker with Decision Tree"
        this.aboutText += "eventing, all the way to UE4 Blueprints with my own artwork in Zbrush, Maya, and Blender. Once I got to college I "
        this.aboutText += "decided to move my focus towards softare development and computer programming. Since then I have spent the last"
        this.aboutText += "4-5 years studying C++, Python, Data Structures, Algorithms, and more. My most recent projects can be found at my"
        this.aboutText += "github, my recent focus has been to spend less time on fundamentals and more time broadening my toolset of "
        this.aboutText += "frameworks and popular tools. I hope to expand my personal knowledge base until I find a Niche I can put my lifes"
        this.aboutText += "work into."

        this.contactList = {
            email: "irrperks@gmail.com",
            phone: "(541)321-9148",
            linkedin: "______",
            github: "______"
        }
    }
    render(){
        return(
            <div className="about">
                <h1>About Me</h1>
                <p>Welcome to my portfolio website. This wepage is here to provide Contact Info ______ and a little about myself</p>

                <h3>Get ahold of me here:</h3>
                <div className="contact-info">
                    {this.contactList.map((value, content)=>{
                        <h6 className="contact-item">{value}: {content}</h6>
                    })};
                </div>

                <h4>Actually "About Me" this time:</h4>
                <p>{this.aboutText}</p>
                <p>
                    {this.readmore ? this.aboutText.slice(0, 25) : this.aboutText}
                    <span onClick={!this.readmore}>{this.readmore ? '...Read More' : '...Show Less'}</span>
                </p>
            </div>
        )
    }
}

export default AboutPage
