import CatCard from './CatCard';

const Column = ({ cats, setCurrentCat }) => {
    return (
        <div className='column'>
            <span>here is the column</span>
            {cats.map((cat) => (
                <CatCard
                    cat={cat}
                    setCurrentCat={() => setCurrentCat(cat)}
                />
            ))}
        </div>
    )
}

export default Column;