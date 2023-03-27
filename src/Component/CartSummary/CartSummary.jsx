import React from 'react';
import './Cartsummary.css'

const CartSummary = ({cart}) => {
    // console.log(props.cart);
    // const cart =props.cart;
    // const {cart}=props;
   let TotalPrice=0;
   let TotalShipping=0;
   for (const product of cart) {
    TotalPrice +=product.price
    TotalShipping +=product.shipping
   }
   const text=TotalPrice*5/100;
  const GrendTotal=TotalPrice+TotalShipping+text;
    return (
        <div className='cart'>
            <h3 className='summary'>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${TotalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${TotalShipping.toFixed(2)}</p>
            <p>Text: ${text.toFixed(2)} </p>
            <h6>Grand Total: ${GrendTotal.toFixed(2)}</h6>
        </div>
    );
};

export default CartSummary;