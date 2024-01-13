
import { useEffect, useState } from 'react';
import styles from './App.module.css'
import Button from './Button';
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = (() => {
    setCounter((prev) => prev + 1)
  })
  useEffect(() => {console.log('this is useEffect')}, [])
  return (
    <div>
      <div>{counter}</div>
      <button onClick={onClick} className={styles.btn}>Hello world</button>
      <Button text={'counter'}/>
    </div>
  );
}

export default App;
