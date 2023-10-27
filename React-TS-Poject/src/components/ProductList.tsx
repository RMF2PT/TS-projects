import useCart from "../hooks/UseCart";
import useProducts from "../hooks/UseProducts";
import { UseProductsContextType } from "../context/ProductsProvider";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  // Get the dispatch function, Render Actions and cart from the cart context
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  // Get the products from the products context
  const { products } = useProducts() as UseProductsContextType;

  // Page content will be a loading message by default until the products are loaded
  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  // If the products are loaded, display the products
  if (products?.length) {
    pageContent = products.map((product) => {
      // Check if the product is in the cart
      const inCart: boolean = cart.some(
        (cartItem) => cartItem.sku === product.sku
      );

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className="main main__products">{pageContent}</main>;

  return content;
};
export default ProductList;
