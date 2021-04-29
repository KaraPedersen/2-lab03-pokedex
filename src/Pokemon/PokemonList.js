import React, { Component } from 'react';
import VillagerItem from './VillagerItem';
import './VillagerList.scss';


class VillagerList extends Component {
  
  render() { 
    const { villagers } = this.props;

    return (
      <ul className="VillagerList">
        {villagers.map(villager => (
          <VillagerItem key={villager._id} villager={villager}/>
        ))}
      </ul>
    );
  }

}
 
export default VillagerList;