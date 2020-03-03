import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://how-to-build-week.herokuapp.com/api',
        headers: {
            'Authorization': token,
        }
    })
}