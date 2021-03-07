
const Search = ({ searchString, setSearchString }) => {
    return (
        <div className='search-card'>
            <div className="input-group rounded">
                <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </div>
        </div>
    )
};

export default Search;