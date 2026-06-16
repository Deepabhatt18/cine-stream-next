import InfiniteMovies from "../components/InfiniteMovies";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Popular Movies</h1>

      <InfiniteMovies initialMovies={[]} />
    </div>
  );
}