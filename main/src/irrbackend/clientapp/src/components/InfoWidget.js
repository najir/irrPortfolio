import "./styles/infowidget.css";
import React from 'react';
import { useLocation } from 'react-router-dom'

const LocationComponent = props => {
    const location = useLocation()
    return <InfoWidget location={location} {...props} /> // your component
  }

class InfoWidget extends React.Component{
    constructor(props){
        super(props);
        this.location = this.props.location;
    }
    render() {
        if(!this.props.text){
            return(
                <div className="info-text">
                    <h1 className="info-animation retyped">&#60;Desktop Applications/&#62;</h1>
                    <h1 className="info-animation retyped1">&#60;Server Integration/&#62;</h1>
                    <h1 className="info-animation retyped2">&#60;Web Development/&#62;<span className="blink">|</span></h1>
                </div>
            )
        }
        else{
            return(
                <div className="info-text">
                  <h1 className="info-animation retyped">&#60;{this.props.text}/&#62;<span className="blink">|</span></h1>
                </div>
            )
        }
    }
}

export default InfoWidget;
