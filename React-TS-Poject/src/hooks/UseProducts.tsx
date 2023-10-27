import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { UseProductsContextType } from "../context/ProductsProvider";

// This hook will return the value of the ProductsContext to be used in any component
const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
