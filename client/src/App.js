import React, {useState, useEffect} from 'react';
import "./style.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import Footer from "./Components/Footer";
import { Route, Switch } from 'react-router-dom';
import MoreAbout from "./Components/pages/MoreAbout";
import About from "./Components/pages/About";
import Rate from "./Components/pages/Rate";
import Contact from "./Components/pages/Contact";

const App = () => {

  const [movie, setMovie] = useState("");
  const [search, setSearch] = useState("avatar");

  const fetchData = () => {
    const res = fetch(`http://www.omdbapi.com/?t=${search}&apikey=5978a012`).then((res) => 
      res.json()).then(data => setMovie(data))
  }
  useEffect(() => {
    fetchData();
   
  }, [search]);

  return (
    <div className="body">
      <Header search={search} setSearch={setSearch} />

      <Switch>
        <Route path="/" exact>
        <Movie movie={movie} />
        </Route>
        <Route path="/more-about" exact>
        <MoreAbout movie={movie} />
        </Route>
        <Route path="/rate" exact>
        <Rate movie={movie} search={search} />
        </Route>
        <Route path="/about" exact>
        <About />
        </Route>
        <Route path="/contact" exact>
        <Contact />
        </Route>
      </Switch>

      <Footer />
    </div>
  )
}

export default App
