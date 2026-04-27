import { useState, useEffect } from "react";
import { getTrendingMovies} from "../moviesApi"
import MovieList  from "../components/MovieList/MovieList";

const HomePage = () => {

  const [movies, setMovies] = useState([])  
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        setError(null); 
        
        const data = await getTrendingMovies();
        setMovies(data); 
      } catch (err) {
        setError("Veriler yüklenirken bir hata oluştu!");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();

}, []);

  // 3. Yüklenme ve Hata durumlarını kullanıcıya gösterelim
  if (isLoading) return <div>Yükleniyor reis, bekle...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1>Trending Movies</h1>

      <MovieList movies = {movies} />
    </div>
  );
}


export default HomePage;