import CatCard from './CatCard';

const Column = ({ cats, setCurrentCat, incrementViewCount, currentCat }) => {
    return (
        <div className='column'>
            <span>here is the column</span>
            {cats.map((cat) => (
                <CatCard
                    key={cat.id}
                    cat={cat}
                    setCurrentCat={setCurrentCat}
                    incrementViewCount={incrementViewCount}
                    currentCat={currentCat}
                />
            ))}
        </div>
    )
}

export default Column;