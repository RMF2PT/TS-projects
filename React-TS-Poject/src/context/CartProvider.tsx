import { useMemo, useReducer, createContext, ReactElement } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStateType = {
  cart: CartItemType[];
};

const initCartState: CartStateType = {
  cart: [],
};

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error(
          "Invalid reducer action payload when adding item to cart"
        );
      }

      // Desctructure payload
      const { sku, name, price } = action.payload;

      // Get the items in the cart that are not the item being added
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      // Check if item already exists in cart
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      // If item exists, increment quantity by 1, otherwise set quantity to 1
      const qty: number = itemExists ? itemExists.quantity + 1 : 1;

      // Return new state with item added
      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity: qty }],
      };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload)
        throw new Error(
          "Invalid reducer action payload when removing item from cart"
        );
      // Desctructure payload
      const { sku } = action.payload;

      // Get the items in the cart that are not the item being removed
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      // Return new state with item removed
      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload)
        throw new Error(
          "Invalid reducer action payload when changing quantity of item in cart"
        );

      // Desctructure payload
      const { sku, quantity } = action.payload;

      // Check if item already exists in cart
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      // Guard against item not existing in cart
      if (!itemExists) {
        throw new Error(
          "Item must exist to update quantity. Use ADD action instead."
        );
      }

      // Define updated item with new quantity
      const updatedItem: CartItemType = { ...itemExists, quantity };

      // Get the items in the cart that are not the item being added
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      // Return new state with item updated
      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT:
      return { ...state, cart: [] };
    default:
      throw new Error("Invalid reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  // Memoize the reducer actions
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  // Get the total number of items in the cart
  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  // Convert the total price to a currency string
  const totalPrice = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.price * cartItem.quantity;
    }, 0)
  );

  // Sort the cart by sku number
  const cart = state.cart.sort((a, b) => {
    // Pick the last 4 characters of the sku and convert to number
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, cart, totalItems, totalPrice };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
