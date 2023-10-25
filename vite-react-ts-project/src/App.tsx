import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello!"} />
      <Section title={"Props Title"}>Anything for the children</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  );
}

export default App;
