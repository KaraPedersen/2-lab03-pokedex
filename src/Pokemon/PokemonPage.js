import { Component } from 'react';
import PokemonList from './PokemonList';
import Paging from '../common/Paging';
import Search from '../common/Search';
import Loading from '../common/Loading';
import request from 'superagent';
import './PokemonPage.scss';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

export default class PokemonPage extends Component {
  state = {
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

  changePage(diff) {
    this.setState(
      { page: Math.max(this.state.page + diff, 1) },
      () => this.fetchPokemon() 
    );
  }

  handleSearch = ({ search }) => {
    this.setState(
      { search: search, page: 1 },
      () => this.fetchPokemon()
    );
  }

  handlePrevPage = () => {
    this.changePage(-1);
  }
  
  handleNextPage = () => {
    this.changePage(1);
  }

  render() {
    const { pokemon, loading, page } = this.state;

    return (
      <div className="PokemonPage">
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
            ? <PokemonList villagers={pokemon}/>
            : <p>Sorry no pokemon :(</p>)
          }

          <Loading loading={loading}/>

        </main>
      </div>
    );
  }

}