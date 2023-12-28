import { useContext } from "react";
import carrito from "./assets/carrito.svg";
import { Link } from "react-router-dom";
import CartContext from "../CartContext/CartContext"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className='CartImg' src={carrito} alt="Cart-Widget" />
      { totalQuantity }
    </Link>
  );
};

export default CartWidget;
