import "../styles/LandingPage.css";
import iphone from "../assets/iphone.png";
import accessories from "../assets/accessories.png";
import ipad from "../assets/ipad.png";
import mac from "../assets/mac.png";
import airpods from "../assets/airpods.png";
import iphone15Slide from "../assets/iphone15.png";
import NewestProductCard from "../components/NewestProductCard";
import benefit_compare_models from "../assets/benefit_compare_models.png";
import benefit_1 from "../assets/benefit_1.png";
import benefit_2 from "../assets/benefit_2.png";
import benefit_3 from "../assets/benefit_3.png";
import benefit_4 from "../assets/benefit_4.png";

export default function LandingPage() {
    return (
      <div style= {{ backgroundColor: "#F9F9F9" }}>
        {/* First section */}
        <div className="d-flex align-items-center">
          <div className="px-6 mt-8 mb-8">
            <h1 className="custom-h1">Simplicity, Style, Substance:</h1>
            <h1 className="custom-h1">Welcome to the World of <span style={{ color: "#F46D75" }}>Apple</span> Products!</h1>

            <div className="d-flex mt-4">
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={iphone} className="img-btn" alt="iphone"></img>
                <p>iPhone</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={ipad} className="img-btn" alt="ipad"></img>
                <p>iPad</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={mac} className="img-btn" alt="mac"></img>
                <p>Mac</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={airpods} className="img-btn" alt="airpods"></img>
                <p>AirPods</p>
              </a>
              <a className="btn text-white d-flex flex-column align-items-center me-2 custom-btn px-4" href="#!" role="button">
                <img src={accessories} className="img-btn" alt="accessories"></img>
                <p>Accessories</p>
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
            <h1 className="custom-h1 mb-0">Newest Products</h1>
            <p className="fw-normal fs-5 mb-5">This is just a sample sentence can be anything</p>
          </div>
          <div className="d-flex gap-5 justify-content-center">
            <NewestProductCard/>
            <NewestProductCard/>
            <NewestProductCard/>
          </div>
        </div>

        {/* Benefits section */}
        <div className="px-6 mt-6 pb-5">
          <h1 className="custom-h1" style={{ color: "#F46D75" }}>Your Trustworthy Online Gadget Store</h1>

          <div class="row mt-5">
            <div class="col-sm-6">
              <div class="card benefit-card rounded-4">
                <div class="card-body px-0">
                  <img src={benefit_compare_models}></img>
                  <div className="px-4">
                    <p class="card-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Compare Models</p>
                    <p class="card-text" style={{ fontWeight: 300}}>Explore the diverse range of Apple products, to find the perfect match for your needs. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row gy-4 gx-4">
                <div class="col-md-6">
                  <div class="card benefit-card-small rounded-4">
                    <div class="card-body">
                      <img src={benefit_1}></img>
                      <p class="card-text">Affordable with 0% installment without interest.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card benefit-card-small rounded-4">
                    <div class="card-body">
                      <img src={benefit_2}></img>
                      <p class="card-text">Free, safe, and reliable delivery.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card benefit-card-small rounded-4">
                    <div class="card-body">
                      <img src={benefit_3}></img>
                      <p class="card-text">Comes with an official warranty.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card benefit-card-small rounded-4">
                    <div class="card-body">
                      <img src={benefit_4}></img>
                      <p class="card-text">Our team is ready to assist with product inquiries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
}