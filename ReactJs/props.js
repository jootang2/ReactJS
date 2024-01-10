const root = document.querySelector("#root");
const Btn = ({test, test2}) => {
  return (
    <div>
      <button>{test}</button>
      <button>{test2}</button>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Btn test = 'This is Test' test2 = 'This is Test2'/>
    </div>
  );
};
ReactDOM.render(<App />, root);
