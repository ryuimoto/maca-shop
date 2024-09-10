import React from "react";
import { useAuth } from '../context/AuthContext';

function OrderHistoryPage(){
    const { currentUser } = useAuth();
    const orders = currentUser.orders; 

    return(
        <div>
            <h1>Your Orders</h1>
            {orders.map(order => (
                <div key={order.id}>
                    <p>Order ID: {order.id}</p>
                    <p>Date: {order.date}</p>
                    <p>Total: ${order.total.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}

export default OrderHistoryPage;