import Heading from "./components/Heading";
import Section from "./components/Section";
import PropsCounter from "./components/PropsCounter";
import List from "./components/List";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import { CounterContextProvider } from "./context/CounterContext";
import { initialState } from "./context/CounterContext";

import { useCallback, useState, useMemo, useRef } from "react";
import { useEffect } from "react";

interface User {
  id: number;
  username: string;
}

type FibFn = (n: number) => number;

const fib: FibFn = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 13;

function App() {
  const [count, setCount] = useState<number>(1);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log("current: ", inputRef?.current);
  console.log("value: ", inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);

    console.log("Users", users);

    return () => console.log("Unmounting");
  }, []);

  const addTwo =
    useCallback((): // if using events with useCallback, you need to specify the type
    // e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    void => {
      setCount((prev) => prev + 2);
    }, []);

  const result = useMemo(() => fib(myNum), [myNum]);

  return (
    <>
      <CounterContextProvider
        count={initialState.count}
        text={initialState.text}
      >
        <>
          <CounterUseReducer>
            {(num: number) => <>Count useReducer is: {num}</>}
          </CounterUseReducer>
        </>
      </CounterContextProvider>
      <Heading title={"Hello!"} />
      <h1>{result}</h1>
      <input ref={inputRef} type="text" />
      <Section title={"Props Title"}>Anything for the children</Section>
      <PropsCounter setCount={setCount}>PropsCount is {count}</PropsCounter>
      <button onClick={addTwo}>Add two</button>
      <Counter />
      <List
        items={["a", "b", "c"]}
        render={(item) => <span className="gold">{item}</span>}
      />
      <List
        items={users || []}
        render={(user) => <span className="gold">{user.username}</span>}
      />
    </>
  );
}

export default App;
