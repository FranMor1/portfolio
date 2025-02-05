export interface Project {
    _id: string;
    title: string;
    description: string;
    startDate: Date;
    finishDate: Date;
    longDescription: string;
    links: string;
    tools: string[];
    technologies: string[];
    images: string[];
}