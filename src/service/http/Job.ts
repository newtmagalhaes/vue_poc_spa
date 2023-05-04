import { api } from '../api';

enum Dificulty {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard',
}

export interface Job {
    id: number;
    title: string;
    dificulty: Dificulty;
    description: string;
}

export default async function getJob(): Promise<Job[]> {
    return (await api.get<Job[]>("/jobs")).data;
}
