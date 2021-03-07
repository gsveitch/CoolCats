const CatCard = ({ cat, setCurrentCat, incrementViewCount, currentCat }) => {

    const onSelect = () => {
        const newCat = cat;
        newCat.viewCount = newCat.viewCount + 1;
        incrementViewCount(newCat)
        setCurrentCat(newCat);
    }

    const { name, birthdate } = cat;
    const dateOptions = { month: 'long', timeZone: 'CST', day:'numeric', year:'numeric'};
    const birthday = new Date(birthdate).toLocaleDateString('en-US', dateOptions);

    return (
        <div
            className={`card ${currentCat?.id === cat. id ? 'card-selected' : ''}`}
            onClick={currentCat?.id === cat. id ? () => null : onSelect}
        >
            <img className="img-thumbnail" src={cat.thumbnailURL}/>
            <div className="card-info">
                <span className="card-name">{name}</span>
                <span>{birthday}</span>
            </div>
        </div>
    )
}

export default CatCard;