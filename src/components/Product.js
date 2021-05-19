import './Product.css';

function Product(props) {
  const addToCart = () => {
    console.log('add');

    const cartProduct = {
      id: props.id,
      price: props.price,
    };
    props.onAddToCart(cartProduct);
  };
  return (
    <div>
      <div className="data-2">{props.price}</div>
      <div className="data-3">{props.shortDescription}</div>

      <button onClick={addToCart}>Add To cart</button>
    </div>
  );
}

export default Product;
