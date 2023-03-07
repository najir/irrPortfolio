import "./styles/about";
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
    }
    render(){
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {setIsReadMore(!isReadMore)};
        return(
            <div className="about">
                <h1>About Me</h1>
                <p>Welcome to my portfolio website. This wepage is here to provide Contact Info ______ and a little about myself</p>

                <h4>Actually "About Me" this time:</h4>
                <p>{this.aboutText}</p>
                <p>
                    {isReadMore ? this.aboutText.slice(0, 25) : this.aboutText}
                    <span onClick={toggleReadMore}>{isReadMore?'...Read More' : '...Show Less'}</span>
                </p>

                <ul>
                    <li>
                        <h6>Email: irrperks@gmail.com</h6>
                    </li>
                    <li>
                        <h6>Phone: (541)321-9148</h6>
                    </li>
                    <li>
                        <h6>Linked-In: _________</h6>
                    </li>
                    <li>
                        <h6>GitHub: __________</h6>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AboutPage
