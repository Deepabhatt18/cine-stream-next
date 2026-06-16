"use client";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input value={search}onChange={(e) => setSearch(e.target.value)}placeholder="Search movies..."/>
    </div>
  );
}
