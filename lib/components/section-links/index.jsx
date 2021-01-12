import React from "react";
import PropTypes from "prop-types";

import Link from "../../elements/link";

export const SectionLinks = ({ sections }) => {
    return (
        <nav className="section-links">
            {sections.map((section) => (
                <ul key={section.title} role="group">
                    <li className="section-title" role="treeitem">
                        {section.title}
                    </li>
                    {section.links.map((link) => {
                        const { path, title } = link;
                        return (
                            <li key={title} role="treeitem">
                                <Link href={path} title={title}>
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ))}
        </nav>
    );
};

SectionLinks.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    path: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default SectionLinks;
