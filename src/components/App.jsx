import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Catalog from "../pages/Catalog";
import CatalogDetails from "../pages/CatalogDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog-details" element={<CatalogDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
