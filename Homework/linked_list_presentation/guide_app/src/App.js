import SideBar from './Components/SideBar'
import SlideDisplay from './Components/SlideDisplay';
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [slide, setSlide] = useState([
    {
      img: 'https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
    },
    {
      img: './../public/images/slide2.png'
    },
    {
      img: './../public/images/slide3.png'
    },
    {
      img: './../public/images/slide4.png'
    },
    {
      img: './../public/images/slide5.png'
    },
    {
      img: './../public/images/slide6.png'
    },
    {
      img: './../public/images/slide7.png'
    },
    {
      img: './../public/images/slide8.png'
    },
  ])


  useEffect(() => {
    setSlide(slide[0])
  
  }, [slide])

  return (
    <div className="App">
      <>
      <img src={slide[0].img} alt='' />
      </>
      <div className='header'>
        <h1>Linked Lists!</h1>
      </div>
      <div className='Main' >
        <div className='sidebar-component' >
          <SideBar setSlide={setSlide} />
        </div>
        <div className='presentation'>
          <SlideDisplay slide={slide} />
        </div>
      </div>
    </div>
  );
}

export default App;
