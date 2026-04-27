import {getMovieCast} from "../.././moviesApi";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieCast = async () => {
            try {
                const data = await getMovieCast(movieId);
                setCast(data);
            }
            catch (error) {
                console.log(error);
            }
        }
       fetchMovieCast();
    }, [movieId] )


return (
    <div>
        <h2>Cast</h2>
        <ul>
            {cast.length === 0 ? ( <p>No cast Information Available</p>) : (null)
            
            }
            {cast.map(actor => (
                <li key={actor.id}>
                    <img src={
                    actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"}
                        alt={actor.name} />
                    <p> <strong>{actor.name}</strong> as {actor.character}</p>
                </li>))}
                
        </ul>
    </div>
)} ;

export default MovieCast;