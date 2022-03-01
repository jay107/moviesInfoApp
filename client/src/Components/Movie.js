import React from 'react'
import {Link} from "react-router-dom";
const Movie = ({movie}) => {
    console.log(movie);
    return (
        <div className="movie">
            <div className="movie-nav">
                <ul>
                   <li className="active"> <Link className="nav-link active" to="/">About Movie</Link></li>
                  <li>  <Link className="nav-link" to="/more-about">More about...</Link></li>
                  {/* <li>  <Link className="nav-link" to="/rate">Rate / Reviews</Link></li> */}
                  <li>  <Link className="nav-link" to="/about">About me</Link></li>
                  <li>  <Link className="nav-link" to="/contact">Contact Me</Link></li>
                </ul>
            </div>
                <div className="movie-view">
                   <div className="column-1">
                        <img src={movie.Poster} />
                   </div>
                   <div className="column-2">
                        <h1>→{movie.Title}←</h1>
                        <h2><span>Director: </span>{movie.Director}</h2>
                        <h2><span>Production: </span>{movie.Production}</h2>
                       <h2><span>Writer: </span>{movie.Writer}</h2>
                       <h2><span>IMDB Rate: </span>{movie.imdbRating}</h2>
                        <Link to="/more-about" className="read-more">Read more...</Link>
                   </div>
                </div>
        </div>
    )
}

export default Movie
