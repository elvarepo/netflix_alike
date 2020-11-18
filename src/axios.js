import axios from 'axios';

/** base url to make requests to the movie database */
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default instance;
// how to use the instance of axios.create
// -> if we do instance.get('/foo-bar'), we are append '/foo-bar' to the baseRUL
// so the new url will become 'https://api.themoviedb.org/3/foo-bar',   
// then the axios will fetch data on the new url