import './App.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage'
import Homepage from './pages/Homepage'
import { getUser } from "./utilities/users-service";

function App() {

  const [user, setUser] = useState(getUser())

  return (
    <div className="App">

      {user ? (
      <>
      <Routes>
        <Route path='/' element={<Navigate to="/homepage" />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
      </>
      ):(
      <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
