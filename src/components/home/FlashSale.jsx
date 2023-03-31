import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import { CCarousel, CCarouselItem } from "@coreui/react"
import axios from 'axios';
import { Link } from 'react-router-dom';

function FlashSale() {
    const [flashData, setFlashData] = useState([])
    const time = new Date();
    time.setMinutes(time.getMinutes() + 720);

    useEffect(() => {
        getFlashData()
    }, [])

    function getFlashData() {
        axios.get('https://fakestoreapi.com/products?limit=10')
            .then(data => {
                console.log(data.data)
                setFlashData(data.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container flash-sale'>
            <div className="row justify-content-between align-items-center flash-sale__container">
                <div className="col-md-5">
                    <h2>Eng yaxshi elektronika x12-gacha muddatli to'lovda</h2>
                    <Timer expiryTimestamp={time} />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="inner-container">
                        <CCarousel indicators={true} interval={3000}>
                            {
                                flashData.map(data => {
                                    return(
                                        <CCarouselItem className='position-relative'>
                                            <Link to={`/cart/${data.id}`} className='flash-inner-item'>
                                                <div className="flash-item__img">
                                                    <img src={data.image} alt="img" />
                                                </div>
                                                <div className="flash-item__data">
                                                    <p className="flash-item__data-title">{data.title.substring(0,30) + '...'}</p>
                                                    <div className="flash-item__data-price">
                                                        <span className='flash-local-price'>$ {Math.floor(data.price * 0.92)}</span>
                                                        <br />
                                                        <span className="price-text-decoration">$ {data.price}</span>
                                                        <span className="product-mini__discount">-8%</span>
                                                    </div>
                                                    <div className="flash-item__slider__line"></div>
                                                </div>
                                            </Link>
                                        </CCarouselItem>
                                    )
                                })
                            }
                        </CCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashSale