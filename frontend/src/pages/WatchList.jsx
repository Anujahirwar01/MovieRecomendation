import { useState } from "react";
import { Link } from "react-router-dom";
import Watchlist from "../components/WatchList";
import MovieList from "../components/MovieList";

export default function WatchlistPage() {
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

  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <div className=" justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-400">Movie Recommender</h1>
        <Link to='/main' className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
          Back To Home
        </Link>
      </div>

      {/* Movie List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <MovieList movies={movies} addToWatchlist={addToWatchlist} />
      </div>

      {/* Watchlist */}
      {watchlist.length > 0 && (
        <div className="mt-10 border-t border-gray-600 pt-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Your Watchlist</h2>
          <Watchlist watchlist={watchlist} />
        </div>
      )}
    </div>
  );
}
