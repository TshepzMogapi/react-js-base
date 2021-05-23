import Product from './Product';
import styles from './ProductContainer.module.css';

const ProductsContainer = (props) => {
  const addToCart = (product) => {
    props.onAddToCart(product);
  };
  let dislpayedProducts = <div>No products found</div>;

  if (props.products.length > 0) {
    dislpayedProducts = props.products.map((product) => (
      <Product
        key={product.id}
        onAddToCart={addToCart}
        price={product.price}
        shortDescription={product.shortDescription}
        id={product.id}
      ></Product>
    ));
  }
  return <div className={styles.container}>{dislpayedProducts}</div>;
};

export default ProductsContainer;
