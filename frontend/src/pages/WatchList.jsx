import { useState } from "react";
import { Link } from "react-router-dom";


export default function WatchlistPage() {
    // const [watchlist, setWatchlist] = useState([
    //     {
    //         id: 1,
    //         title: "Inception",
    //         year: 2010,
    //         image: "https://m.media-amazon.com/images/I/51kEieIw2zL._AC_UF894,1000_QL80_.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "Interstellar",
    //         year: 2014,
    //         image: "https://m.media-amazon.com/images/I/71yNzF5pJBL._AC_UF894,1000_QL80_.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "The Dark Knight",
    //         year: 2008,
    //         image: "https://m.media-amazon.com/images/I/51EbJvlMRDL._AC_UF894,1000_QL80_.jpg",
    //     },
    // ]);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-6">My Watchlist</h1>

            {/* Back to Home Link */}
            <div className="flex justify-end mb-4">
                <Link to="/main" className="bg-blue-500 text-white px-4 py-2 rounded">Back to Home</Link>
            </div>

            {/* Watchlist Display */}
            {watchlist.length > 0 ? (
                <ul className="list-disc list-inside text-gray-300">
                    {watchlist.map((movie) => (
                        <li key={movie.id}>
                            {movie.title} ({movie.year})
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No movies added to watchlist.</p>
            )}
        </div>
    );
}
