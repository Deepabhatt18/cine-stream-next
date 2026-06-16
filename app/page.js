import { getPopularMovies } from "../lib/tmdb";
import InfiniteMovies from "../components/InfiniteMovies";

export default async function Home() {
  const initialMovies = await getPopularMovies();

  return (
    <div className="container">
      <h1 className="title">Popular Movies</h1>
      <InfiniteMovies initialMovies={initialMovies} />
    </div>
  );
}