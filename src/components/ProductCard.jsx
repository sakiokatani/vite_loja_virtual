import React from "react";
import PropTypes from 'prop-types';

//import data
import ProductData from '../data/product_data.json'

//import Components
import Button from './Button'

//import styles
import '../styles/product_card.css'
import ProductDetailPage from "./ProductDetailPage";

const ProductCard =({id, name, description, price, image})=>{
    
    const infoBtn={
        label: "Saiba mais",
        btnID:  "1",
        }
      const buyBtn={
        label: "Comprar com 1-click",
        btnID: "2",
      }

  const renderCharacteristics = () => {
    const characteristics = [];
    const foundProduct = ProductData.find((productID) => productID.id === id);
    
    if(foundProduct){

        if (foundProduct.characteristic1) {
        characteristics.push(<li>{foundProduct.characteristic1}</li>);
        }
        if (foundProduct.characteristic2) {
        characteristics.push(<li>{foundProduct.characteristic2}</li>);
        }
        if (foundProduct.characteristic3) {
        characteristics.push(<li>{foundProduct.characteristic3}</li>);
        }
        if (foundProduct.characteristic4) {
        characteristics.push(<li>{foundProduct.characteristic4}</li>);
        }
    

        return (
        <div className={foundProduct.id}>
            <ul>{characteristics}</ul>
        </div>
        );
    };
    }

    
    const Characteristics = renderCharacteristics(id);
    
    

    return(
        <div className="cardContent-wrapper">
            <div className="productPhoto-container">
            <a href="#"><img className="productPhoto" src={image} alt={name}/></a>
            </div>
            <div className="information-container">
                <div className="description-wrapper">
                    <h3 id={id}>{name}</h3>
                    <p id={id}>{description}</p>
                </div>
                <div className="bottom-block-container">
                    <div className="characteristics-wrapper">   
                    <ul>
                        {Characteristics}
                    </ul>
                    </div>
                    <div className="btn-and-price-container">
                        <div className="price-wrapper">
                            <h2 id={id}>{price}</h2>
                        </div>
                        <div className="btns-wrapper">
                            <Button label={infoBtn.label} btnID={infoBtn.btnID}/>
                            <Button label={buyBtn.label} btnID={buyBtn.btnID}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


ProductCard.popTypes={
    key:PropTypes.number,
    id:PropTypes.number,
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    price:PropTypes.string.isRequired,
    image:PropTypes.string,
}

export default ProductCard;