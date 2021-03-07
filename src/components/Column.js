import { useState } from 'react';
import CatCard from './CatCard';
import Search from './Search';

const Column = ({ cats, setCurrentCat, editCat, currentCat }) => {
    const [searchString, setSearchString] = useState('');

    return (
        <div className='column'>
            <Search 
                searchString={searchString}
                setSearchString={setSearchString}
            />
            {cats.map((cat) => cat.name.toLowerCase().includes(searchString.toLowerCase()) ?
                (
                    <CatCard
                        key={cat.id}
                        cat={cat}
                        setCurrentCat={setCurrentCat}
                        editCat={editCat}
                        currentCat={currentCat}
                    />
                )
                : null
            )}
        </div>
    )
}

export default Column;