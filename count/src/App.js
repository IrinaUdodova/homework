import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }
    const less = () => {
        setCount(count - 1)
    }
    const zero = () => {
        setCount(0)
    }

  return (
    <div className="App">
   <p>Счетчик: {count}</p>
   <button onClick={add}>+</button>
   <button onClick={less}>-</button>
   <button onClick={zero}>0</button>
    </div>
  );

}
export default App;
