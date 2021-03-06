import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import './App.css';
import initialCats from './initialCats';

function App() {
  const [catsCollection, setCatsCollection] = useState(JSON.parse(localStorage.getItem('catsCollection')));

  // on initial render, checks if catsCollection already exists in localStorage
  // if not, then initializes localStorage and state with og cats array from file
  useEffect(() => {
    if (!localStorage.getItem('catsCollection')) {
      localStorage.setItem('catsCollection', JSON.stringify(initialCats));
      setCatsCollection(initialCats);
    }
  }, []);

  // listens for changes on the catsCollection state and updates localStorage
  useEffect(() => {
    localStorage.setItem('catsCollection', JSON.stringify(catsCollection));
  }, [catsCollection]);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-text">
            Cool Cats
          </span>
        </div>
      </nav>
    </div>
  );
}

export default App;
