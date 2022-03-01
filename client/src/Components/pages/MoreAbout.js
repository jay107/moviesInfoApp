import React from 'react'
import {Link} from "react-router-dom";
const Movie = ({movie}) => {
    return (
        <div className="movie">
            <div className="movie-nav">
                <ul>
                   <li> <Link className="nav-link" to="/">About Movie</Link></li>
                  <li className="active">  <Link className="nav-link active" to="/more-about">More about...</Link></li>
                  {/* <li>  <Link className="nav-link" to="/rate">Rate / Reviews</Link></li> */}
                  <li>  <Link className="nav-link" to="/about">About me</Link></li>
                  <li>  <Link className="nav-link" to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            <div className="more-movie">
                <h2><span>Main Actors: </span>{movie.Actors}</h2>
                <h2><span>Movie Genre: </span>{movie.Genre}</h2>
                <h2><span>Award won by movie: </span>{movie.Awards}</h2>
                <h2><span>Box office collection: </span>{movie.BoxOffice}</h2>
                {/* <h2><span>Plot: </span>{movie.Plot}</h2> */}
                <h2><span>Runtime: </span>{movie.Runtime}</h2>
                <h2><span>Release Date: </span>{movie.Released}</h2>
            </div>
        </div>
    )
}

export default Movie
