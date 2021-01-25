import React from "react";

export const Search = () => (
    <form action="/search" method="get" className="form" role="search">
        <div className="group search">
            <div className="search-input">
                <label htmlFor="cludo-search-hero-form">
                    Search essex.gov.uk
                    <input
                        type="text"
                        id="cludo-search-hero-form"
                        name="search"
                        placeholder="Search essex.gov.uk"
                        autoComplete="off"
                    />
                </label>
                <button
                    className="fas fa-search search-icon-position"
                    aria-label="Search essex.gov.uk"
                />
            </div>
        </div>
    </form>
);

export default Search;
