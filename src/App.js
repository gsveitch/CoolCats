import { useEffect, useState } from 'react';
import Column from './components/Column';
import Showcase from './components/Showcase';
import './App.css';
import initialCats from './initialCats';

function App() {
  const [catsCollection, setCatsCollection] = useState(JSON.parse(localStorage.getItem('catsCollection')));
  const [currentCat, setCurrentCat] = useState(null);

  // on initial render, checks if catsCollection already exists in localStorage
  // if not, or if all cats deleted, then initializes localStorage and state with og cats array from file
  useEffect(() => {
    const localCats = JSON.parse(localStorage.getItem('catsCollection'));
    if (!localCats || !localCats.length) {
      localStorage.setItem('catsCollection', JSON.stringify(initialCats));
      setCatsCollection(initialCats);
    }
  }, []);

  // listens for changes on the catsCollection state and updates localStorage
  useEffect(() => {
    localStorage.setItem('catsCollection', JSON.stringify(catsCollection));
  }, [catsCollection]);

  const incrementViewCount = (newCat) => {
    const catIndex = catsCollection.findIndex((cat) => cat.id === newCat.id);
    let newCatsCollection = catsCollection;
    newCatsCollection[catIndex] = newCat;
    setCatsCollection(newCatsCollection);
  }

  return (
    <div className="app">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-text">
            Cool Cats
          </span>
        </div>
      </nav>
      <div className="main">
        <Column 
          cats={catsCollection}
          setCurrentCat={setCurrentCat}
          incrementViewCount={incrementViewCount}
          currentCat={currentCat}
        />
        <Showcase 
          currentCat={currentCat}
        />
      </div>
      {/* modal */}
    </div>
  );
}

export default App; 
