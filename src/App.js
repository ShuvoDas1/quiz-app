import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions/Questions";
import Results from "./pages/Results/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="questions" element={<Questions />} />
      <Route path="results" element={<Results />} />
    </Routes>
  );
}

export default App;
