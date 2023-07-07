import React from "react";
import PropTypes from 'prop-types';
import '../styles/footer.css'

const Footer=(props)=>{
    const menuItems=[

        {
        id: 1,
        label:"Sobre a empresa",
        path:"#",
        },
        {
        id: 2,
        label:"Serviços",
        path:"#",
        },
        {
        id: 3,
        label:"Fale Conosco",
        path:"#",
        },
        {
        id: 4,
        label:"Trabalhe Conosco",
        path:"#",
        }
    ]
    const renderMenuItems = (menuItems) =>{
    return(
            <li className="footerLinks">
                <a  href={menuItems.path}>
                    {menuItems.label}
                </a>
            </li>
    );
    }

    return(
    <nav className="menu-principal-footer-wrapper">
        <div className="first-column-wrapper">
        {menuItems.map(renderMenuItems)}
        </div>
    </nav>
    )
    }

    Footer.propTypes ={
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    }

export default Footer;