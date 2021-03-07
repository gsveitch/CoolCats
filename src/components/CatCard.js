
const CatCard = ({ cat, setCurrentCat, editCat, currentCat }) => {

    const onSelect = () => {
        const newCat = cat;
        newCat.viewCount = newCat.viewCount + 1;
        editCat(newCat)
        setCurrentCat(newCat);
    }

    const { name, birthdate, thumbnailURL } = cat;
    const dateOptions = { month: 'long', timeZone: 'GMT', day:'numeric', year:'numeric'};
    const birthday = new Date(birthdate).toLocaleDateString('en-US', dateOptions);

    return (
        <div
            className={`cat-card ${currentCat?.id === cat.id ? 'cat-card-selected' : ''}`}
            onClick={currentCat?.id === cat.id ? () => null : onSelect}
        >
            <img className="img-thumbnail" src={thumbnailURL} alt="thumbnail"/>
            <div className="cat-card-info">
                <span className="cat-card-name">{name}</span>
                <span>{birthday}</span>
            </div>
        </div>
    )
}

export default CatCard;