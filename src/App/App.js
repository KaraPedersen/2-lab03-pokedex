import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route
            path="/"
            exact={true}
            component={}
            />

            <Route 
            path="//:id"
            exact={true}
            component={}
            />

            <Redirect to="/" />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
