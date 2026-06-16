
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 CineStream</div>

      <div className="nav-links">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/favorites" className="nav-link">Favorites</Link>
        <Link href="/search" className="nav-link">Search</Link>
      </div>
    </nav>
  );
}