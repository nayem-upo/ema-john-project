import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(response=> response.json())
        .then(data=> setProducts(data))
    }, [])
    
    const addToCartBtn = (product)=>{
        const newCart = [...cart , product]
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product={product}
                         key={product.id}
                         addToCartBtn={addToCartBtn}
                         ></Product>)
                }
                
            </div>

            <div className='cart-container'>
                <h2 className='order-summary'>Order Summary</h2>
                <div className='cart-details'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax: ${}</p>
                <h3>Grand Total: ${}</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;