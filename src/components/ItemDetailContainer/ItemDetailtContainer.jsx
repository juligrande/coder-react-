// ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { getProductById } from '../../asyncMock';
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()



  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productsAdapted = { id: response.id, ...data }
        setProduct(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      }
      )
    
  }, [itemId]);

  if (!itemDetails) {
    // You can render a loading indicator or handle the loading state here
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Detalles del item</h1>
      <p>Nombre: {itemDetails.name}</p>
      <p>Categoria: {itemDetails.category}</p>
      <p>Precio: ${itemDetails.price}</p>
      <p>Descripcion: {itemDetails.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
