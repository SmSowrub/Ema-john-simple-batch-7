import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const {id,img,name,price,seller,ratings}=props.product;
    const AddToCart=props.AddToCart;
   
    return (
        <div className='cart'>
            <div className='imgs'>
            <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <h5>Price : ${price}</h5>
            <p>Manufacturer : {seller}</p>
            <h6>Rating : {ratings}</h6>
            <button onClick={()=>AddToCart(props.product)} className='buttons'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Cart;