import React from 'react'
import "./searchBar.scss"
import { FaSearch } from "react-icons/fa"
const SearchBar = () => {
    return (
        <article className='search-bar'>
            <label htmlFor="searchBar">
                <FaSearch />
            </label>
            <input className='search-bar-box' type="text" name="searchBar" id="searchBar" placeholder='Search restaurants or cuisine...' />
        </article>
    )
}

export default SearchBar