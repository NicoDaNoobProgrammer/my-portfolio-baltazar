import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import GrowthTab from '../components/GrowthTab';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/layout.module.css';

const featured = [
    {
        title: 'Project Alpha',
        description: 'A responsive web app that demonstrates growth: accessibility, performance, and a component library.',
        link: 'https://example.com/alpha'
    },
    {
        title: 'Project Beta',
        description: 'An API-driven dashboard with real-time updates and thoughtful UX.',
        link: 'https://example.com/beta'
    },
    {
        title: 'Project Gamma',
        description: 'A design-focused landing page showing interaction design and animations.',
        link: 'https://example.com/gamma'
    }
];

const HomePage = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Hero />

            <div className={styles.contentArea}>
                <main className={styles.main}>

                    <section id="about" className={styles.section}>
                        <h2>About</h2>
                        <p className={styles.lead}>I am a frontend developer focused on building accessible, maintainable, and fast user experiences. My work emphasizes clarity, performance, and a strong UX foundation.</p>
                    </section>

                    <section id="projects" className={styles.section}>
                        <h2>Featured Projects — The Big Three</h2>
                        <div className={styles.projectGrid}>
                            {featured.map((p, i) => (
                                <ProjectCard key={i} title={p.title} description={p.description} link={p.link} />
                            ))}
                        </div>
                    </section>

                    <GrowthTab />
                </main>

                <aside className={styles.pageAvatar} aria-hidden>
                    <img src="/images/avatar.png" alt="Nico Paolo L. Baltazar" />
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;