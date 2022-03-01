import React,{useState} from 'react'
import {Link} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movie = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const fetchData = (e) => {
        e.preventDefault();

        fetch("/contact", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        }).then(res => res.json()).then(data => {
           if(data.error) {
               toast.error(data.error)
           }
           else{
               toast.success(data.message)
           }
        }).catch(console.error());

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="movie">
            <div className="movie-nav">
                <ToastContainer />
                <ul>
                   <li> <Link className="nav-link" to="/">About Movie</Link></li>
                  <li>  <Link className="nav-link" to="/more-about">More about...</Link></li>
                  {/* <li>  <Link className="nav-link" to="/rate">Rate / Reviews</Link></li> */}
                  <li>  <Link className="nav-link" to="/about">About me</Link></li>
                  <li className="active">  <Link className="nav-link active" to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            <div className="contact-container">
                <form>
                <i class="fas fa-user"></i>
                    <input type="text" 
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <i class="fas fa-envelope"></i>
                    <input type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <i class="fas fa-comment-alt"></i>
                    <textarea placeholder="Enter your message..." cols="40" rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <button typeof="submit" onClick={(e) => fetchData(e)}>send message..</button>
                </form>
            </div>
        </div>
    )
}

export default Movie
