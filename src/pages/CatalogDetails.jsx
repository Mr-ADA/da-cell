import ItemCard from "../components/ItemCard";
import ItemDescription from "../components/ItemDescription";
import "../styles/CatalogDetails.css";

export default function CatalogDetails() {
  return (
    <div className="catalog-details">
      <div className="item-card"><ItemCard/></div>
      <div className="item-description"><ItemDescription/></div>
    </div>
  );
}
