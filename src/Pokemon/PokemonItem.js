import React, { Component } from 'react';
import './PokemonItem.scss';

class PokemonItem extends Component {
  
  render() { 
    const { pokemon } = this.props;

    return (
      <li className="PokemonItem">
        <h2>{pokemon.pokemon}</h2>
        {/* <p className="japanese-name">{villager.japaneseName}</p>

        <p className="speech-bubble">{villager.phrase}</p> */}
        
        <img 
          src={pokemon.url_image}
          alt={pokemon.pokemon}
        />

      </li>
    );
  }

}
 
export default PokemonItem;