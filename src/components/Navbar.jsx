import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

function Navbar() {
    const state = useSelector((state) => state.handleCart)
    const token = window.localStorage.getItem('token');

    const [navPos, setnavPos] = useState("absolute");
    const [navFilter, setnavFilter] = useState("blur(0)");
    const [navColor, setnavColor] = useState("rgb(33,37,41)");
    const listenScrollEvent = () => {
        if(window.scrollY > 72) {
            setnavPos("fixed");
            setnavFilter("blur(13px)");
            setnavColor("rgba(0,0,0,.1)");
        } else{
            setnavPos("absolute");
            setnavFilter("blur(0)");
            setnavColor("rgb(33,37,41)");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div className="Navbar" style={{position: navPos}}>
            <header className="p-3" style={{backdropFilter: navFilter, backgroundColor: navColor}}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                            <img src="https://www.svgrepo.com/show/228332/shopping-cart.svg" className="bi me-2" width="40" height="32" aria-label="Bootstrap" alt="logo" />
                        </Link>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link px-2" style={{color: "#adb5bd"}}>Home</Link></li>
                            <li><Link to="/products" className="nav-link px-2">Products</Link></li>
                            <li><Link to="/about" className="nav-link px-2">About</Link></li>
                            <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" style={{backgroundColor: "transparent"}} className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form>
                        <div className="text-end">
                            {
                                !token ? 
                                (
                                    <>
                                        <Link to={"/favourites"} className="me-2">
                                            <button className='favourite-btn'>
                                                <i className="fa fa-heart" style={{color: "red"}}></i>
                                            </button>
                                        </Link>
                                        <Link to={"/cart"}>
                                            <button className='favourite-btn position-relative'>
                                                <i className="fa fa-shopping-cart" style={{color: "#fff"}}></i>
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    {state.length}
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </button>
                                        </Link>
                                    </>
                                ) : 
                                (
                                    <>
                                        <Link to={"/login"}>
                                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                                        </Link>
                                        <Link to={"/sign-up"}>
                                            <button type="button" className="btn btn-warning">Sign-up</button>
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar