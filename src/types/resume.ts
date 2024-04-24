// objects = typescript types

interface Education {
    degree: string;
    year: number;
    school: string;
}

interface Project {
    link: string[];
    title: string;
    description: string;
}


export interface Resume {
    name: string;
    number: number;
    email: string;
    links: string[];
    education: Education[];
    projects: Project[];
    skills: string[];
}