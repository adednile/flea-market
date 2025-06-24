import React from "react";

function SearchBar({searchTerm, setSearchTerm}){
    return(
        <div style={{ textAlign: "center", margin: "1rem 0"}}>
            <input
                type="text"
                placeholder="Search Products.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    padding: "0.5rem 1rem",
                    width: "300px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "16px"

                }}
                />
        </div>
    );
}

export default SearchBar;