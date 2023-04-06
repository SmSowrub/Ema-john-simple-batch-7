import { getShoppingCart } from "../../utilities/fakedb";

const getStoreCard= async ()=>{
    const getProducts =await fetch('products.json');
    const products=await getProducts.json();

    const getShoppingCartData=getShoppingCart();
    const addToCart=[];
    for (const id in getShoppingCartData) {
        const addProduct=products.find(product =>product.id ===id)
        if(addProduct){
            const quantity =getShoppingCartData[id];
            addProduct.quantity=quantity;
            addToCart.push(addProduct);
            
        }
    }
    

    return addToCart;
}
export default getStoreCard;