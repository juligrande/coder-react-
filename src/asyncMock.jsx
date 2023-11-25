import iphoneImage from './imgs/Iphone 12.webp';
import samsungImage from './imgs/Samsung S21.webp';
import ipadImage from './imgs/Ipad SE.jpg';
const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: '1000',
        category: 'celular',
        img: iphoneImage,
        stock: '25',
        description: 'Descripcion Iphone 12'
    },
    { id: '2', name: 'Samsung S21', price: 800, category: 'celular', img: samsungImage},
    { id: '3', name: 'Ipad SE', price: 1300, category: 'tablet', img: ipadImage}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}