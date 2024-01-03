import "../styles/ItemDescription.css";

export default function ItemDescription() {
  return (
    <div className="item-description">
      <div className="title-section">
        <h1 className="title">iPhone 15 Pro Max</h1>
        <h3 className="price">$1,000.00</h3>
        <span className="description">iPhone 15 Pro Max. Lahir dari titanium dan dilengkapi chip A17 Pro terobosan,tombol Tindakan yang dapat disesuaikan, dan sistem kamera iPhone paling andal yang pernah ada.</span>
      </div>
      <div className="color-selectors">
        <h2 className="color-selector-title">Colour - Natural Titanium</h2>
        <div className="selector" style={{ backgroundColor: "#847F7C" }}></div>
        <div className="selector" style={{ backgroundColor: "#1B1B1B" }}></div>
        <div className="selector" style={{ backgroundColor: "#2F4452" }}></div>
        <div className="selector" style={{ backgroundColor: "#DDDDDD" }}></div>
      </div>
    </div>
  );
}
