import React from "react";
import { useParams } from "react-router-dom";
import products from '../data/products';

function ProductDetails(){
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId,10));

    if(!product){
        return <div>Product not find!</div>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} style={{ maxWidth:"100px" }} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;