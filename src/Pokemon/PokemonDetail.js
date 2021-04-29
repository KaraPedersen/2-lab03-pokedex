import { Component } from 'react';
import './VillagerDetail.scss';

export default class VillagerDetail extends Component {
  
  render() {
    const { villager } = this.props;

    return (
      <article className="VillagerDetail">
        <pre>
          {JSON.stringify(villager, true, 2)}
        </pre>
      </article>
    );
  }

}