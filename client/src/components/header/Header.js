import React from 'react'
import "./header.scss"
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineChevronDown } from "react-icons/hi"
import SearchBar from '../searchbar/SearchBar';

const Header = () => {
    return (
        <div className='header-container flexBox jcspb'>
            <section className="section-left flexBox">
                <span className='logo'>Logo</span>
                <div className="location flexBox">
                    <span className='icon'><IoLocationSharp /></span>
                    <span className='location-text'>Get current location</span>
                    <span className='icon'><HiOutlineChevronDown /></span>
                </div>
                <div className="seachbar-container">
                    <SearchBar />
                </div>
            </section>
            <section className="section-right">
                <button className='btn'>Log In</button>
            </section>
        </div>
    )
}

export default Header