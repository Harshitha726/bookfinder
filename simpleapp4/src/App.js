import logo from './logo.svg';
import './App.css';
import TestUseReducer from './Components/TestUseReducer';
import UseReducerApp1 from './Components/UseReducerApp1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <div><TestUseReducer/></div>
        <div><UseReducerApp1/></div>
      </header>
    </div>
  );
}

export default App;
