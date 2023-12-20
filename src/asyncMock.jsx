import iphoneImage from './imgs/Iphone 12.webp';
import samsungImage from './imgs/Samsung S21.webp';
import ipadImage from './imgs/Ipad SE.jpg';
const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: iphoneImage,
        stock: 25,
        description: 'Iphone 12 de buena calidad, Marca Apple'
    },
    { id: '2', name: 'Samsung S21', price: 800, category: 'celular',img: samsungImage,stock:30,description: 'el Samsung S21 tiene mucha resistencia y muy buena camara integrada'},
    { id: '3', name: 'Ipad SE', price: 1300, category: 'tablet', img: ipadImage,stock:22,description: 'El IPAD tiene una pantalla muy grande esencial para ver peliculas'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}
