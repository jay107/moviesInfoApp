import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movie = ({movie, search}) => {
   const [name, setName] = useState("");
   const [rate, setRate] = useState(0);
   const [id, setId] = useState("");

    setId(movie.imdbID);

   const handleSubmit = (e) => {
       e.preventDefault();

    fetch("/rate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            rate,
            id
        })
    }).then(res => res.json()).then(data => {
        if(data.error){
            toast.error(data.error)
        }else{
            toast.success(data.message)
        }
    }).catch(error => console.log(error))
        setName("");
        setRate("");
   }
    return (
        <div className="movie">
            <div className="movie-nav">
            <ToastContainer />
                <ul>
                   <li> <Link className="nav-link" to="/">About Movie</Link></li>
                  <li>  <Link className="nav-link" to="/more-about">More about...</Link></li>
                  <li className="active">  <Link className="nav-link active" to="/rate">Rate / Reviews</Link></li>
                  <li>  <Link className="nav-link" to="/about">About me</Link></li>
                  <li>  <Link className="nav-link" to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            <div className="rate-container">
                <h2><span>IMDB Rating: </span>{movie.imdbRating} ( {movie.imdbVotes} votes )</h2>
                <div className="give-rating">
                <input type="text" 
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                Give Rating: <input type="number" min="0" max="10"
                                value={rate}
                                onChange={e => setRate(e.target.value)}
                            />
                <button className="rate-submit" onClick={e => handleSubmit(e)} >submit</button>
               <h4> Avarage rate: </h4>
            </div>
            </div>
            
        </div>
    )
}

export default Movie
