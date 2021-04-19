import logo from './logo.svg';
import './App.css';
import { count, length } from './numbers.js';

const name = 'Alexandr';
const age = 34;
const human = true;
const flag = false;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'red'
        }}>
          Имя {name}, возраст {age}, {human && 'человек'}
        </p>
        <p style={{
          fontSize: 16+2,
          color: 'green'
        }}>
          2 + 2 = {2 + 2}
        </p>
        <p>
          {flag ? 'Flag is true' : 'Flag is false'}
          {undefined}
          {null}
          {true}
          {false}
        </p>
        <p style={{
          border: '3px solid red',
          padding: '0 10px',
        }}>
          count * length = { count * length }
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
