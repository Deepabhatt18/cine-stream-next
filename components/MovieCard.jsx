"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toggleFavorite, isFavorite } from "../lib/Favorites";

const MovieCard = ({ movie }) => {
  const [fav, setFav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFav(isFavorite(movie.id));
  }, [movie.id]);

  const handleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(movie);
    setFav((prev) => !prev);
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div
      className="movie-card"
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <button
        className="fav-btn"
        onClick={handleFavorite}
        aria-label="Favorite toggle"
      >
        {fav ? "❤️" : "🤍"}
      </button>

      <img src={posterUrl} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <span>⭐ {movie.vote_average?.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default MovieCard;