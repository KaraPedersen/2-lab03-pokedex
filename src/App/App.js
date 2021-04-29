import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Paging from '../Paging';
// import VillagerList from '../villagers/VillagerList';
import Search from '../Search';
// import request from 'superagent';
import './App.scss';

// const VILLAGERS_API_URL = 'https://ac-vill.herokuapp.com/villagers';


class App extends Component {
  state = {
    villagers: null,
    loading: false,
    search: '',
    page: 1
  }

  componentDidMount() {
    this.fetchVillagers();
  }

  async fetchVillagers() {
    const { search, page } = this.state;

    this.setState({ loading: true });

    try {
      const response = await request
        .get(VILLAGERS_API_URL)
        .query({ name: search })
        .query({ page: page });
  
      this.setState({ villagers: response.body });
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = ({ search }) => {
    this.setState(
      { search: search, page: 1 },
      () => this.fetchVillagers()
    );
  }

  handlePrevPage = () => {
    this.setState(
      { page: Math.max(this.state.page - 1, 1) },
      () => this.fetchVillagers() 
    );
    
  }
  
  handleNextPage = () => {
    this.setState(
      { page: this.state.page + 1 },
      () => this.fetchVillagers()
    );
  }

  render() {
    const { villagers, loading, page } = this.state;

    return (
      <div className="App">
  
        <Header/>
        
        <section className="search-options">
          <Search onSearch={this.handleSearch}/>
          <Paging 
            page={page} 
            onPrev={this.handlePrevPage} 
            onNext={this.handleNextPage}
          />
        </section>
        
        <main>
          {villagers && (villagers.length
            ? <VillagerList villagers={villagers}/>
            : <p>Sorry no villagers :(</p>)
          }

          {loading && <img className="loading" src="loading.gif" alt="loading"/>}

        </main>
      
        <Footer/>

      </div>
    );
  }

}

export default App;
