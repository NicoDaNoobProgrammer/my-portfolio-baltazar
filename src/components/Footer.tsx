import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p>&copy; {new Date().getFullYear()} Nico Paolo L. Baltazar. All rights reserved.</p>
                <nav aria-label="Footer navigation">
                    <ul className="footer-nav">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;