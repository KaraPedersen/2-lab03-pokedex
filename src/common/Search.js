import { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
  state = {
    search: '',
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props;
    if (search !== prevProps.search) {
      this.setState({ search: search });
    }
  }

  componentDidMount() {
    const { search } = this.props;
    this.setState({ search: search });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { search } = this.state;
    
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        
        <input 
          name="search" 
          value={search}
          onChange={this.handleSearchChange}
        />

        <button>🔎</button>
      
      </form>
    );
  }

}