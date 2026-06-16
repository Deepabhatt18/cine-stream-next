import MovieDetail from "../../../components/MovieList";

export default async function Page({ params }) {
  const { id } = await params;
  return <MovieDetail id={id} />;
}