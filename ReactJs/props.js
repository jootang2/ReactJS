const root = document.querySelector("#root");
const Btn = ({test}) => {
  return (
    <button>{test}</button>
  )
}
const App = () => {
  return (
    <div>
      <Btn test = 'This is Test'/>
    </div>
  );
};
ReactDOM.render(<App />, root);
