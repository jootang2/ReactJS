const root = document.querySelector('#root')
const App = () => {
        let [counter, setCounter] = React.useState(0);
        function countUp() {
            // setCounter(counter + 1)
            setCounter((currentValue) => currentValue + 1);
        }
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={countUp}>Click me</button>
            </div>
        );
        
    }
ReactDOM.render(<App />, root);