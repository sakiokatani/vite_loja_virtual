import React from "react";
import PropTypes from 'prop-types';
import '../styles/header.css'

const Header =({name, menubtn1, menubtn2, menubtn3})=>{

    const header={
        name: "BikeHalt",
        menubtn1:"Produtos",
        menubtn2: "Contato",
        menubtn3:"FAQ",
    }
    return(
        <div className="header-container-flex">
            <div className="logo-wrapper">
                <a className="company-link">{header.name}</a>
            </div>
            <div className="header-menu-wrapper">
                <a className="header-menu">{header.menubtn1}</a>
                <a className="header-menu">{header.menubtn2}</a>
                <a className="header-menu">{header.menubtn3}</a>
            </div>
        </div>
    )
}

Header.propTypes={
    name:PropTypes.string.isRequired,
    menubtn1:PropTypes.string,
    menubtn2:PropTypes.string,
    menubtn3:PropTypes.string,
}

export default Header;