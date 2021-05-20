import Product from './components/Product';
import ShippingInfo from './components/ShippingInfo';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';

const initialProducts = [
  {
    id: 123,
    price: 432,
    shortDescription: 'Cool Product',
  },
  {
    id: 321,
    price: 391,
    shortDescription: 'Bad Product',
  },
];
const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const [shoppingCartProducts, setShoppingCartProdcuts] = useState([]);

  const addToCart = (product) => {
    setShoppingCartProdcuts((previousProducts) => {
      return [product, ...previousProducts];
    });
  };

  return (
    <div>
      <h2>This is the App</h2>

      {products.map((product) => (
        <Product
          key={product.id}
          onAddToCart={addToCart}
          price={product.price}
          shortDescription={product.shortDescription}
          id={product.id}
        ></Product>
      ))}
      <ShoppingCart products={shoppingCartProducts}></ShoppingCart>
      <ShippingInfo></ShippingInfo>
    </div>
  );
};

export default App;
