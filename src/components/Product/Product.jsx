import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{id, category, name, price, seller, ratings, img}= props.product
    const addToCartBtn = props.addToCartBtn

    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />

            <div className='name-price'>
                <h3>{name}</h3>
                <h3>Price ${price}</h3>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>

            <button onClick={()=>addToCartBtn(props.product)} className='add-to-cart-btn'>
                <h4>Add to Cart</h4>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
            
        </div>
    );
};

export default Product;