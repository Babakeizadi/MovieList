import React, { useEffect, useState } from "react";
import fire from "./../../img/fire.svg";
import "./MovieList.css";
import MovieCard from "../MovieCards/MovieCard";
import _ from "lodash";

function MovieList({ category, title }) {
  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=c83178808697ddffcc5579dcf7081f3a`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  //--useStates
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRate, setMinRate] = useState(0);
  const [sort, setSort] = useState({
    by: "",
    order: "asc",
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(filteredMovies)
    const sortMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
    setFilteredMovies(sortMovies);
    console.log(filteredMovies);
  }, [sort]);

  //Functions
  const handleFilter = (rate) => {
    if (rate === minRate) {
      setMinRate(0);
      setFilteredMovies(movies);
    } else {
      setMinRate(rate);
      const filtered = movies.filter((item) => item.vote_average >= rate);
      setFilteredMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;

    setSort((p) => {
      return { ...p, [name]: value };
    });
  };
  console.log(sort);
  //--return
  return (
    <section className="movie-list">
      <div className="movie-list-hedear">
        <h3>
          {title}
          <img src={fire} alt="" />
        </h3>

        <div className="movie-list-filter">
          <ul>
            <li
              className={minRate === 6 ? "active" : ""}
              onClick={() => handleFilter(6)}
            >
              +6 Star
            </li>
            <li
              className={minRate === 7 ? "active" : ""}
              onClick={() => handleFilter(7)}
            >
              +7 Star
            </li>
            <li
              className={minRate === 8 ? "active" : ""}
              onClick={() => handleFilter(8)}
            >
              +8 Star
            </li>
          </ul>

          <select name="order" value={sort.order} onChange={handleSort}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>

          <select name="by" value={sort.by} onChange={handleSort}>
            <option value="">Sort By :</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rate</option>
          </select>
        </div>
      </div>

      <div className="movie-cards">
        {filteredMovies.map((movie, key) => (
          <MovieCard key={key} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
