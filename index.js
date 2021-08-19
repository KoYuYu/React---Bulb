import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Bulbs() {
  const [on, setOn] = useState(false);

  const turnOn = () => setOn(true);
  const turnOff = () => setOn(false);

  return (
    <div>
      <div className={!on ? "bulb-off" : "bulb-on"} />
      <button onClick={turnOn}>On</button>
      <button onClick={turnOff}>Off</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Bulbs />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
