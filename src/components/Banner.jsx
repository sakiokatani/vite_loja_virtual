import React from "react";
import PropTypes from 'prop-types';
import '../styles/banner.css'

const Banner=()=>{
    const banner={
        slogan: "Escolha o melhor para você",
        pageTitle: "Nossos Produtos",
        decoration:"."
    }

    return(
        <div className="banner-container-flex">
            <div className="banner-text-wrapper">
                <h3>{banner.slogan.toUpperCase()}</h3>
            </div>
            <div className= "banner-title-wrapper">
                <h1 className="page-title">{banner.pageTitle}</h1>
                <h1 className="decoration">{banner.decoration}</h1>
            </div>
        </div>
    )
}

Banner.propTypes={
    slogan: PropTypes.string,
    pageTitle: PropTypes.string,
    decoration: PropTypes.string,
}

export default Banner;