import IphoneComparison from "../assets/iphone_comparison.png";
import "../styles/ComparisonCard.css";

export default function ComparisonCard() {
  return (
    <div className="comparison">
      <img src={IphoneComparison} alt="Iphone Comparison" />
      <div className="comparison-title">
        <h1>Compare iPhone</h1>
        <h4>Explore the diverse range of iPhone models and find the perfect match for your needs</h4>
        <a href="#">Compare models ↗</a>
      </div>
    </div>
  );
}
