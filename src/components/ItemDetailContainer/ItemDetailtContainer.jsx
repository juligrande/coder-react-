// ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { getProductById } from '../../asyncMock';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const details = await getProductById(itemId);
        setItemDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemDetails();
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
