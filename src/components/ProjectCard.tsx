import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, tags = [] }) => {
    return (
        <article className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {tags.length > 0 && (
                <div className="tags">
                    {tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
                </div>
            )}
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </article>
    );
};

export default ProjectCard;