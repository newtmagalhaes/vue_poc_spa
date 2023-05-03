import axios from 'axios'

enum Dificulty {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard',
}

interface Job {
    id: number;
    title: string;
    dificulty: Dificulty;
    description: string;
}

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export default async function getJob(): Promise<Job[]> {
    const response = await api.get<Job[]>("/jobs")
    return response.data
}
