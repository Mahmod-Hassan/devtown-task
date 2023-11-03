import React from 'react';
import { ProductCardContainer, ProductDetails } from '../styles/Container.styles';
import { Category, Image } from '../styles/Elements.styles';

const SingleProduct = ({product}) => {
    const {image, title, category, description, price} = product || {};
    return(
        <ProductCardContainer>
                <Image src={image} alt={`${title} img`} />
            <ProductDetails>
                <h1>{title}</h1>
                <h4>Category : <Category>{category}</Category></h4>
                <h2>Price : $ {price}</h2>
                <p>{`${description.slice(0,100)}...`}</p>
            </ProductDetails>
        </ProductCardContainer>
    )
}
export default SingleProduct;