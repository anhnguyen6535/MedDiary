import axios from 'axios'

export const BASE_URL = 'https://localhost:7113/';

export const ENDPOINTS = {
    participant: 'participant',
    user: 'Users',
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        log: info => axios.post(url, info),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}