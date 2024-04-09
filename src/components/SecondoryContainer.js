import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondoryContainer = () => {
  const movies = useSelector(store => store.movies);
  console.log(movies)
  return (
    <div className=" bg-black">
      <div className=" -mt-60 pl-12 z-20 relative">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecondoryContainer
