import React from "react";

export const Search = () => (
    <form action="/search" method="get" class="form" role="search">
        <div className="group search">
            <div className="search-input">
                <label for="cludo-search-hero-form">
                    Search essex.gov.uk
                    <input
                        type="text"
                        id="cludo-search-hero-form"
                        name="search"
                        placeholder="Search essex.gov.uk"
                        autocomplete="off"
                    />
                </label>
                <button
                    class="fas fa-search search-icon-position"
                    aria-label="Search essex.gov.uk"
                />
            </div>
        </div>
    </form>
);

export default Search;
