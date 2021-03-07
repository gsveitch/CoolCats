
const CatCard = ({ cat, setCurrentCat, editCat, currentCat }) => {

    const onSelect = () => {
        const newCat = cat;
        newCat.viewCount = newCat.viewCount + 1;
        editCat(newCat)
        setCurrentCat(newCat);
    }

    const placeholderURL = 'https://everycat.org/wp-content/themes/everycat-theme/assets/img/placeholder.jpg';
    const { name, birthdate, thumbnailURL } = cat;

    const dateOptions = { month: 'long', timeZone: 'GMT', day:'numeric', year:'numeric'};
    const birthday = new Date(birthdate).toLocaleDateString('en-US', dateOptions);

    return (
        <div
            className={`cat-card ${currentCat?.id === cat.id ? 'cat-card-selected' : ''}`}
            onClick={currentCat?.id === cat.id ? () => null : onSelect}
        >
            <img
                id={`cat-${cat.id}-thumbnail`}
                className="img-thumbnail"
                src={thumbnailURL}
                alt="thumbnail"
                onError={() => document.getElementById(`cat-${cat.id}-thumbnail`).src = placeholderURL}
            />
            <div className="cat-card-info">
                <span className="cat-card-name">{name}</span>
                <span>{birthday}</span>
            </div>
        </div>
    )
}

export default CatCard;