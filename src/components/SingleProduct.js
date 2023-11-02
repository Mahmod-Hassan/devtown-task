import React from 'react';

const SingleProduct = ({product}) => {
    const {image, title, category, description, price} = product || {};
    return(
        <div className='product-card'>
            <div className='img-container'>
                <img src={image} alt={`${title} img`} />
            </div>
            <div>
                <h1 className='title'>{title}</h1>
                <p>Category : <span  className='badge'>{category}</span></p>
                <h3>Price : $ {price}</h3>
                <p>{`${description.slice(0,100)}...`}</p>
            </div>
        </div>
    )
}
export default SingleProduct;