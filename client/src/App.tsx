
import { BrowserRouter, Routes, Route } from 'react-router'
import ComingSoon from '../pages/ComingSoon/ComingSoon'
import EnterHabits from '../pages/EnterHabits/EnterHabits'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/get-started" element={<EnterHabits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
