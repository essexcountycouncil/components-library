import React from "react";
import PropTypes from "prop-types";

export const Pagination = ({ prevhref, prevtext, nexthref, nexttext }) => {
    return (
        <nav className="pagination" aria-label="pagination">
            <ul>
                <li className="prev">
                    <a href={prevhref}>
                        <span className="pagination-item">
                            <span className="fas fa-arrow-left"></span>Previous
                        </span>
                        <span>{prevtext}</span>
                    </a>
                </li>
                <li className="next">
                    <a href={nexthref}>
                        <span className="pagination-item">
                            <span className="fas fa-arrow-right"></span>Next
                        </span>
                        <span>{nexttext}</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    prevhref: PropTypes.string.isRequired,
    prevtext: PropTypes.string.isRequired,
    nexthref: PropTypes.string.isRequired,
    nexttext: PropTypes.string.isRequired,
};

export default Pagination;
