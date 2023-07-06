import React from "react";
import PropTypes from 'prop-types';

import buttonStyle from '../styles/button.css'
import ProductDetailPage from './ProductDetailPage'

const Button=(prop)=>{

    const onClickEvent= ()=>{
        if(prop.btnID === '1'){
            console.log('button 1')
            //trocar texto header e pág de produto//
        }
        if(prop.btnID === '2'){
            console.log('button 2')
        }
    }

    return(
        <>
        <div className= "button-container">
           <button className="reusableBtn" onClick={onClickEvent}>{prop.label}</button>
        </div>
        </>
    )
}

Button.propTypes={
    prop1: PropTypes.string,
}

export default Button;
