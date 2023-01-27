import { useContext } from 'react';
import './App.css';
import { CounterContext } from './Contexts/Counter';

function App() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => count > 0 ? setCount(count - 1) : count}>-</button>
    </div>
  );
}

export default App;
