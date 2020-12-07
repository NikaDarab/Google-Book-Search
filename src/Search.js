import React from 'react'

export default function Search () {
        return (
            <>
            <div>
                <input placeholder="Search for books"></input>
            </div>
            <button>
                Search
            </button> 

            <select>
                <option value="sort">all</option>
                <option value="free">Free</option>
                <option value = "paid">Paid</option>
            </select>
            </>
        )
}
