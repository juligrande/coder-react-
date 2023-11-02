import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce - Juligrande</h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Zapatillas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar