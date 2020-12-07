import React from 'react'

const Search = (props) =>{
        return (
            <div className='search-area'>
            <form onSubmit={props.handleSubmit}>
                <input type='text'onChange={props.handleSearch} placeholder="Search for books"></input>
            
            <button>
                Search
            </button> 

            <select>
                <option value="sort">all</option>
                <option value="free">Free</option>
                <option value = "paid">Paid</option>
            </select>
            </form>
            </div>
        )
}

export default Search;