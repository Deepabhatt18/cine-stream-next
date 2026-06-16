"use client";

import { useState } from "react";
import { searchMovies } from "../../lib/tmdb";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (value) => {
    setQuery(value);
    if (!value.trim()) {
      setMovies([]);
      return;
    }
    const results = await searchMovies(value);
    setMovies(results);
  };

  return (
    <div className="container">
      <h1 className="title">Search Movies</h1>
      <SearchBar search={query} setSearch={handleSearch} />
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          query && <p style={{ color: "#94a3b8" }}>Movie Not Found</p>
        )}
      </div>
    </div>
  );
}