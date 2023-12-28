import React, { useContext, useState } from "react";
import { Timestamp, writeBatch, getDocs, query, where } from "firebase/firestore";
import CartContext from "../CartContext/CartContext";
import { db } from "../../firebase/client";
import { addDoc, collection, documentId } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CartItem = ({ product }) => {
  return (
    <div>
      <p>{product.name} - Cantidad: {product.quantity} - Precio: ${product.price}</p>
    </div>
  );
};

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
      };


      setOrderId("DAhds8232732hJHDSHJ"); 

      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />  

      {cart.map(product => (
        <CartItem key={product.id} product={product} />
      ))}

      <p>Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
    </div>
  );
};

export default Checkout;
