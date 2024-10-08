import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={incrementHandler}>Increase</button>
    </div>
  );
}

export default App;
