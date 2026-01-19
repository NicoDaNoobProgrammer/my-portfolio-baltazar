export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl?: string;
}

export interface Skill {
    name: string;
    level: number; // Level can be represented as a percentage
}

export interface Portfolio {
    projects: Project[];
    skills: Skill[];
}