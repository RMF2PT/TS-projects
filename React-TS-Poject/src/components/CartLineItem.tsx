import { ReactElement, ChangeEvent, memo } from "react";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";
import { ReducerActionType } from "../context/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({
  item,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotal: number = item.price * item.quantity;

  const highestQuantity: number = 20 > item.quantity ? 20 : item.quantity;

  const optionValues: number[] = [...Array(highestQuantity).keys()].map(
    (num) => num + 1
  );

  const options: ReactElement[] = optionValues.map((num) => {
    return (
      <option key={`opt${num}`} value={num}>
        {num}
      </option>
    );
  });

  const onChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: parseInt(e.target.value) },
    });
  };

  const onRemoveFromCart = () => {
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  };

  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__item-img" />

      <div aria-label="Item Name">{item.name}</div>

      <div aria-label="Price Per Item">
        {new Intl.NumberFormat("pt-PT", {
          style: "currency",
          currency: "EUR",
        }).format(item.price)}
      </div>

      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>

      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.quantity}
        aria-label="Item Quantity"
        onChange={onChangeQuantity}
      >
        {options}
      </select>

      <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat("pt-PT", {
          style: "currency",
          currency: "EUR",
        }).format(lineTotal)}
      </div>

      <button
        className="cart__button"
        aria-label="Remove Item from Cart"
        title="Remove Item from Cart"
        onClick={onRemoveFromCart}
      >
        🗑️
      </button>
    </li>
  );

  return content;
};

function areItemsEqual(
  { item: prevItem }: PropsType,
  { item: nextItem }: PropsType
) {
  return Object.keys(prevItem).every((key) => {
    return (
      prevItem[key as keyof CartItemType] ===
      nextItem[key as keyof CartItemType]
    );
  });
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(
  CartLineItem,
  areItemsEqual
);

export default MemoizedCartLineItem;
