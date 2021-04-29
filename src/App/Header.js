import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {

  render() { 
    return (
      <header className="Header">
        
        <img 
          className="logo" 
          alt="cherry blossom tree logo" 
          src="/cherry-blossom-tree.png"
        />

        <h1>AXing Villagers</h1>

        <nav>
          <NavLink to={{ pathname: '/' }}>Search Villagers</NavLink>
        </nav>
        
      </header>
    );
  }

}
 
export default Header;