import "../styles/LandingPage.css";
import iphone from "../assets/iphone.png";
import accessories from "../assets/accessories.png";
import ipad from "../assets/ipad.png";
import mac from "../assets/mac.png";
import airpods from "../assets/airpods.png";
import iphone15Slide from "../assets/iphone15.png";
import toprightarrow from "../assets/toprightarrow.png";

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
          <div class="row" style= {{ backgroundColor: "#111111" }}>
            <div class="col-8">
              <img src={iphone15Slide} className="w-100 h-100"></img>
            </div>
            <div class="col-3 d-flex flex-column align-items-center justify-content-center">
              <p className="fw-bolder fs-1 text-white mb-0">iPhone 15 Pro</p>
              <p className="fw-normal fs-5 text-white mb-0">Titanium. So strong. So light. So pro.</p>
              <a className="d-flex" href="#">
                <p className="fw-normal fs-3" style= {{ color: "#1B8CEF" }}>Buy</p>
                <i class="bi bi-arrow-right-short" style={{ fontSize: '2rem' }}></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newest product section */}
        <div className="mt-5">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="custom-h1">Newest Products</h1>
            <p className="fw-normal fs-5">This is just a sample sentence can be anything</p>
          </div>
        </div>


      </div>
    );
}