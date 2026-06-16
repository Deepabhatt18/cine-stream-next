"use client";

import { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

export default function InfiniteMovies({ initialMovies = [] }) {
  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false); // ref se scroll double-trigger nahi hoga

  const loadMoreMovies = async (pageNum) => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);

    try {
      const res = await fetch(`/api/movies?page=${pageNum}`);
      const data = await res.json();
      setMovies((prev) => [...prev, ...data]);
    } catch (err) {
      console.error("Movies load karne mein error:", err);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialMovies.length === 0) {
      loadMoreMovies(1);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (nearBottom && !loadingRef.current) {
        const nextPage = page + 1;
        setPage(nextPage);
        loadMoreMovies(nextPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </div>
      {loading && (
        <p style={{ textAlign: "center", padding: "20px", color: "#94a3b8" }}>
          Loading...
        </p>
      )}
    </>
  );
}