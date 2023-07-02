import React from "react";
import PropTypes from 'prop-types';
import bannerStyle from '../styles/banner.css'

const Banner=()=>{
    const banner={
        slogan: "Escolha o melhor para você",
        pageTitle: "Nossos Produtos",
        decoration:"."
    }

    return(
        <div class="banner-container-flex">
            <div class="banner-text-wrapper">
                <h3>{banner.slogan}</h3>
                <h1 class="Title'">{banner.pageTitle}</h1><h1 class="decoration">{banner.decoration}</h1>
            </div>
        </div>
    )
}

Banner.propTypes={
    slogan: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    decoration: PropTypes.string,
}

export default Banner;