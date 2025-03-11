import { useState } from "react";
// import User from "../components/User";
import MovieList from "../components/MovieList";
import Watchlist from "../components/WatchList";
import { Link } from "react-router-dom";

const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      image: "https://m.media-amazon.com/images/I/51kEieIw2zL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      image: "https://m.media-amazon.com/images/I/71yNzF5pJBL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      image: "https://m.media-amazon.com/images/I/51EbJvlMRDL._AC_UF894,1000_QL80_.jpg",
    },
  ];

export default function MovieApp() {
  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Movie Recommender</h1>

      {/* Profile and Watchlist Links */}
      <div className="flex justify-end gap-4 mb-6">
        <Link to='/profile' className="bg-blue-500 text-white px-4 py-2 rounded">Profile</Link>
        <Link to='/watchlist' className="bg-green-500 text-white px-4 py-2 rounded">Watchlist</Link>
      </div>
      
      {/* Search Bar */}
      <div className="mb-6 flex gap-2">
        <input
          placeholder="Search for a movie..."
          className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-blue-600">Search</button>
      </div>
      
      {/* Movie List */}
      <MovieList movies={movies} search={search} addToWatchlist={addToWatchlist} />
      
      {/* Watchlist */}
      <Watchlist watchlist={watchlist} />
    </div>
  );
}