
import { BrowserRouter, Routes, Route } from 'react-router'
import GetStarted from './pages/GetStarted/GetStarted'
import './App.css'
import ComingSoon from './pages/ComingSoon/ComingSoon'

function App() {
  

  return (
    <div className="p-10 min-h-screen bg-base-100 ">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
