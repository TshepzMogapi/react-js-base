const ShoppingCart = (props) => {
  return (
    <div className="shopping-cart">
      This is Shopping Cart {props.products.length}
    </div>
  );
};

export default ShoppingCart;
