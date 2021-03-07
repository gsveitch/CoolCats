
const Showcase = ({ currentCat }) => {

  const placeholderURL = 'https://everycat.org/wp-content/themes/everycat-theme/assets/img/placeholder.jpg';
  
  const dateOptions = { month: 'long', day:'numeric', year:'numeric'};
  let birthday = new Date(currentCat?.birthdate).toLocaleDateString('en-US', dateOptions);
  
  return (
    <div className='showcase'>
      <div>
        <img
          id='cat-showcase-img'
          className={`showcase-img ${currentCat ? '' : 'placeholder'}`}
          src={currentCat ? currentCat.thumbnailURL : placeholderURL}
          alt="cat"
          onError={() => document.getElementById('cat-showcase-img').src = placeholderURL}
        />
        {currentCat &&
          <div className="showcase-info">
            <h1>{currentCat?.name}</h1>
            <span>{birthday}</span>
            <span>{currentCat.ownerName}</span>
            <span>{`Number of views: ${currentCat.viewCount}`}</span>
          </div>
        }
      </div>
      {currentCat &&
        <div className="showcase-buttons">
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#editCatModal"
          >Edit</button>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#deleteAlert"
          >Delete</button>
        </div>
      }
    </div>
  )
}

export default Showcase;