import "../styles/ItemDescription.css";
import installment from "../assets/benefit_1.png";
import delivery from "../assets/benefit-detail-shipping.png";
import stock from "../assets/benefit-detail-available.png";

export default function ItemDescription() {
  return (
  <div className="item-description">
    <div className="title-section">
      <h1 className="title">iPhone 15 Pro Max</h1>
      <h3 className="price">$1,000.00</h3>
      <span className="description">iPhone 15 Pro Max. Lahir dari titanium dan dilengkapi chip A17 Pro terobosan,tombol Tindakan yang dapat disesuaikan, dan sistem kamera iPhone paling andal yang pernah ada.</span>
    </div>
    <h2 className="color-selector-title">Colour - Natural Titanium</h2>
    <div className="color-selectors">
      <div className="color-selector" style={{ backgroundColor: "#847F7C" }}></div>
      <div className="color-selector" style={{ backgroundColor: "#1B1B1B" }}></div>
      <div className="color-selector" style={{ backgroundColor: "#2F4452" }}></div>
      <div className="color-selector" style={{ backgroundColor: "#DDDDDD" }}></div>
    </div>
    <h2 className="storage-selector-title">Storage</h2>
    <div className="storage-selectors">
      <div className="storage-selector m-2 rounded">256 GB</div>
      <div className="storage-selector m-2 rounded">512 GB</div>
      <div className="storage-selector m-2 rounded">1 TB</div>
    </div>
    <div className="benefits">
      <div className="benefit">
        <img src={installment} alt="installment" />
        <span><b>Installment:</b> 0% installments for up to 24 months</span>
      </div>
      <div className="benefit">
        <img src={delivery} alt="installment" />
        <span><b>Delivery:</b> Free delivery in 2-3 days</span>
      </div>
      <div className="benefit">
        <img src={stock} alt="installment" />
        <span><b>Stock:</b> Item is available</span>
      </div>
    </div>
    <button className="btn-add-to-cart rounded">Add to Cart</button>
  </div>
  );
}
