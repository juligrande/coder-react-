// NavBar.jsx
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
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
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
