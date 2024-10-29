import React from "react";
import "./MovieCard.css";
import star from "./../../img/white-medium-star.svg";

function MovieCard({ movie }) {
  // console.log(movie);
  return (
    <a href="/" className="movie-card">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt=""
      />

      <div className="black-background"></div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <div className="movie-date-rate">
          <p>{movie.release_date}</p>
          <p className="rate">
            {movie.vote_average} <img src={star} alt="" />
          </p>
        </div>
        <p className="description">{movie.overview.slice(0, 100)}...</p>
      </div>
    </a>
  );
}

export default MovieCard;
