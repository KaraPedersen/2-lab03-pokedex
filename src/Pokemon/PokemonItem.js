import React, { Component } from 'react';
import './PokemonItem.scss';

class PokemonItem extends Component {
  
  render() { 
    const { pokemon } = this.props;

    return (
      <li className="PokemonItem">
        <h2>{pokemon.pokemon}</h2>
       
        
        <img 
          src={pokemon.url_image}
          alt={pokemon.pokemon}
        />
        <p>
          Type {pokemon.type_1}
        </p>
      </li>
    );
  }

}
 
export default PokemonItem;
