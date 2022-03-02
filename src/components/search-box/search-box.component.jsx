import React from "react";
import './search-box.styles.css'
export const SearchBox = ({placeholder, handleChange }) =>{ 
    return(
    <input type='search' 
    className="search"
    placeholder={placeholder}  
    //adding an arrow function after the setstate performs an action after the setstate is complete
    onChange={handleChange} 
/>)
}