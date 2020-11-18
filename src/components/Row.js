import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
// import SweetAlert from 'sweetalert2-react';
import swal from 'sweetalert2-react';
// https://api.themoviedb.org/3/search/movie?api_key=118793b17cb87a35341029d97f1ce02e&query=${%22game%20night%22}
const base_url = 'https://image.tmdb.org/t/p/original/';
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl]) // if [], run onece when the row loads, and dont run again 
    // console.log(movies);
    // const swtAlert = (name) => {
    //     swal({
    //         title: name,


    //     })
    // }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            const movieName = (movie['name'] || movie.original_name || movie['title'] || "")
            console.log(movie, 'movie', movie.id);
            movieTrailer(movieName)
                .then((path) => {
                    const urlParams = new URLSearchParams(new URL(path).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((ex) => {
                    // swtAlert(movieName)
                    console.log(ex);
                }
                );
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie, i) => (
                    <img key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} ></YouTube>}
        </div>
    );
}

export default Row;

