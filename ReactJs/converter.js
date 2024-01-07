const root = document.querySelector("#root");
const App = () => {
  const [minutes, setMinutes] = React.useState(0);
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const reset = () => {
    setMinutes(0);
  };
  return (
    <div>
      <h1>My Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          onChange={onChange}
          id="minutes"
          placeholder="Munites"
          type="number"
        ></input>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          disabled
          value={Math.round(minutes / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
        ></input>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
ReactDOM.render(<App />, root);
