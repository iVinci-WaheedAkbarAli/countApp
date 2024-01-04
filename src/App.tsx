import { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [counterValue, setCountValue] = useState<number>(0);

  const decreaseCount = () => {
    setCountValue(counterValue - 1);
  };
  const increaseCount = () => {
    setCountValue((counterValue) => counterValue + 1);
  };

  return (
    <>
      <Counter
        decreaseCount={decreaseCount}
        increaseCount={increaseCount}
        counterValue={counterValue}
      />
    </>
  );
};
export default App;
