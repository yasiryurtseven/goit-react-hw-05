import {useState, useEffect} from "react";
import { searchMovies } from "../moviesApi";
import { useSearchParams } from "react-router-dom";
import MovieList  from "../components/MovieList/MovieList";



const MoviesPage = () => {
const [movies, setMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query") || "";
const [inputValue, setInputValue] = useState(query);


useEffect(() => {
  if(!query) return;
     const searchMoviesByQuery = async () => {
       try {
        const data = await searchMovies(query);
        setMovies(data);
       }
       catch (error) {
          console.log(error);
       }
     }
     searchMoviesByQuery();
}, [query])

const handleSubmit = (e) => {
  e.preventDefault();
  if (inputValue.trim() === "") {
    alert("Lütfen bir film adı giriniz !");
    return;
  }
  setSearchParams({ query: inputValue });
}
  return (
    <div>
      <h1>Movies Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};


export default MoviesPage;