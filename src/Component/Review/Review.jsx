import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Review.css'
const Review = ({ reviewItem, removeAddToCart }) => {
    // console.log(reviewItem);
    const { id, name, price, img, quantity } = reviewItem;
    return (
        <div className='review'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='reviewDetails'>
                <h3 className="data"><small className='names'>{name}</small></h3>
                <p className="data">Price : <small className='price'>{price}</small></p>
                <p className="data">quantity : <small className='price'>{quantity}</small></p>
            </div>
            <button onClick={() => removeAddToCart(id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default Review;