import { useState, useEffect } from 'react'
import './App.css';
import Giphy from './components/Giphy'
import Form from './components/Form'
import Button from './components/Button'



function App() {

  const apiKey = "V05FkIJkEfW7SVjVDKxObRF5ZSBePvmA"

  const [randomGifs, setRandomGifs] = useState(null)
  const [searchGifs, setSearchGifs] = useState(null)
  

  const getGifs = async (searchTerm) => {

    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en
        `
      )

      const data = await response.json()

      setSearchGifs(data)
    }

    catch(e) {
      console.error(e)
    }
  }

  const getRandomGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g
        `
      )

      const data = await response.json()

      setRandomGifs(data)
    }

    catch(e) {
      console.error(e)
    }
  }

  // useEffect(() =>{
  //   getRandomGifs()
  // }, [])

//     //     //     //      //     //     //
  return (
    <div className="App">
      <Giphy getRandomGifs={getRandomGifs} randomGifs={randomGifs} searchGifs={searchGifs}/>
      <br />
      <Form getGifs={getGifs}/>
      <br />
      {searchGifs ? 
      <div className="searchDisplay">
        <div className="searchGifs">
          {searchGifs.data.map((gif, i) => {
            return(
              <div className="searchGifResults" key={i}>
                <img id="pic" src={gif.images.downsized_medium.url} alt={gif.title} />
                <h4>{gif.title}</h4>
                <br />
              </div>
            )
          })}
        </div>
        <Button color="goldenrod" text="Clear GIFs" buttonWidth="40%" onClick={()=> setSearchGifs(null)} />
      </div>  :
      <h4>Search for a Gif!</h4>
    }
    </div>
  );
}
//     //     //     //     //     //     //

export default App;

{/* <img id="pic" src={searchGifs.data[0].images.downsized_medium.url} alt={searchGifs.data.title} />
        <br />
        <img id="pic" src={searchGifs.data[1].images.downsized_medium.url} alt={searchGifs.data.title} />
        <br />
        <img id="pic" src={searchGifs.data[2].images.downsized_medium.url} alt={searchGifs.data.title} />
        <br /> */}

{/* <div className="random">
      {randomGifs && randomGifs.map((randomGif, i) => {
        return(
          <div className="randomGifDisplay">
            <h3>{randomGif.id}</h3>
          </div>
        )
      })}
    </div> */}