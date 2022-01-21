import styled from 'styled-components';
import ShoppingCart from './components/ShoppingCart';
import Filters from './components/Filters';
import { useState, useEffect, useReducer, useContext, Fragment } from 'react';
import ProductsContainer from './components/ProductsContainer';
import ShippingInfo from './components/ShippingInfo';
import AuthContext from './store/auth-context';
import Login from './components/Login';
import Header from './components/header/header';
import ProductSummary from './components/product-summary/product-summary';

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
    price: 399,
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

const Button = styled.button`
  background: blue;
  border-radius: 3px;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const productsReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    console.log('REDUCER TRIGGERED');
    return {
      products: [],
      shoppingCartProducts: [...state.shoppingCartProducts, action.product],
    };
  }
  return {
    products: [],
    shoppingCartProducts: [],
  };
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [products, setProducts] = useState(initialProducts);

  // const [shoppingCartProducts, setShoppingCartProdcuts] = useState([]);

  const [filters, setFilters] = useState(initialFilters);

  let filteredProducts = products;

  const [productsState, dispatchProducts] = useReducer(productsReducer, {
    // products:[],
    shoppingCartProducts: [],
  });

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const addToCart = (product) => {
    dispatchProducts({ type: 'ADD_TO_CART', product: product });
  };

  const login = () => {
    localStorage.setItem('currentUser', 1);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
  };

  const filterProducts = (updatedFilter) => {
    filteredProducts = products.filter((p) => p.categories.includes(2));
    setProducts((previousProducts) => {
      return [...filteredProducts];
    });
  };

  const ctx = useContext(AuthContext);

  return (
    <>
        <Header/>
        
        <ProductsContainer onAddToCart={addToCart} products={products} />

        {/* <main>
          <Login/>
          
          <ShoppingCart
            products={productsState.shoppingCartProducts}
          ></ShoppingCart>

          <Filters
            onFiltersUpdated={filterProducts}
            filters={filters}
          ></Filters>

          <ProductsContainer onAddToCart={addToCart} products={products} />

          <ShippingInfo></ShippingInfo>
          <div>{JSON.stringify(productsState)}</div>
        </main> */}

    </>
  );
};

export default App;
