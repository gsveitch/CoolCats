const Showcase = ({ currentCat }) => {
    return (
        <div className='showcase'>
            <span>here is the showcase</span>
            <h1>{currentCat?.name}</h1>
        </div>
    )
}

export default Showcase;