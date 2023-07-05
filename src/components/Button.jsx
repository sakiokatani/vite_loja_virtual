import React from "react";
import PropTypes from 'prop-types';

import buttonStyle from '../styles/button.css'

const Button=(prop)=>{
    return(
        <>
        <div className= "button-container">
           <a href="#"><button className="reusableBtn" onclick="#" >{prop.prop1}</button></a> 
        </div>
        </>
    )
}



export default Button;
