import "./styles/about.css";
import React from 'react';

class AboutPage extends React.Component{
    constructor(props){
        super(props);
        this.aboutText = "Growing up around the age of 12 I spent a lot of time developing games. Starting from RPG maker with Decision Tree"
        this.aboutText += "eventing, all the way to UE4 Blueprints with my own artwork in Zbrush, Maya, and Blender. Once I got to college I "
        this.aboutText += "decided to move my focus towards softare development and computer programming. Since then I have spent the last"
        this.aboutText += "4-5 years studying C++, Python, Data Structures, Algorithms, and more. My most recent projects can be found at my"
        this.aboutText += "github, my recent focus has been to spend less time on fundamentals and more time broadening my toolset of "
        this.aboutText += "frameworks and popular tools. I hope to expand my personal knowledge base until I find a Niche I can put my lifes"
        this.aboutText += "work into."

        this.contactList = [
            ["email", "irrperks@gmail.com"],
            ["phone", "(541)321-9148"],
            ["linkedin", "______"],
            ["github", "______"]
        ];
        this.setRead = this.setRead.bind(this);
        this.state={
            readmore: true
        };
    }
    setRead(){
        let isRead = !this.state.readmore;
        this.setState({
            readmore: isRead
        });
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className="about">
                <div id="pagefill"></div>
                <h1>About Me</h1>
                <div id="greybox" className="w-75">
                  <p>Welcome to my portfolio website. This wepage is here to provide Contact Info ______ and a little about myself</p>
                  <div className="contact-info">
                    {this.contactList.map((value)=>{
                        return <h6 className="contact-item">{value[0]}: {value[1]}</h6>
                    })}
                  </div>
                </div>
                <div id="clearbox">
                  <h4>Actually "About Me" this time:</h4>
                  <p>
                    {this.state.readmore ? this.aboutText.slice(0, 50) : this.aboutText}
                    <button className="read-more" onClick={this.setRead}>{this.state.readmore ? '...Read More' : '...Show Less'}</button>
                  </p>
                </div>
            </div>
        )
    }
}

export default AboutPage
