import React from "react";
import { useLocation } from "react-router-dom";

function OrderConfirmationPage(){
    const location = useLocation();
    const { orderDetails } = location.state || {};

    return (
        <div>
            <h1>Thank yout for order!</h1>
            <p>Your order number is {orderDetails?.orderNumber}</p>
        </div>
    );

}

export default OrderConfirmationPage;