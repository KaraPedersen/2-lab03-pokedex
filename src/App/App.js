import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonPage from '../Pokemon/PokemonPage';
import './App.scss';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <PokemonPage/>
        <Footer/>
      </div>
    );
  }

}

export default App;
