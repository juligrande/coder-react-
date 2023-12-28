import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import CartContext from "../CartContext/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="NavBar">
      <Link to="/">
        <h1 className="titulo">Ecommerce - Juligrande</h1>
      </Link>
      <div className="Categories">
        <NavLink to="/" end className="Option">
          Inicio
        </NavLink>
        <NavLink to="/item/1" className="Option">
          Iphone 12
        </NavLink>
        <NavLink to="/item/2" className="Option">
          Samsung S21
        </NavLink>
        <NavLink to="/item/3" className="Option">
          Ipad
        </NavLink>
        <NavLink to="/cart">
          <div className="cart-icon-container">
            <img src="/src/components/CartWidget/assets/carrito.svg" alt="carrito" className="carrito" />
            {totalItemsInCart > 0 && <span className="cart-item-count">{totalItemsInCart}</span>}
          </div>
        </NavLink>
        <NavLink to="/checkout">
          <button className="checkout-btn">Ir al Checkout</button>
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
