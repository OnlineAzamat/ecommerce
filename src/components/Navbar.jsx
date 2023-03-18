import React, { useEffect, useState } from 'react'

function Navbar() {
    const token = window.localStorage.getItem('token');

    const [navPos, setnavPos] = useState("static");
    const [navFilter, setnavFilter] = useState("blur(0)");
    const [navColor, setnavColor] = useState("rgb(33,37,41)");
    const listenScrollEvent = () => {
        window.scrollY > 72 ? setnavPos("fixed") : setnavPos("static");
        window.scrollY > 72 ? setnavFilter("blur(13px)") : setnavFilter("blur(0)");
        window.scrollY > 72 ? setnavColor("rgba(0,0,0,.1)") : setnavColor("rgb(33,37,41)");
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
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                            <img src="https://www.svgrepo.com/show/228332/shopping-cart.svg" className="bi me-2" width="40" height="32" aria-label="Bootstrap" alt="logo" />
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Products</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                        </form>
                        <div className="text-end">
                            {
                                token ? 
                                (
                                    <button type="button" className="btn btn-outline-light position-relative">
                                        <i className='fa fa-shopping-cart me-2'></i>
                                        Cart
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            3
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                ) : 
                                (
                                    <>
                                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                                        <button type="button" className="btn btn-warning">Sign-up</button>
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