import "./styles/footer.css";
import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return(
         <footer>
            <div className="footer-banner">
            </div>
            <div className="footer-wrapper">
                <div className="footer-info">
                    <h6>Useful Links</h6>
                    <p><a href="/">Home</a></p>
                    <p><a href="/about">About Me</a></p>
                    <p><a href="/portfolio">Portfolio</a></p>
                    <p><a href="/blog">Blog</a></p>
                    <p><a href="/resume">Resume</a></p>
                </div>
                <div className="footer-info">
                    <h6>Contact Info</h6>
                    <div className="d-flex align-items-start">
                      <i className="bi bi-telephone font-small me-2"></i>
                      <p>(541) 321-9148</p> 
                    </div>
                    <div className="d-flex align-items-start">
                      <i className="bi bi-envelope font-small me-2"></i>
                      <p>irrperks@gmail.com</p>

                    </div>
                    <div className="d-flex align-items-start">
                      <i className="bi bi-linkedin font-small me-2"></i>
                      <p><a href="https://www.linkedin.com/in/isaac-perks/">Linked-In</a></p>

                    </div>
                    <div className="d-flex align-items-start">
                      <i className="bi bi-github font-small me-2"></i>
                      <p><a href="https://www.github.com/najir/">Github</a></p>
                    </div>
                </div>
            </div>
            <p className="footer-source">Source Code can be found here: <a href="https://github.com/najir/irrPortfolio">github.com/najir/irrportfolio</a></p>
        </footer>
)};

export default Footer;