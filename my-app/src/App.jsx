import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import { lazy } from 'react';


const RegisterPage = lazy(() => import("pages/register.jsx"));
const LoginPage = lazy(() => import("pages/login.jsx"));
const HomePage = lazy(() => import("pages/home.jsx"));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navigation /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="../public/404.html"
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
