import useCart from "../hooks/UseCart";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  // Get the total number of items and total price from the cart context
  const { totalItems, totalPrice } = useCart();

  // Get the current year
  const year: number = new Date().getFullYear();

  // Create the page content based on the viewCart prop state
  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
};

export default Footer;
