import React from "react";

const CartItem = ({ product }) => {
  return (
    <div>
      <p>{product.name} - Cantidad: {product.quantity} - Precio: ${product.price * product.quantity}</p>
    </div>
  );
};

export default CartItem;
