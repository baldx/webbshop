export default function SearchBar () {
    return (
        <>
            <form>
                <label htmlFor="search" className="search-container">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" name="search" id="search" placeholder="Search here"/>
                </label>
            </form>
        </>
    )
}