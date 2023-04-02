import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../redux/action';

const Korzinka = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <div className="btn-close float-end" aria-label='Close'></div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} />
                        </div>
                        <div className="col-md-4">
                            <h1></h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {
                state.length !== 0 && state.map(cartItems)
            }
        </>
    )
}

export default Korzinka