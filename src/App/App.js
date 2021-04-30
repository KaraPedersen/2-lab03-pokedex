import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.scss';
import PokemonList from '../Pokemon/PokemonList';
import request from 'superagent';
import Search from './Search';
import Paging from './Paging';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
state={
  pokemon: null,
  loading: false,
  search: '',
  page: 1
}

componentDidMount() {
  this.fetchPokemon();
}

async fetchPokemon() {
  const { search, page } = this.state;

  this.setState({ loading: true });

  try {
    const response = await request
      .get(POKEMON_API_URL)
      .query({ name: search })
      .query({ page: page });

    this.setState({ pokemon: response.body });
  }
  catch (err) {
    console.log(err);
  }
  finally {
    this.setState({ loading: false });
  }
}
handleSearch = ({ search }) => {
  this.setState(
    { search: search, page: 1 },
    () => this.fetchPokemon()
  );
}

handlePrevPage = () => {
  this.setState(
    { page: Math.max(this.state.page - 1, 1) },
    () => this.fetchPokemon() 
  );
  
}

handleNextPage = () => {
  this.setState(
    { page: this.state.page + 1 },
    () => this.fetchPokemon()
  );
}

render() {
  const { pokemon, loading, page } = this.state;
  return (
    <div className="App">

      <Header/>
      
      <section className="search-options">
        <Search onSearch={this.handleSearch}/>
        <Paging 
          page={page} 
          onPrev={this.handlePrevPage} 
          onNext={this.handleNextPage}
        />
      </section>
      
      <main>
        {pokemon && (pokemon.length
          ? <PokemonList pokemon={pokemon}/>
          : <p>Sorry no pokemons :(</p>)
        }

        {loading && <img className="loading" src="loading.gif" alt="loading"/>}

      </main>
    
      <Footer/>

    </div>
  );
}

}

export default App;
