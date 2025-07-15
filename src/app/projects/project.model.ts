export interface Project {
    id: number;
    title: string;
    duration: string;
    descriptionShort: string;
    descriptionLong: string;
    workProcess: string;
    teamExperience?: string;        // Optional mit ?
    learningExperience?: string;    // Neue Option für "What I have learnt"
    technologies: string[];
    imagePath: string;
    liveTestUrl: string;
    githubUrl: string;
    isExpanded?: boolean;
}