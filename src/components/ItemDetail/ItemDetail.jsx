import React, { useContext } from "react";
import { useHistory } from "react-router-dom";  // Importa useHistory
import "./Item.css";
import CartContext from "../CartContext/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addItem } = useContext(CartContext);
  const history = useHistory(); 
  const handleOnAdd = (quantity) => {
    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
  };

  const handleFinishPurchase = () => {
    history.push("/cart");
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img
          src={img}
          style={{ width: "170px", height: "240px" }}
          alt={name}
          className="ItemIng"
        />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {description}</p>
        <p className="Info">Stock disponible: {stock}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount stock={stock} onAdd={handleOnAdd} />
        <button onClick={handleFinishPurchase} disabled={stock === 0}>
          Terminar Compra
        </button>
      </footer>
    </article>
  );
};

export default ItemDetail;
