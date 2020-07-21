import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4663b.firebaseio.com/'
});

export default instance;