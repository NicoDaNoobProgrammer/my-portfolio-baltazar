import React from 'react';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.containerInner}>
                <h1 className={styles.logo}>Future Proof Portfolio Project</h1>
                <nav aria-label="Main navigation">
                    <ul className={styles.navList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;