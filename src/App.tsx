import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
