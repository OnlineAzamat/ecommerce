import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "../navigation.css"

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul className='mb-0 ms-0 ps-2'>
                <li className="list active">
                    <Link to={"/"}>
                        <span className='icon'>
                            <i class="bi bi-house-door"></i>
                        </span>
                        <span className='text'>Home</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className="list">
                    <Link to={"/"}>
                        <span className='icon'>
                            <i class="bi bi-grid"></i>
                        </span>
                        <span className='text'>Category</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className="list">
                    <Link to={"/"}>
                        <span className='icon'>
                            <i class="bi bi-chat"></i>
                        </span>
                        <span className='text'>Message</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className="list">
                    <Link to={"/"}>
                        <span className='icon'>
                            <i class="bi bi-camera"></i>
                        </span>
                        <span className='text'>Photos</span>
                        <span className='circle'></span>
                    </Link>
                </li>
                <li className="list">
                    <Link to={"/"}>
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