import React from "react";
import { useCart } from "../context/CartContext";

function CartPage(){
    const {state,dispatch} = useCart();

    const removeFromCart = id => {
        dispatch({ type:'REMOVE_ITEM',payload:{id} });
    };

    return(
        <div>
            <h1>Your Cart</h1>
            <ul>
                {state.items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default CartPage;