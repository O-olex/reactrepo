import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9daa298a-5ad3-427c-a0ee-6f75e625c238'}
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data})
}

export const getUsers2 = (pageNumber, pageSize = 10) => {
    return  instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => {return response.data})
}