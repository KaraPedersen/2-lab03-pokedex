import { Component } from 'react';
import './Loading.scss';

export default class Loading extends Component {
  
  render() {
    const { loading } = this.props;

    if (!loading) return null;
    
    return (
      <img className="Loading" src="/loading.gif" alt="loading"/>
    );
  }

}