const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const BASE = "https://api.themoviedb.org/3";

export async function getPopularMovies(page = 1) {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}&page=${page}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data.results;
}

export async function searchMovies(query) {
  if (!query) return [];
  const res = await fetch(
    `${BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  return data.results;
}