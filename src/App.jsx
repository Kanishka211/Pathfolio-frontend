
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <>
   <Routes>
    <Route  path="/" element={<Login/>} ></Route>
    <Route path="/register" element={<Register/>} ></Route>
    <Route path="/dashboard" element={<Dashboard/>} ></Route>
    </Routes>
    </>
    </BrowserRouter>
  )
  
}

export default App
