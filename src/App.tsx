import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const change1 = () => {
    setCount(count - 1);
  };
  const change2 = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Counter change1={change1} change2={change2} count={count} />
    </>
  );
};
export default App;
