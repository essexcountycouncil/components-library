import React from "react";

export const Footer = () => (
    <footer id="main-footer" className="footer-container">
        <div className="footer-top">
            <div className="footer">
                <div className="nav">
                    <ul className="nav-links">
                        <li>
                            <a href="https://www.essex.gov.uk/topic/about-essexgovuk">
                                About essex.gov.uk
                            </a>
                        </li>
                        <li>
                            <a href="https://www.essex.gov.uk/accessibility">
                                Accessibility
                            </a>
                        </li>
                        <li>
                            <a href="https://www.essex.gov.uk/cookies">
                                Cookies
                            </a>
                        </li>
                        <li>
                            <a href="https://www.essex.gov.uk/terms-conditions">
                                Terms and conditions
                            </a>
                        </li>
                        <li>
                            <a href="https://www.essex.gov.uk/privacy-and-data-protection">
                                Privacy and data protection
                            </a>
                        </li>
                        <li>
                            <a href="/topic/contact-us">Contact us</a>
                        </li>
                    </ul>
                    <ul className="social">
                        <li>
                            <a href="https://www.facebook.com/essexcountycouncil">
                                <span className="fab fa-facebook-f"></span>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/essex_cc">
                                <span className="fab fa-twitter"></span>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.youtube.com/user/EssexCountyCouncil">
                                <span className="fab fa-youtube"></span>
                                <span>Youtube</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.flickr.com/photos/essexcc/">
                                <span className="fab fa-flickr"></span>
                                <span>Flickr</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer">
                <ul className="credits">
                    <li className="copyright">© Essex County Council 2020</li>
                    <li className="design-link">
                        <a href="https://servicedesign.blog.essex.gov.uk/">
                            Built by the Service Design Team
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
