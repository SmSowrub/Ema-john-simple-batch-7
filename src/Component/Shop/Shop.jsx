import React, { useEffect, useState } from 'react';
import './Shop.css'

import Cart from '../Cart/Cart';
import CartSummary from '../CartSummary/CartSummary';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
      const displayShoppingCart = getShoppingCart();
      let addProductsData=[];
      // console.log(displayShoppingCart);
      for(const id in displayShoppingCart) {
        
          const addProducts=products.find((product)=>product.id ===id);
          // console.log(addProducts);
          if(addProducts){
            const quantity=displayShoppingCart[id];
            addProducts.quantity=quantity;
            addProductsData.push(addProducts)
            console.log(addProducts);
          }
      }
      setCart(addProductsData)
    }, [products])

    const AddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id)
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