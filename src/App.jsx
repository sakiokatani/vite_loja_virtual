import { useState, useEffect } from 'react'
import { Router } from 'react-router-dom'
import './App.css'

//import Components
import Header from './components/Header'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer.jsx'

//importData
import ProductData from './data/product_data.json'



function App() {
  
  const [data, DataSet] = useState(ProductData);
  const [banner, setBanner] = useState({ slogan: "", pageTitle: "", decoration: "" });
  

  return (
    <div className="container-flex">
      <div className="header-container">
        <Header/>
      </div>
      <div className="banner-container">
        <Banner/>
      </div>
      <div className="body-container">
        {ProductData.map((product) => {
          return (
            <div className="productCard" key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name.toUpperCase()}
                description={product.description}
                price={product.price}
                image={product.imgPath}
                />
                </div>
              );
            })}
      </div>
      <div className='footer-container'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
