import './App.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar'


function App() {

  const [user, setUser] = useState(null)


  return (
    <main className="App">
    { user ?
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to="/orders" />} />
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      </>
      :
      <AuthPage />
    }
  </main>
  );
}

export default App;
