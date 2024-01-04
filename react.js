const root = document.querySelector('#root')
// let counter = 0;

// function render() {
//     ReactDOM.render(<App />, root);
// }
const App = () => {
        let [counter, setCounter] = React.useState(0);
        function countUp() {
            counter ++
            setCounter(counter)
        }
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={countUp}>Click me</button>
            </div>
        );
        
    }
ReactDOM.render(<App />, root);