import React from "react";

function Product({product}){
    return(
        <div style={{ border: "1px solid #ccc", padding:"10px",margin:"10px"}}>
            <img src={product.imageUrl} alt={product.name} style={{ width: "100px", height:"100px" }}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );
}

export default Product;