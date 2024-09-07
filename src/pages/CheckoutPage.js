import React,{ useState } from "react";
import { useCart } from '../context/CartContext';

function CheckoutPage(){
    const { state } = useCart();
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [paymentMethod,setPaymentMethod] = useState('Credit Card');

    const handleSubmit = (event) =>{
        event.preventDefault();

        alert(`Thank you, ${name}! Your order has been placed.`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Checkout</h1>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
                <label>Payment Method:</label>
                <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="PayPal">PayPal</option>
                </select>
            </div>
            <button type="submit">Place Order</button>
        </form>
    );

}

export default CheckoutPage;
