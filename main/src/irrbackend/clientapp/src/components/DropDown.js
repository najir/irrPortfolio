import "./styles/dropdown.css"
import React from 'react';
import { useState } from 'react';

const DropDown = (props) => {
    const [hidden, setHidden] = useState(true);
    const onClickHidden = () => {
        if(!hidden){

        }
        setHidden(!hidden);}

    return(
    <div onClick={onClickHidden} className={props.className + " dropdown"}>
        <i className="bi bi-three-dots font-small"></i>
        { hidden ? null : 
        <div className="item-wrapper dropdown-anim">
            {props.children}
        </div>}
    </div>);
}

export default DropDown
