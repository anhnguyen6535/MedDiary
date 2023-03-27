import axios from 'axios'

export const BASE_URL = 'http://localhost:7113/';

export const ENDPOINTS = {
    user: 'User',
    participant: 'participant',
}

export const createAPIEndpoint = (endpoint: string) => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: (id: number) => axios.get(url + id),
        post: (newRecord: any) => axios.post(url, newRecord),
        put: (id: number, updatedRecord: any) => axios.put(url + id, updatedRecord),
        delete: (id: number) => axios.delete(url + id),
    }
}