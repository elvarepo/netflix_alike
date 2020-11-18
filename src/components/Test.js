import axios2 from 'axios';
import React from 'react';

const ApiKeyTesting = '118793b17cb87a35341029d97f1ce02e';
const mvTesting = 'https://api.themoviedb.org/3/search/movie/';

const Testingnow = () => {
    async function fetchingMovie() {
        const newMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=118793b17cb87a35341029d97f1ce02e&query=${movieName}`);
        console.log(newMovie, '...newMovie');

    }
    fetchingMovie();

    return (
        <div > this is a testing file</div>
    );
}

export default Testingnow;