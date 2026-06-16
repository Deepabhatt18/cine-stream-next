"use client";

import { useEffect, useState } from "react";
import { getFavorites } from "../lib/Favorites";
import MovieCard from "./MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="container">
      <h1 className="title">My Favorites ❤️</h1>
      {favorites.length === 0 ? (
        <p style={{ color: "#94a3b8", marginTop: "20px" }}>
         No Movies.......
        </p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}