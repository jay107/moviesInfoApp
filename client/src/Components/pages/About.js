import React from 'react'
import {Link} from "react-router-dom";
import myPhoto from "../../img/t1.jpg";
const Movie = () => {
    return (
        <div className="movie">
            <div className="movie-nav">
                <ul>
                   <li> <Link className="nav-link" to="/">About Movie</Link></li>
                  <li>  <Link className="nav-link" to="/more-about">More about...</Link></li>
                  {/* <li>  <Link className="nav-link" to="/rate">Rate / Reviews</Link></li> */}
                  <li className="active">  <Link className="nav-link active" to="/about">About me</Link></li>
                  <li>  <Link className="nav-link" to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            <div className="about-container">
                <img src={myPhoto} />
                <h2>Hi ! I'm  <span> Jay - website Devloper </span></h2>
                <h3>Hello There ! i'm full stack devloper,
                    <br />
                    i'm learning some new things...
                    <br />
                    Like... HTML, CSS, JS, NodeJs, Express, Django, DBs...
                    <br />
                    I have also devloped some projects .. from this languages.
                    <br />
                    you can download my CV from below button...
                </h3>
                <Link className="download-cv">Download CV &#8659;</Link>
            </div>
        </div>
    )
}

export default Movie
