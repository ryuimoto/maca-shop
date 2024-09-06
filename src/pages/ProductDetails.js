import React from "react";
import { useParams } from "react-router-dom";
import products from '../data/products';
import { useCart } from "../context/CartContext";

function ProductDetails(){
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId,10));
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_ITEM',payload:product });
    }

    if(!product){
        return <div>Product not find!</div>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} style={{ maxWidth:"100px" }} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;