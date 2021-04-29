import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VillagerItem.scss';

class VillagerItem extends Component {
  
  render() { 
    const { villager } = this.props;

    return (
      <li className="VillagerItem">
        <Link to={`/villagers/${villager._id}`}>
          <h2>{villager.name}</h2>
          <p className="japanese-name">{villager.japaneseName}</p>

          <p className="speech-bubble">{villager.phrase}</p>
          
          <img 
            src={villager.image}
            alt={villager.name}
          />
        </Link>
      </li>
    );
  }

}
 
export default VillagerItem;