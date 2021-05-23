import './Product.css';
import styled from 'styled-components';

const Button = styled.button`
  background: green;
  border-radius: 3px;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

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
    <div>
      <div className="data-2">{props.price}</div>
      <div className="data-3">{props.shortDescription}</div>

      <Button onClick={addToCart}>Add To cart</Button>
    </div>
  );
};

export default Product;
