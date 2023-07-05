import { useState, useEffect } from 'react'
import './App.css'

//import Components
import Header from './components/Header'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'

//importData
import ProductData from './data/product_data.json'



function App() {
  
  const [data, DataSet] = useState(ProductData);
 
  

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

    </div>
  )
}

export default App
