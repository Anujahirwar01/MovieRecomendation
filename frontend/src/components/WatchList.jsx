export default function Watchlist({ watchlist }) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
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
  