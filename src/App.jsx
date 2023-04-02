import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import "./styles.sass"
import "./Loader.sass"  
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/Product"
import About from "./components/About"
import Footer from "./components/Footer"
import SignUpPage from "./components/SignUp"
import Korzinka from "./components/Korzinka"
import Page404 from "./components/404Page"
import Cart from "./components/Cart"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/products" element={
            <>
              <Navbar />
              <Products />
              <Footer />
            </>
          } />
          <Route path="/products/:id" element={
            <>
              <Navbar />
              <Product />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Navbar />
              <Korzinka />
              <Footer />
            </>
          } />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
    // https://www.w3schools.com/js/js_cookies.asp  <<< qosiw kerek
    // https://codingartistweb.com/2022/01/cookie-consent-banner-html-css-javascript/
  )
}

export default App
