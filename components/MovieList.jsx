export default async function MovieDetail({ id }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return (
      <div className="container">
        <p style={{ color: "#94a3b8", marginTop: "40px" }}>
          Movie nahi mili. Wapas jaao aur doosri try karo.
        </p>
      </div>
    );
  }

  const movie = await res.json();

  return (
    <div className="details-container">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="details-info">
        <h1>{movie.title}</h1>
        <p><b>Release:</b> {movie.release_date}</p>
        <p><b>Rating:</b> ⭐ {movie.vote_average?.toFixed(1)}</p>
        <p><b>Overview:</b> {movie.overview}</p>
      </div>
    </div>
  );
}