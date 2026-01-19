import React from 'react';

const GrowthTab: React.FC = () => {
    return (
        <section className="growth-section">
            <h2>Currently Learning</h2>
            <p className="growth-intro">I maintain a growth mindset — here are the areas I'm actively improving:</p>
            <ul className="learning-list">
                <li>Advanced TypeScript & Generics</li>
                <li>Performance tuning with React & Next.js</li>
                <li>Accessible UI patterns (WCAG)</li>
                <li>Design systems and component libraries</li>
            </ul>
        </section>
    );
};

export default GrowthTab;