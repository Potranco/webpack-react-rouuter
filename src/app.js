import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const isActivefunc = (match, location) => {
  console.log(match, location);
  return false;
};

const Links = () => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink
      activeStyle={{color: 'green'}}
      to="/about">About</NavLink>
    <NavLink
      isActive={isActivefunc}
      to="/contact">Contact</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
