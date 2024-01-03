import iphone from "../assets/iphone_15_promax 1.png";
import "../styles/ItemCard.css";
export default function DetailsCard() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={iphone} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={iphone} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={iphone} alt="Third slide" />
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <div className="button-wrapper">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </div>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <div className="button-wrapper">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </div>
      </a>
      <div className="color-selectors">
        <div className="selector" style={{ backgroundColor: "#847F7C" }}></div>
        <div className="selector" style={{ backgroundColor: "#1B1B1B" }}></div>
        <div className="selector" style={{ backgroundColor: "#2F4452" }}></div>
        <div className="selector" style={{ backgroundColor: "#DDDDDD" }}></div>
      </div>
    </div>
  );
}
