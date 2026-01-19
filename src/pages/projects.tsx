import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/layout.module.css';

const projects = [
    {
        title: 'Project Alpha',
        description: 'Accessibility-first marketing site with custom CMS integration and performance budgets.',
        link: 'https://example.com/alpha'
    },
    {
        title: 'Project Beta',
        description: 'Realtime data dashboard built with React and WebSockets, including robust testing and observability.',
        link: 'https://example.com/beta'
    },
    {
        title: 'Project Gamma',
        description: 'Design system and component library used across multiple apps to improve consistency and developer velocity.',
        link: 'https://example.com/gamma'
    }
];

const ProjectsPage = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <h1>Projects</h1>
                <p className={styles.lead}>Selected projects that show what I know, what I learned, and what I'm aspiring to build next.</p>
                <div className={styles.projectGrid}>
                    {projects.map((p, i) => (
                        <ProjectCard key={i} title={p.title} description={p.description} link={p.link} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;