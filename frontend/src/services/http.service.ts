import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '/localhost:3030/api/';


// const BASE_URL = '/localhost:3030/api/'
console.log('BASE_URL:', BASE_URL);

const axios = Axios.create({
    withCredentials: true,
});

export const httpService = {
    async get<T>(endpoint: string): Promise<T> {
        return ajax<T>(endpoint, 'GET');
    },
    async post<T>(endpoint: string, data: any): Promise<T> {
        return ajax<T>(endpoint, 'POST', data);
    },
    async put<T>(endpoint: string, data: any): Promise<T> {
        return ajax<T>(endpoint, 'PUT', data);
    },
    async delete<T>(endpoint: string, data: any): Promise<T> {
        return ajax<T>(endpoint, 'DELETE', data);
    },
};

async function ajax<T>(endpoint: string, method: string = 'GET', data: any = null): Promise<T> {
    try {
        const config: AxiosRequestConfig = {
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null,
        };

        const res: AxiosResponse = await axios(config);
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data);
        console.dir(err);

        if (err.response && err.response.status === 401) {
            sessionStorage.clear();
            window.location.assign('/');
        }

        throw err;
    }
}
