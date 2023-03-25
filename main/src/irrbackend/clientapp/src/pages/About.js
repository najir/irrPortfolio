import "./styles/about.css";
import Timeline from "../components/Timeline";
import InfoWidget from "../components/InfoWidget";
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
            ["Email", "irrperks@gmail.com", "bi bi-telephone font-small", false],
            ["Phone", "(541)321-9148", "bi bi-envelope font-small", false],
            ["Linkedin", "https://www.linkedin.com/in/isaac-perks/", "bi bi-linkedin font-small", true],
            ["Github", "https://github.com/najir", "bi bi-github font-small", true]
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
          <div>
              <div id="titleimage"><div className="transition-in">
              <InfoWidget text="About Me"/>
                <div id="pagefill"></div>
                <div id="greybox" className="w-75">
                  <p>Here you can find contact info below, a few details about me personally, and an overview time-line of my experience</p>
                  <div className="contact-info">
                    {this.contactList.map((value)=>{
                      if(value[3]){return <div className="d-flex align-items-center"><i className={value[2]}></i><h6 className="contact-item">{value[0]}: <a href={value[1]} target="_blank" rel="noopener noreferrer">{value[1]}</a> </h6></div>}
                      if(value[2]){return <div className="d-flex align-items-center"><i className={value[2]}></i><h6 className="contact-item">{value[0]}: {value[1]} </h6></div> }
                      else{ return <h6 className="contact-item">{value[0]}: {value[1]}</h6> }
                    })}
                  </div>
                </div>
              </div></div>
              
            <div id="clearbox">
                <h4>Actually "About Me" this time:</h4>
                <p>
                {this.state.readmore ? this.aboutText.slice(0, 50) : this.aboutText}
                <div className="read-more" onClick={this.setRead}>{this.state.readmore ? '...Read More' : '...Show Less'}</div>
                </p>
            </div>
            <Timeline />
          </div>
        )
    }
}

export default AboutPage
