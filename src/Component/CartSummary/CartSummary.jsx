import React from 'react';
import './Cartsummary.css'

const CartSummary = ({cart}) => {
    // console.log(props.cart);
    // const cart =props.cart;
    // const {cart}=props;
    // console.log(cart);
   let TotalPrice=0;
   let TotalShipping=0;
   let quantity=0;
   for (const product of cart) {
    // same kaj
    if (product.quantity === 0) {
        product.quantity= 1;
    }
    // or
    // product.quantity =product.quantity || 1;
    TotalPrice = TotalPrice + product.price *product.quantity;
    TotalShipping +=product.shipping
    quantity =quantity + product.quantity;
   }
   const text=TotalPrice*5/100;
  const GrendTotal=TotalPrice+TotalShipping+text;
    return (
        <div className='allCart'>
            <h3 className='summary'>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${TotalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${TotalShipping.toFixed(2)}</p>
            <p>Text: ${text.toFixed(2)} </p>
            <h6>Grand Total: ${GrendTotal.toFixed(2)}</h6>
        </div>
    );
};

export default CartSummary;