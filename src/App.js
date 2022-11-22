import logo from './logo.svg';
import './App.css';
// import aboutme from './aboutme';

//jsx allows us to inject HTML into our Javascript files
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Everyone! My name is Mack Nelson and Welcome to my Portfolio page. I'm a developer who has a passion for building creative apps and bringing ideas to life. I enjoy reading, watching anime, playing sports, and spending time with people who mean the most to me. Enough about me I hope you enjoy your stop at my portfolio. 
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
