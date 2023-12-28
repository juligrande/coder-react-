// ItemCount.jsx
import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  return (
    <div className="ItemCount">
      <div className="Controls">
        <button onClick={decrement} disabled={quantity <= 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment} disabled={quantity >= stock}>
          +
        </button>
      </div>
      <div>
        <button onClick={handleAddToCart} disabled={stock === 0}>
          {quantity > 0 ? "Finalizar Compra" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
