import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts(categoryId);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categoryId]);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      {greeting && <h1>{greeting}</h1>}
      <div>
        <button onClick={() => setSelectedCategory('celular')} className="categorias">Celulares</button>
        <button onClick={() => setSelectedCategory('tablet')} className="categorias">Tablets</button>
        <button onClick={() => setSelectedCategory(null)} className="categorias">Mostrar Todos</button>
      </div>

      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
