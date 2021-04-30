import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.scss';


class PokemonList extends Component {
  
  render() { 
    const { pokemon } = this.props;

    return (
      <ul className="PokemonList">
        {pokemon.map(pokemons => (
          <PokemonItem key={pokemon._id} pokemon={pokemon}/>
        ))}
      </ul>
    );
  }

}
 
export default PokemonList;