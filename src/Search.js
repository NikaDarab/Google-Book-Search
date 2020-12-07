import React from 'react'

const Search = (props) =>{
        return (
            <div className='search-area'>
            <form onSubmit={props.handleSubmit}>
                <input type='text'onChange={props.handleSearch} placeholder="Search for books"></input>
            
            <button>
                Search
            </button> 

            <select defaultValue='Sort' onChange={props.handleFilter}>
                <option disabled value="Sort">Sort</option>
                <option value="partial">partial</option>
                <option value = "full">full</option>
                <option value = "free-ebooks">free-ebooks</option>
                <option value = "paid-ebooks">paid-ebooks</option>
                <option value = "paid-ebooks">ebooks</option>
            </select>
            </form>
            </div>
        )
}

export default Search;