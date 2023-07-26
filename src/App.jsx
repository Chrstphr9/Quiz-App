import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Finalscore from "./pages/Finalscore";
import Questions from "./pages/Questions";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Container max-width="sm">
          <Box textAlign='center' mt={5}>
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/score" element={<Finalscore />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
}

export default App;
