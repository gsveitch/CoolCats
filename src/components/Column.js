import CatCard from './CatCard';

const Column = ({ cats, setCurrentCat, editCat, currentCat }) => {
    return (
        <div className='column'>
            <span>here is the column</span>
            {cats.map((cat) => (
                <CatCard
                    key={cat.id}
                    cat={cat}
                    setCurrentCat={setCurrentCat}
                    editCat={editCat}
                    currentCat={currentCat}
                />
            ))}
        </div>
    )
}

export default Column;