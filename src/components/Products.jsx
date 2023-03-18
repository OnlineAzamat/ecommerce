import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Products() {
    const [data, setdata] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        getProducts()
    }, [])
    
    const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://api.storerestapi.com/products")
        if(componentMounted) {
            setdata(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            console.log(filter);
        }
    }

    const Loading = () => {
        return (
            <><div class="lds-ripple">
                <div></div>
                <div></div>
            </div></>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelery Clothing</button>
                    <button className="btn btn-outline-dark me-2">Electronic</button>
                </div>
                {
                    filter.map(( products ) => {
                        return(
                            <>
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={products.img} className='card-img-top' alt="card-img" />
                                        <div className="card-body">
                                            <h5 className='card-title'></h5>
                                            <p className='card-text'></p>
                                            <a href="#" className='btn -btn-primary'></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div>
            <div class="container my-5 py-5">
                <div class="row">
                    <div class="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }
                </div>
            </div>
        </div>
    )
}

export default Products