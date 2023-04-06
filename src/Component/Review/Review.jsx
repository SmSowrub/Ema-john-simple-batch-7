import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Review.css'
const Review = ({reviewItem, removeAddToCart}) => {
    // console.log(reviewItem);
    const {id,name,price,img,quantity}= reviewItem;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <div className='reviewDetails'>
                <h3 className="fixed"><small className='names'>{name}</small></h3>
                <p className="fixed">Price : <small className='price'>{price}</small></p>
                <p className="fixed">quantity : <small className='price'>{quantity}</small></p>
            </div>
            <button onClick={()=>removeAddToCart(id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
    );
};

export default Review;