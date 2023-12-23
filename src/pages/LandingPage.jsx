import "../styles/LandingPage.css";
import iphone from "../assets/iphone.png";
import accessories from "../assets/accessories.png";
import ipad from "../assets/ipad.png";
import mac from "../assets/mac.png";
import airpods from "../assets/airpods.png";
import iphone15Slide from "../assets/iphone15.png";

export default function LandingPage() {
    return (
      <div>
        {/* First section */}
        <div className="d-flex align-items-center" style= {{ backgroundColor: "#F9F9F9" }}>
          <div className="px-6 mt-8 mb-8">
            <h1 className="custom-h1">Simplicity, Style, Substance:</h1>
            <h1 className="custom-h1">Welcome to the World of <span style={{ color: "#F46D75" }}>Apple</span> Products!</h1>

            <div className="d-flex mt-4">
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={iphone} className="img-btn" alt="iphone"></img>
                <p style={{ color: "#111111" }}>iPhone</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={ipad} className="img-btn" alt="ipad"></img>
                <p style={{ color: "#111111" }}>iPad</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={mac} className="img-btn" alt="mac"></img>
                <p style={{ color: "#111111" }}>Mac</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={airpods} className="img-btn" alt="airpods"></img>
                <p style={{ color: "#111111" }}>AirPods</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={accessories} className="img-btn" alt="accessories"></img>
                <p style={{ color: "#111111" }}>Accessories</p>
              </a>
            </div>
          </div>
        </div>

        {/* Second section / slide show */}
        <div>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={iphone15Slide} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="" class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>
    );
}