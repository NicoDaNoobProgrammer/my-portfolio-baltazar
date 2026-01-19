import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p>&copy; {new Date().getFullYear()} Nico Paolo L. Baltazar. All rights reserved.</p>
                <nav aria-label="Footer navigation">
                    <ul className="footer-nav">
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="mailto:youremail@example.com">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;