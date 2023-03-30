import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import "./styles.sass"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/Product"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
    </BrowserRouter>
    // https://www.w3schools.com/js/js_cookies.asp  <<< qosiw kerek
    // https://codingartistweb.com/2022/01/cookie-consent-banner-html-css-javascript/
  )
}

export default App
