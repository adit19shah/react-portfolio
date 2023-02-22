//import logo from './logo.svg';
import './App.css';
import BasicInfo from './components/BasicInfo/BasicInfo';
import Contactme from './components/Contactme/Contactme';
import About from './components/About/About';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
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
      </header>*/}
      <BasicInfo/>
      <Contactme/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
