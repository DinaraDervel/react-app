import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>);
}

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News Feed</a>
      <a href="#">Messages</a>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="App">
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}



export default App;
