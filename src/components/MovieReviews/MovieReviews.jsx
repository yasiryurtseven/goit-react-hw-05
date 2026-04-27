import {getMovieReviews} from "../.././moviesApi";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchMovieReviews = async () => {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchMovieReviews();
    }, [movieId])

    return (
       <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p><strong>Author: {review.author}</strong></p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
    )
}

export default MovieReviews;