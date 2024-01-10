
import styles from './App.module.css'
import Button from './Button';
function App() {
  return (
    <div>
      <button className={styles.btn}>Hello world</button>
      <Button text={'start react'}/>
    </div>
  );
}

export default App;
