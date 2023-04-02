import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';

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
        const response = await fetch("https://fakestoreapi.com/products")
        if(componentMounted) {
            setdata(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            console.log(filter);
        }
    }

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) =>x.category === cat);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {
                    filter.map(( products ) => {
                        return(
                            <>
                                <div className="col-md-3" key={products.id + products.price}>
                                    <div className="card">
                                        <img src={products.image} className='card-img-top p-5' alt="card-img" />
                                        <div className="card-body">
                                            <h5 className='card-title'>{
                                                products.title.substring(0,15)
                                            }</h5>
                                            <p className='card-text'>${products.price}</p>
                                            <Link to={`/products/${products.id}`} className='btn btn-primary'>Buy Now</Link>
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
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
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