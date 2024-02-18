import logo from './logo.svg';
import './App.css';
import PlotComponent from "./components/DataComponents/DataComponents";
import {useEffect, useState} from "react";
function App() {
  const [plotDiv, setPlotDiv] = useState('');

  useEffect(() => {
    fetch('/api/data')
        .then(response => response.text())
        .then(data => setPlotDiv(data));
  }, []);
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
            <p>
                <PlotComponent plotDiv={plotDiv}/>
            </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
