/**
 * SearchBar component for filtering products by search term.
 *
 * @component
 * @param {Object} props
 * @param {string} props.searchTerm - The current search input value.
 * @param {Function} props.setSearchTerm - Function to update the search term.
 * @returns {JSX.Element} The rendered search bar.
 */
import React from "react";
import "../styles/SearchBar.css";

function SearchBar({searchTerm, setSearchTerm}){
    return(
        <div className="search-bar">
      <input
        type="text"
        placeholder="Search Products.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    );
}

export default SearchBar;