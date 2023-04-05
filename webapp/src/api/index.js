import axios from 'axios'

export const BASE_URL = 'https://localhost:7113/';

export const ENDPOINTS = {
    participant: 'participant',
    user: 'Users',
    doctor: 'Doctors',
    patient: 'Patients',
    medicaion: 'Medications',
    lab: 'Labtests',
    patient: 'Patients'
}

export const createAPIEndpoint = (endpoint) => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        customizePost: (newRecord, path) => axios.post(url + path, newRecord),
        log: info => axios.post(url + 'Login', info),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}