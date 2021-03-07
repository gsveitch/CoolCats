import { useState, useEffect } from 'react';

const EditCatModal = ({ currentCat, setCurrentCat, editCat }) => {

  const [newThumbnailURL, setNewThumbnailURL] = useState('');
  const [newName, setNewName] = useState('');
  const [newBirthdate, setNewBirthdate] = useState('');
  const [newOwner, setNewOwner] = useState('');

  // listens for changes to current cat to set input fields
  useEffect(() => {
    setNewThumbnailURL(currentCat ? currentCat.thumbnailURL : '');
    setNewName(currentCat ? currentCat.name : '');
    setNewBirthdate(currentCat ? currentCat.birthdate : '');
    setNewOwner(currentCat ? currentCat.ownerName : '');
  },[currentCat]);

  const saveChanges = () => {
    const newCat = {
      ...currentCat,
      thumbnailURL: newThumbnailURL,
      name: newName,
      birthdate: newBirthdate,
      ownerName: newOwner,
    }
    editCat(newCat);
    setCurrentCat(newCat);
  }

  return (
    <div
      className="modal fade"
      id="editCatModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Edit Cat</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form id="editCatForm">
              <div className="mb-3">
                <label htmlFor="thumbnailURL" className="col-form-label">Thumbnail URL:</label>
                <input
                  type="text"
                  className="form-control"
                  id="thumbnailURL"
                  value={newThumbnailURL}
                  onChange={(e) => setNewThumbnailURL(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="col-form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthdate" className="col-form-label">Birth date:</label>
                <input
                  type="text"
                  className="form-control"
                  id="birthdate"
                  value={newBirthdate}
                  onChange={(e) => setNewBirthdate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="owner" className="col-form-label">Owner:</label>
                <input
                  type="text"
                  className="form-control"
                  id="owner"
                  value={newOwner}
                  onChange={(e) => setNewOwner(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={saveChanges}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCatModal;