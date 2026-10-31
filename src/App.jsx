import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
function App() {
  return (
    <>
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
