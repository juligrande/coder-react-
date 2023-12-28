import React, { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CartItem = ({ product }) => (
  <div>
    <p>
      {product.name} - Cantidad: {product.quantity} - Precio: ${product.price}
    </p>
  </div>
);

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm />

      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <p>Total: ${total}</p>
    </div>
  );
};

export default Checkout;
