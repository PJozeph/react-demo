import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-21f7b.firebaseio.com/'
});

export default instance;