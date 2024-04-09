
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
  return (
    <div className="p-6 ">
      <h1 className=" text-4xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex no-scrollbar">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList
