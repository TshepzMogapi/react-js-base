import Product from "./Product";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProductSummary from "../components/product-summary/product-summary";
import MyDoc from "../components/MyDoc"
import Fragment from "react";
const ProductsContainer = (props) => {
  const addToCart = (product) => {
    props.onAddToCart(product);
  };
  let dislpayedProducts = <div>No products found</div>;

  if (props.products.length > 0) {
    dislpayedProducts = props.products.map((product) => <ProductSummary />);
  }
  return (
    <div style={{ marginTop: "120px" }}>
      <Container maxWidth="sm">
        {/* <ProductSummary /> */}
        <div style={{ height: "120px" }}>
        <MyDoc/>

        </div>
      </Container>
    </div>
  );
};

export default ProductsContainer;
