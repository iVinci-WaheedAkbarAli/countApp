import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [counterValue, setCountValue] = useState<number>(0);

  const decrementCount = () => {
    setCountValue(counterValue - 1);
  };
  const incrementCount = () => {
    setCountValue((counterValue) => counterValue + 1);
  };

  return (
    <>
      <Counter
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        counterValue={counterValue}
      />
    </>
  );
};
export default App;
