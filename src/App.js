import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import Filters from './components/Filters';
import { useState } from 'react';
import ProductsContainer from './components/ProductsContainer';

const initialProducts = [
  {
    id: 123,
    price: 432,
    shortDescription: 'Cool Product',
    categories: [1],
  },
  {
    id: 321,
    price: 391,
    shortDescription: 'Bad Product',
    categories: [2],
  },
  {
    id: 333,
    price: 391,
    shortDescription: 'Another Product',
    categories: [3],
  },
];

const initialFilters = [
  { name: 'Type A', category: 1, checked: false },
  { name: 'Type B', category: 2, checked: false },
  { name: 'Type C', category: 3, checked: false },
  { name: 'Type D', category: 4, checked: false },
];
const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const [shoppingCartProducts, setShoppingCartProdcuts] = useState([]);

  const [filters, setFilters] = useState(initialFilters);

  let filteredProducts = products;

  const addToCart = (product) => {
    setShoppingCartProdcuts((previousProducts) => {
      return [product, ...previousProducts];
    });
  };

  const filterProducts = (updatedFilter) => {
    console.log(updatedFilter);

    filteredProducts = products.filter((p) => p.categories.includes(2));
    console.log(filteredProducts);

    setProducts((previousProducts) => {
      console.log(previousProducts);
      return [...filteredProducts];
    });

    // filter products
    // setFilters(updatedFilters);
  };

  return (
    <div>
      <h2>This is the App</h2>
      <ShoppingCart products={shoppingCartProducts}></ShoppingCart>

      <Filters onFiltersUpdated={filterProducts} filters={filters}></Filters>

      <ProductsContainer products={products} />
    </div>
  );
};

export default App;
