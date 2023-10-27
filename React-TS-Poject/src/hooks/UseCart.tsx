import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { UseCartContextType } from "../context/CartProvider";

// This hook will return the value of the CartContext to be used in any component
const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};

export default useCart;
