import { api } from '../api';

export enum Dificulty {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard',
}

export interface JobPost {
    title: string;
    dificulty: Dificulty;
    description: string;
}

export interface Job extends JobPost {
    id: number;
}

export async function getJob(): Promise<Job[]> {
    return (await api.get<Job[]>("/jobs")).data;
}

export async function postJob(data: JobPost) {
    return (await api.post<Job[]>("/jobs", data = data)).data;
}
