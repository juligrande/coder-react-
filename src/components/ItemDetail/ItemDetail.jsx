import { Link } from "react-router-dom"
import './Item.css'
import { useState } from "react"

const Item = ({id,name,img,category, description, price,stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }
    
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
                    Categoria:{category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Stock disponible:{stock}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart"className="Option">Terminar Compra</Link>

                    ) : (
                        <ItemCount initial = {1} stock = {stock} onAdd = {handleOnAdd}/>
                    )
                }
            </footer>
        </article>

    )
}

export default ItemDetail;