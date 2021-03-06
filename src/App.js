import React from 'react';
import './App.css';
import initialCats from './initialCats';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      catsCollection: JSON.parse(localStorage.getItem('catsCollection')),
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('catsCollection')) {
      localStorage.setItem('catsCollection', JSON.stringify(initialCats));
      this.setState({ catsCollection: initialCats });
    }
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-text">
              Cool Cats
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
