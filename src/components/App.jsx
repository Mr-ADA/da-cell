import Catalog from "../pages/Catalog";
import Footer from "../components/Footer";
import LandingPage from "../pages/LandingPage";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
