import React, { useState } from "react";
import PropTypes from 'prop-types';

import buttonStyle from '../styles/button.css'

import Banner from './Banner'

const Button=({label, btnID, setBanner})=>{

    const onClickEvent= (e) => {
       e.preventDefault();
        if (label === "Saiba mais") {
          const newSlogan = "Entre em contato conosco";
          const newPageTitle = "Contato"; 
          setBanner((prevBanner) => ({
            ...prevBanner,
            slogan: newSlogan,
            pageTitle: newPageTitle,
          }));
        } else if (label === "Comprar com 1-click") {
          console.log("Botão2");
        }
      };

    return(
        <>
        <div className= "button-container">
           <a href="#"><button className="reusableBtn" onClick={onClickEvent} >{label}</button></a> 
        </div>
        </>
    )
}

Button.propTypes={
    key: PropTypes.number,
    label: PropTypes.string,
    btnID: PropTypes.number,
    setBanner: PropTypes.func,
}



export default Button;
