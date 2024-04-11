
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBaground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    return (
    <div>
            <iframe
                className=' w-screen aspect-video'
        src={"https://www.youtube.com/embed/XeDbyVODQ5M?si=" + trailerVideo?.key+"?&mute=1&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
    );
}

export default VideoBaground
