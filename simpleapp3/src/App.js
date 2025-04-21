import logo from './logo.svg';
import './App.css';
import TestUseEffect from './Components/TestUseEffect';
import GetAPI from './Components/GetAPI';


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
        <div><TestUseEffect/></div>
        <div><GetAPI/></div>
      </header>
    </div>
  );
}

export default App;
