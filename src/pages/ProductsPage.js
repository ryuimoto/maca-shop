import React from "react";
import products from "../data/products";
import Product from "../components/Products";

function ProductsPage(){
    return(
        <div>
            <h1>Products</h1>
            <div style={{ display:"flex",flexWrap:"wrap" }}>
                {products.map(product =>{
                    <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    );
}

export default ProductsPage;