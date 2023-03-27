import React, { useEffect, useState } from 'react';
import './Shop.css'

import Cart from '../Cart/Cart';
import CartSummary from '../CartSummary/CartSummary';
const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const AddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
      }
    // console.log(products);
    return (
        <div className='cart-component'>
           <div className='cart-Products'>
           {
             products.map(product =><Cart key={product.id} product={product} AddToCart={AddToCart}></Cart>)
           }
           </div>
           <div>
            <CartSummary cart={cart}></CartSummary>
           </div>
        </div>
    );
};

export default Shop;