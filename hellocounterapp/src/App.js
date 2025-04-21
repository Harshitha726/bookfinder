import logo from './logo.svg';
import './App.css';


import Counter from './Component/Counter';
import TestComponent from './Component/TestComponent';
import TestUseState from './Component/TestUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

       <div><TestUseState/></div>
        {/* Accessing Counter component in App.js */}
        <div><Counter /></div>
        <div><TestComponent username="Harshitha" password="React@123" /></div>
        </header>
    </div>
  );
}


export default App;
