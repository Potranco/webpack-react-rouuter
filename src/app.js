import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const isActivefunc = (match, location) => {
  return match;
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
    <NavLink to="/page/hola">Page</NavLink>
    <NavLink to="/page">Page not</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/page/:page" render={(route) => {
          const {match} = route;
          return <h1>PAGE { match.params.page || 'page base' }</h1>
          }
        } />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default App;
