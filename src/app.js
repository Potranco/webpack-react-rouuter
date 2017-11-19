import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const Home = () => <h1>home</h1>;
    return (
        <Router>
          <Route path="/" component={Home} />
        </Router>
    );
  }
}

export default App;
