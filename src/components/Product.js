import './Product.css';
import { Fragment } from 'react';
import Button from '@mui/material/Button';


const Product = (props) => {
  const addToCart = () => {
    console.log('add');

    const cartProduct = {
      id: props.id,
      price: props.price,
    };
    props.onAddToCart(cartProduct);
  };
  return (
    <Fragment>
      <div className="data-2">{props.price}</div>
      <div className="data-3">{props.shortDescription}</div>

      <Button variant="contained" onClick={addToCart}>Add To cart</Button>
    </Fragment>
  );
};

export default Product;
