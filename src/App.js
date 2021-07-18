import Product from './components/Product';
import styled from 'styled-components';
import ShoppingCart from './components/ShoppingCart';
import Filters from './components/Filters';
import { useState, useEffect, useReducer } from 'react';
import ProductsContainer from './components/ProductsContainer';
import ShippingInfo from './components/ShippingInfo';

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
    console.log("REDUCER TRIGGERED");
    return {
      products:[],
      shoppingCartProducts:  [...state.shoppingCartProducts, action.product]
    }
  }
  return {
    products:[],
    shoppingCartProducts:[]
  }
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [products, setProducts] = useState(initialProducts);

  // const [shoppingCartProducts, setShoppingCartProdcuts] = useState([]);

  const [filters, setFilters] = useState(initialFilters);

  let filteredProducts = products;

  const [productsState, dispatchProducts] = useReducer(productsReducer, {
    // products:[],
    shoppingCartProducts:[]
  })

  useEffect(()=> {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, [])

  const addToCart = (product) => {
    dispatchProducts({type: 'ADD_TO_CART', product: product});

    // setShoppingCartProdcuts((previousProducts) => {
    //   return [product, ...previousProducts];
    // });
  };

  const login = () => {
    localStorage.setItem('currentUser', 1)
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser')
  }

  const filterProducts = (updatedFilter) => {
    filteredProducts = products.filter((p) => p.categories.includes(2));
    setProducts((previousProducts) => {
      return [...filteredProducts];
    });
  };

  return (
    <div>
      <h2>This is the App</h2>
      <Button onClick={isLoggedIn ? logout : login}> {isLoggedIn ? 'Logout' : 'Login'}</Button>

      <h3>User Logged In {isLoggedIn ? 'True' : 'False'} </h3>
      <ShoppingCart products={productsState.shoppingCartProducts}></ShoppingCart>

      <Filters onFiltersUpdated={filterProducts} filters={filters}></Filters>

      <ProductsContainer onAddToCart={addToCart} products={products} />

      <ShippingInfo></ShippingInfo>
      <div>{JSON.stringify(productsState)}</div>
    </div>
  );
};

export default App;
