import { useEffect, useState } from 'react';
import './App.css';
import initialCats from './initialCats';
import Column from './components/Column';
import Showcase from './components/Showcase';
import DeleteAlert from './components/DeleteAlert';
import EditCatModal from './components/EditCatModal';

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

  const editCat = (newCat) => {
    const catIndex = catsCollection.findIndex((cat) => cat.id === newCat.id);
    let newCatsCollection = [...catsCollection];
    newCatsCollection[catIndex] = newCat;
    setCatsCollection(newCatsCollection);
  }

  const deleteCat = (deletedCat) => {
    setCurrentCat(null);
    let newCatsCollection = catsCollection.filter((cat) => cat.id !== deletedCat.id);
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
          editCat={editCat}
          currentCat={currentCat}
        />
        <Showcase 
          currentCat={currentCat}
        />
      </div>
      <EditCatModal 
        currentCat={currentCat}
        setCurrentCat={setCurrentCat}
        editCat={editCat}
      />
      <DeleteAlert 
        currentCat={currentCat}
        deleteCat={deleteCat}
      />
    </div>
  );
}

export default App; 
