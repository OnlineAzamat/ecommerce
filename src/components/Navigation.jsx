import React from 'react'
import { Link } from 'react-router-dom'
import "../navigation.css"

const Navigation = () => {
    const location = window.location.pathname;

    return (
        <div className='navigation'>
            <ul className='mb-0 ms-0 ps-2'>
                <li className={location == "/" ? "list active" : "list"}>
                    <Link to={"/"}>
                        <span className='icon'>
                            <i class="bi bi-house-door"></i>
                        </span>
                        <span className='text'>Home</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className={location == "/categories" ? "list active" : "list"}>
                    <Link to={"/"}>
                        <span className='icon'>
                            <i class="bi bi-grid"></i>
                        </span>
                        <span className='text'>Category</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className={location == "/favourites" ? "list active" : "list"}>
                    <Link to={"/"}>
                        <span className='icon'>
                            <i class="bi bi-heart"></i>
                        </span>
                        <span className='text'>Favourites</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className={location == "/about" ? "list active" : "list"}>
                    <Link to={"/about"}>
                        <span className='icon'>
                            <i class="bi bi-cart"></i>
                        </span>
                        <span className='text'>Basket</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className={location == "/account" ? "list active" : "list"}>
                    <Link to={"/sign-in"}>
                        <span className='icon'>
                            <i class="bi bi-person"></i>
                        </span>
                        <span className='text'>Account</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    )
}

export default Navigation