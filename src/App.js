import Product from './components/Product';
import ShippingInfo from './components/ShippingInfo';

function App() {
  const products = [
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

  const addToCart = (product) => {
    // const product
    console.log(product);
  };

  return (
    <div>
      <h2>This is the App</h2>
      <div> Product in cart 0</div>
      <Product
        onAddToCart={addToCart}
        price={products[0].price}
        id={products[0].id}
        shortDescription={products[0].shortDescription}
      ></Product>
      <ShippingInfo></ShippingInfo>
    </div>
  );
}

export default App;
