import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBaground from './VideoBaground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return
    const mainMovie = movies[0];
    const { origingal_title, overview,id } = mainMovie;

  return (
    <div>
        <VideoTitle title={origingal_title} overview={overview} />
          <VideoBaground movieId={id } />  
    </div>
  )
}

export default MainContainer
