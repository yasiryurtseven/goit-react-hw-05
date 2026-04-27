import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Outlet, Link} from "react-router-dom";
import { getMovieDetails } from "../moviesApi";

const MovieDetailsPage = () => {
  const { movieId} = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/movies")
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails();
  } , [movieId])
  return (
    <div>
      <h1>Movie Details Page</h1>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} />

          <p>{movie.overview}</p>
          <Link to={backLinkRef.current}>Go back</Link>
          <h3>Additional Information</h3>
          <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};



export default MovieDetailsPage;