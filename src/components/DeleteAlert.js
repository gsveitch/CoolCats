
const DeleteAlert = ({ currentCat, deleteCat }) => {

  return (
    <div>
      <div
        className="modal fade"
        id="deleteAlert"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Delete Cat</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                />
            </div>
            <div className="modal-body">
              Are you sure you want to remove {currentCat?.name} from the Cool Cats list?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteCat(currentCat)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAlert;