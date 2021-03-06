const CatCard = ({ cat, setCurrentCat }) => {
    return (
        <div
            className='card'
            onClick={setCurrentCat}
        >
            <span>this cat's name is {cat.name}</span>
        </div>
    )
}

export default CatCard;