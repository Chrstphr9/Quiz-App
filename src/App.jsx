import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Settings from './pages/Settings';
import Finalscore from './pages/Finalscore';
import Questions from './pages/Questions';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<Finalscore />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
