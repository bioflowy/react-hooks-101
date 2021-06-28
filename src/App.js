import React,{useState } from 'react';

const App = () => {
  const [count, setCount ] = useState(0)
  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)
  const increment2 = () => setCount(count => count+1)
  const decrement2 = () => setCount(count => count-1)
  const multi2 = () => setCount(count => count*2)
  const reset = () => setCount(0)
  const div3 = () => setCount(count => count % 3 === 0 ? count/3:count)
    return (
    <>
    <div >count: {count}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={increment2}>+1</button>
    <button onClick={decrement2}>-1</button>
    <button onClick={reset}>Reset</button>
    <button onClick={multi2}>*2</button>
    <button onClick={div3}>3の倍数の時だけ3で割る</button>
    </>
  );
}

export default App;
