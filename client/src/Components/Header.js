import React, {useState} from 'react'
import Logo from "../img/logo9.png";
import {Link} from "react-router-dom";
const Header = ({search, setSearch}) => {
    

    const handleClick = () => {
        var searchBar = document.getElementById("search-bar");

        searchBar.style.display = "inline-block";
    }
    return (
        <>
            <header>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <h1>
                    Natural Movies
                </h1>
                <i class="fas fa-search" onClick={handleClick}>
                    <input placeholder="search..." 
                    id="search-bar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                     />
                </i>
            </header>
        </>
    )
}

export default Header
