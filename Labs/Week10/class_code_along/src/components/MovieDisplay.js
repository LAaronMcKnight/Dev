import { useState } from "react";
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
export default function MovieDisplay({ movie }) {
  const [watchList, setWatchList] = useState([]);

  //function to return loaded JSX
  const loaded = () => {
    function watchLater() {
      const newMovie = {
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
      };
      console.log("Watch List button clicked");

      setWatchList([...watchList, newMovie]);

      console.log(watchList);
    } //consider making watch later / list a new component
    return (
      <>
        <div className="movieDisplay">
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img id="mainPoster" src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Year}</h2>
          <p id='summary'>{movie.Plot}</p>
          <button onClick={watchLater}>Watch Later</button>
        </div>

        <div className="watchList">
          <h2>Watch List</h2>

          <div className="listMovies">
            {watchList.map((listMovie, i) => {
              return (
                <div className="listMap" key={i}>
                  <h3>{listMovie.title}</h3>
                  <img className="listPosters" src={listMovie.poster} />
                  <h4>{listMovie.year}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}

// We must export the component to use it in other files
