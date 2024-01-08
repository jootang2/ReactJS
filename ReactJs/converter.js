const root = document.querySelector("#root");
const MinutesToHours = () => {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onInvert = () => {
    setInverted((current) => !current);
    reset();
  }
    return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          onChange={onChange}
          id="minutes"
          placeholder="Munites"
          type="number"
          disabled = {inverted}
        ></input>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          disabled = {!inverted}
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
        ></input>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? 'Turn back' : 'Invert'}</button>
    </div>
  );
};
const KmToMiles = () => {
  const [input, setInput] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChangeInput = (event) => {
    setInput(event.target.value);
  }
  const reset = () => {
    setInput(0);
  }
  const invert = () => {
    setInverted((lastValue) => !lastValue)
    console.log(invert)
    reset();
  }
  return (
    <div>
      <h3>KM 2 M</h3>
      <div>
        <label htmlFor='km'>KM</label>
        <input 
          id='km'
          placeholder = 'km'
          type = 'number'
          value = {inverted ? input * 0.621371 : input}
          onChange = {onChangeInput}
          disabled = {inverted}
          ></input>
      </div>
      <label htmlFor='mile'>MILE</label>
      <input 
        id = 'mile'
        placeholder = 'mile'
        type = 'number'
        value = {inverted ? input : input * 1.60934}
        onChange = {onChangeInput}
        disabled = {!inverted}
        ></input>
        <div>
          <button onClick={reset}>Reset</button>
          <button onClick={invert}>{inverted ? 'Invert' : 'Turn back'}</button>
        </div>
    </div>
  )
}
const App = () => {
  const [index, setIndex] = React.useState('1');
  const onSelect = (event) => {
    setIndex(event.target.value);
  }
    return (
    <div>
      <h1>My Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value = '0'>Minutes & Hours</option>
        <option value = '1'>KM & Miles</option>
      </select>
      <hr/>
      {index === '0' ? <MinutesToHours/> : null}
      {index === '1' ? <KmToMiles/> : null}
    </div>
  );
};
ReactDOM.render(<App />, root);
