import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import Item from "../Item/Item";
import './ItemDetailtContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    
    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div className="itemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
