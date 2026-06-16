const KEY = "cinestream_favorites";

export const getFavorites = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const toggleFavorite = (movie) => {
  if (typeof window === "undefined") return;
  const favorites = getFavorites();
  const exists = favorites.find((m) => m.id === movie.id);
  const updated = exists
    ? favorites.filter((m) => m.id !== movie.id)
    : [...favorites, movie];
  localStorage.setItem(KEY, JSON.stringify(updated));
};

export const isFavorite = (id) => {
  if (typeof window === "undefined") return false;
  return getFavorites().some((m) => m.id === id);
};