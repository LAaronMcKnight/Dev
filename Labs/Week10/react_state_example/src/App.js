import Header from './components/Header'
import Ask from './components/Ask'
import './App.css';
import { useState } from 'react'

function App() {
const [answerList, setAnswerList] = useState([])


const onAsk = (question) => {
  const newQuestion = {}
}

  return (
    <div className="appContainer">
      <Header />
      <br />
      <Ask onAsk={onAsk} />
    </div>
  );
}

export default App;
