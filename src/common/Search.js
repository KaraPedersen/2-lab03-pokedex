import { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
  state = {
    search: '',
    type: '',
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleTypeChange = ({ target }) => {
    this.setState({ type: target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { search, type } = this.state;
    
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        
        <input 
          name="search" 
          value={search}
          onChange={this.handleSearchChange}
        />
        <select name="filter-type" value={type} onChange={this.handleTypeChange}>
          <option value="">All</option>
          <option value="grass">Grass</option>
          <option value="bug">Bug</option>
          <option value="poison">Poison</option>
          <option value="monster">Monster</option>
          <option value="psychic">Psychic</option>
        </select>


        <button>Search</button>
      
      </form>
    );
  }

}