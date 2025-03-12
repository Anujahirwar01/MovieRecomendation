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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Recommender</h1>
      <Link to='/main' className="text-ssl bg-blue-500 rounded font-bold text-center mb-6">
        Back To Home
      </Link>
      
      {/* Display the MovieList with the movies and addToWatchlist function */}
      <Watchlist watchlist={watchlist} />
      <MovieList movies={movies} addToWatchlist={addToWatchlist} />
      
      {/* Display the watchlist */}
      
    </div>
  );
}
