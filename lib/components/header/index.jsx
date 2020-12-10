import React from 'react';
import PropTypes from 'prop-types';

// import './styles.scss';
import seax from '../../images/seax.png';

const Header = ({title, navLinks}) => (
    <header className='header-background' data-testid='header'>
        <div className='header'>
            <nav className='nav'>
                <div className='logo-wrap'>
                    <a href='/' className='logo-text seax'>
                        <img src={seax} width='36' height='30' alt='Essex County Council logo' style={{marginRight: '10px'}} />
                        {title}
                    </a>
                </div>
                {navLinks.length > 0 && (
                    <ul className='nav-links' data-testid='header-links'>
                        {navLinks.map(({href, text}) => (
                            <li key={text}><a href={href}>{text}</a></li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string,
    navLinks: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string
    }))
};

Header.defaultProps = {
    title: 'Essex.gov.uk',
    navLinks: []
};

export default Header;
