import React,{ useState } from "react";
import { useCart } from '../context/CartContext';
import * as Yup from 'yup';
import { Formik,Form,Field,ErrorMessage } from "formik";

const checkoutSchema = Yup.object().shape({
    name:Yup.string().required('Name is required'),
    address: Yup.string().required('Address us required'),
    paymentMethod:Yup.string().required('Payment method is required')
});


function CheckoutPage(){
    return(
        <Formik
            initialValues={{ name:'',address:'',paymentMethod:'Credit Card' }} 
            validationSchema={checkoutSchema}
            onSubmit={(values,actions) => {
                alert('Order has been submitted');
                actions.setSubmitting(false);
            }}
        >
            {formik => (
                <Form>
                    <div>
                        <label>Name:</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div"/>
                    </div>
                    <div>
                        <label>Address:</label>
                        <Field type="text" name="address" />
                        <ErrorMessage name="address" component="div"/>
                    </div>
                    <div>
                        <label>Payment Method:</label>
                        <Field as="select" name="paymentMethod">
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="PayPal">PayPal</option>
                        </Field>
                        <ErrorMessage name="paymentMethod" component="div" />
                    </div>
                    <button type="submit">Place Order</button>
                </Form>
            )}
        </Formik>
    );

}

export default CheckoutPage;
