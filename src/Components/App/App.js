import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home";
import Nav from '../Nav/Nav';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/">
        <Home />
        <About />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
    </Router>
  );
}

export default App;
