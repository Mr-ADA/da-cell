import iphone from "../assets/iphone_15_promax 1.png";
import "../styles/CatalogCard.css";
export default function CatalogCard() {
  return (
    <div className="card shadow m-4 py-4 px-3 pb-5 border-0">
      <img src={iphone} alt="" className="card-img-top mt-3 mx-auto" />
      <div className="color-selectors">
        <div className="selector rounded" style={{ backgroundColor: "#847F7C" }}></div>
        <div className="selector rounded" style={{ backgroundColor: "#1B1B1B" }}></div>
        <div className="selector rounded" style={{ backgroundColor: "#2F4452" }}></div>
        <div className="selector rounded" style={{ backgroundColor: "#DDDDDD" }}></div>
      </div>
      <div className="card-body">
        <h5 className="card-title">iPhone 15 Pro Max</h5>
        <p className="card-text">From $1,000</p>
      </div>
    </div>
  );
}
