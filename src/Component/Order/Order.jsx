import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'
import CartSummary from '../CartSummary/CartSummary';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const cart =useLoaderData()
    const [removeCart, setRemoveCart]= useState(cart)

    const removeAddToCart=(id)=>{
       const removeCartDetails=removeCart.filter(cartId=>cartId.id !== id)
       setRemoveCart(removeCartDetails)
       removeFromDb(id);
    }

    const allClearData=()=>{
        setRemoveCart([]);
        deleteShoppingCart();
    }
   
    return (
        <div className='cart-component'>
           <div className='allReview'>
            {
                removeCart.map(reviewItem=><Review key={reviewItem.id} reviewItem={reviewItem} removeAddToCart={removeAddToCart}></Review>)
            }
           </div>
           <div>
            <CartSummary allClearData={allClearData} cart={removeCart}>
            <Link to='/checkout'>
                <button className='btn-proceed'>
                    <span>Proceed Checkout</span>
                <FontAwesomeIcon className='fontIcon' icon={faCheckToSlot}/>
                </button>
                
            </Link>
            </CartSummary>
           </div>
        </div>
    );
};

export default Order;