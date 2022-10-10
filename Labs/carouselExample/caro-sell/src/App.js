import './App.css';
import Button from './components/Button'
import Card from './components/Card'
import cardImages from './models/cardImages'
import { useState } from 'react'
import symbols from './models/symbols';

function App() {

  const [count, setCount] = useState(0)

  const [currentPic, setCurrentPic] = useState(cardImages[count])

  const changeCount = () => {
    console.log("CurrentCount:", count)

    setCount(count + 1)

    setCurrentPic(cardImages[count])
  }

  const reverseCount = () => {
    console.log("CurrentCount:", count)

    setCount(count - 1)

    setCurrentPic(cardImages[count])
  }


  return (
    <div className="App">
      <Card currentCount={count} images={cardImages[count]} />
    <br />
      <Button picToggle={reverseCount} symbols={symbols.left}/>
      <Button picToggle={changeCount} symbols={symbols.right} />

    </div>
  );
}

export default App;
