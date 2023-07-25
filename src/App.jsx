import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import settings from './pages/settings';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <settings />
          </Route>
          <Route path="/">
            <settings />
          </Route>
          <Route path="/">
            <settings />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
