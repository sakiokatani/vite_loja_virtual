import { useState } from 'react'
import './App.css'

//import Components
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="body-container-flex">
      {/* <div class="header-container"> */}
        <Header/>
      {/* </div> */}
      {/* <div class="banner-container"> */}
        <Banner/>
      {/* </div> */}
    </div>
  )
}

export default App
