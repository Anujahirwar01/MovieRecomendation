import Card from "./Card";
import CardContent from "./CardContent";


export default function MovieList({ movies, search, addToWatchlist }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies
          .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
          .map((movie) => (
            <div
              key={movie.id}
              className="relative rounded-lg overflow-hidden bg-gray-800 text-white"
              style={{
                backgroundImage: `url(${movie.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            >
              {/* Overlay for better readability */}
              <div className="bg-black bg-opacity-60 h-full p-4 flex flex-col justify-end">
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p className="text-gray-300">{movie.year}</p>
                <button
                  className="mt-2 bg-green-600 px-3 py-1 rounded flex items-center gap-2"
                  onClick={() => addToWatchlist(movie)}
                >
                  Add to Watchlist
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
  