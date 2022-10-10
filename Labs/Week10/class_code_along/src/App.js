import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import './App.css';
import { useState, useEffect} from 'react'

function App() {
                            //variable with your apiKey
  const apiKey = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

    //Function to getMovies
    const getMovie = async (searchTerm) => {
      // make fetch request and store response
      try{
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
      } catch(e){
        console.error(e)
      }
    };

    useEffect(() => {
      getMovie("Mad Max: Beyond Thunderdome");
    }, []);

    
    return (
    <div className="main">
      Search the Movie Database
      <Form movieSearch={getMovie} />

      <MovieDisplay  movie={movie}/>
    </div>
  );
}

export default App;

// const [watchList, setWatchList] = useState([])

// const addMovie = () => {
//   setWatchList(oldArray => [...oldArray, movie])
// }