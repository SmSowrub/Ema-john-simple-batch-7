import React, { useState } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import { useLoaderData } from 'react-router-dom';
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
            <CartSummary allClearData={allClearData} cart={removeCart}></CartSummary>
           </div>
        </div>
    );
};

export default Order;