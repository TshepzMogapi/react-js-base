import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import Filters from './components/Filters';
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

const filters = [
  { name: 'Type A', category: 1, checked: false },
  { name: 'Type B', category: 2, checked: false },
  { name: 'Type C', category: 3, checked: false },
  { name: 'Type D', category: 4, checked: false },
];
const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const [shoppingCartProducts, setShoppingCartProdcuts] = useState([]);

  const addToCart = (product) => {
    setShoppingCartProdcuts((previousProducts) => {
      return [product, ...previousProducts];
    });
  };

  const filterProducts = (updatedFilter) => {
    // filter products
    console.log('filterProducts');
    console.log(updatedFilter);
  };

  return (
    <div>
      <h2>This is the App</h2>
      <ShoppingCart products={shoppingCartProducts}></ShoppingCart>

      <Filters onFiltersUpdated={filterProducts} filters={filters}></Filters>

      {products.map((product) => (
        <Product
          key={product.id}
          onAddToCart={addToCart}
          price={product.price}
          shortDescription={product.shortDescription}
          id={product.id}
        ></Product>
      ))}
    </div>
  );
};

export default App;
