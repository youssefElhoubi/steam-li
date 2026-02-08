import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import WatchPage from './pages/watchPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/watch/:id" element={<WatchPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
