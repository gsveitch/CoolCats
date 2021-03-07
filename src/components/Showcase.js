const Showcase = ({ currentCat }) => {

  const dateOptions = { month: 'long', timeZone: 'CST', day:'numeric', year:'numeric'};
  let birthday = new Date(currentCat?.birthdate).toLocaleDateString('en-US', dateOptions);
  return (
    <div className='showcase'>
      <div>
        <img
            className={`showcase-img ${currentCat ? '' : 'placeholder'}`}
            src={currentCat ? currentCat.thumbnailURL : 'https://everycat.org/wp-content/themes/everycat-theme/assets/img/placeholder.jpg'}
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
            class="btn btn-info"
            onClick={() => console.log('EDIT')}
          >Edit</button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => console.log('DELETE')}
          >Delete</button>
        </div>
      }
    </div>
  )
}

export default Showcase;