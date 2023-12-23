import Footer from "../components/Footer";
import CatalogCard from "../components/CatalogCard";
import "../styles/Catalog.css";

export default function Catalog() {
  return (
    <div className="catalog-page">
      <div className="catalog">
        <h1>Shop iPhone</h1>
        <h3>Displaying 100 products</h3>
        <div className="catalog-products">
          {/* To be automated later */}
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
