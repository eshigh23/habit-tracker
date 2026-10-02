
import { BrowserRouter, Routes, Route } from 'react-router'
import GetStarted from './pages/GetStarted/GetStarted'
import './App.css'
import ComingSoon from './pages/ComingSoon/ComingSoon'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
