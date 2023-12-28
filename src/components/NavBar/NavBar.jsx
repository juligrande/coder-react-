import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import CartContext from "../CartContext/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="NavBar">
      <Link to='/'>
        <h1 className="titulo">Ecommerce - Juligrande</h1>
      </Link>
      <div className="Categories">
        <NavLink to='/' end className="Option">
          Inicio
        </NavLink>
        <NavLink to='/item/1' className="Option">
          Iphone 12
        </NavLink>
        <NavLink to='/item/2' className="Option">
          Samsung S21
        </NavLink>
        <NavLink to='/item/3' className="Option">
          Ipad
        </NavLink>
        <NavLink to='/cart'>
          <div className="cart-icon">
            <img src="/src/components/CartWidget/assets/carrito.svg" alt="carrito" className="carrito"/>
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
