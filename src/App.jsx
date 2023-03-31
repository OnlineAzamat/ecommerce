import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import "./styles.sass"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/Product"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    // https://www.w3schools.com/js/js_cookies.asp  <<< qosiw kerek
    // https://codingartistweb.com/2022/01/cookie-consent-banner-html-css-javascript/
  )
}

export default App
