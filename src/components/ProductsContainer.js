import Product from './Product';

const ProductsContainer = (props) => {
  let dislpayedProducts = <div>No products found</div>;

  if (props.products.length > 0) {
    dislpayedProducts = props.products.map((product) => (
      <Product
        key={product.id}
        // onAddToCart={addToCart}
        price={product.price}
        shortDescription={product.shortDescription}
        id={product.id}
      ></Product>
    ));
  }
  return <div>{dislpayedProducts}</div>;
};

export default ProductsContainer;
