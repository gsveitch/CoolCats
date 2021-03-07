const CatCard = ({ cat, setCurrentCat, incrementViewCount, currentCat }) => {

    const onSelect = () => {
        const newCat = cat;
        newCat.viewCount = newCat.viewCount + 1;
        incrementViewCount(newCat)
        setCurrentCat(newCat);
    }

    const { name, birthdate, thumbnailURL } = cat;
    const dateOptions = { month: 'long', timeZone: 'CST', day:'numeric', year:'numeric'};
    const birthday = new Date(birthdate).toLocaleDateString('en-US', dateOptions);

    return (
        <div
            className={`cat-card ${currentCat?.id === cat. id ? 'cat-card-selected' : ''}`}
            onClick={currentCat?.id === cat. id ? () => null : onSelect}
        >
            <img className="img-thumbnail" src={thumbnailURL}/>
            <div className="cat-card-info">
                <span className="cat-card-name">{name}</span>
                <span>{birthday}</span>
            </div>
        </div>
    )
}

export default CatCard;