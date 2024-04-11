import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondoryContainer from './SecondoryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondoryContainer/>
    </div>
  );
}

export default Browse
