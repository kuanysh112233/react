import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((film) => {
          return (
            <Link to={`/movies/${film.imdbID}`} key={film.imdbID} className="movie-card">
              <img
                src={film.Poster ? film.Poster : "https://via.placeholder.com/200x300?text=No+Image"}
                alt={film.Title}
                className="movie-poster"
              />
              <div className="movie-info">
                <p className="movie-title">{film.Title}</p>
                <span className="movie-rating">⭐</span>
                <p className="movie-year">{film.Year}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p className="not-found">ФИЛЬМ НЕ НАЙДЕН, НАПИШИТЕ ЗАПРОС</p>
      )}
    </div>
  );
}
