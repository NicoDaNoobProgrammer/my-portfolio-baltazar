import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GrowthTab from '../components/GrowthTab';
import styles from '../styles/layout.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <h1>About Me</h1>
                <p className={styles.lead}>I am a frontend developer who focuses on accessible and well-tested user interfaces. I enjoy turning complex problems into simple, beautiful interfaces.</p>

                <section className={styles.section}>
                    <h2>The Hero Statement</h2>
                    <p>One sentence that explains who I am and what I do: "I build accessible, high-performance frontend experiences focused on clarity and usability."</p>
                </section>

                <section className={styles.section}>
                    <h2>The Big Three</h2>
                    <p>Select three projects that show growth: one that shows what you know, one that shows what you learned, and one that shows what you aspire to do.</p>
                </section>

                <GrowthTab />
            </main>
            <Footer />
        </div>
    );
};

export default About;