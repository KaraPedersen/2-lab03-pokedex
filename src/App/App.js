
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import VillagerSearchPage from '../villagers/VillagerSearchPage';
import './App.scss';
import VillagerPage from '../villagers/VillagerPage';

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
              component={VillagerSearchPage}
            />

            <Route
              path="/villagers/:id"
              exact={true}
              component={VillagerPage}
            />

            <Redirect to="/" />

          </Switch>
        
          <Footer />
        
        </Router>
      </div>
    );
  }

}

export default App;
