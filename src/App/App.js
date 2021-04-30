import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.scss';
import PokemonList from '../Pokemon/PokemonList';
import request from 'superagent';

class App extends Component {
state={
  pokemon: []
}
componentDidMount = async () => {
  const response = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  this.setState({ pokemon: response.body.results });
}
render() {
  const { pokemon } = this.state;
  return (
    <div className="App">
      <Header/>
      <PokemonList pokemon={pokemon}/>
      <Footer/>
        
    </div>
  );
}
}

export default App;
