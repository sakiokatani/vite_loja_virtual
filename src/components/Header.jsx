import React from "react";
import PropTypes from 'prop-types';
import headerStyle from '../styles/header.css'

const Header =({name, menubtn1, menubtn2, menubtn3})=>{

    const header={
        name: "BikeHalt",
        menubtn1:"Produtos",
        menubtn2: "Contato",
        menubtn3:"FAQ",
    }
    return(
        <div class="header-container-flex">
            <div class="logo-wrapper">
                <a class="company-link">{header.name}</a>
            </div>
            <div class="header-menu-wrapper">
                <a class="header-menu">{header.menubtn1}</a>
                <a class="header-menu">{header.menubtn2}</a>
                <a class="header-menu">{header.menubtn3}</a>
            </div>
        </div>
    )
}

Header.propTypes={
    name:PropTypes.string.isRequired,
    menubtn1:PropTypes.string.isRequired,
    menubtn2:PropTypes.string.isRequired,
    menubtn3:PropTypes.string.isRequired,
}

export default Header;