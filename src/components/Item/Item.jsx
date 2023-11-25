import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id,name,img,price,stock}) => {
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} style={{ width: '170px', height: '240px' }} alt={name} className="ItemIng"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`}className="Option">Ver Detalle</Link>
            </footer>
        </article>

    )
}

export default Item;