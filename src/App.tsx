import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AddCatch from "./pages/AddCatch.tsx";
import NavBar from "./components/NavBar.tsx";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;