import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer px-5 d-flex flex-row text-white">
      <div className="row ms-5">
        <h1 className="title text-uppercase">domba allen</h1>
        <div className="socials">
          <a href="#footer">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#footer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#footer">
            <img src={twitter} alt="twitter" />
          </a>
        </div>

        <h2 className="subtitle">© Domba Allen Team, 2023</h2>
      </div>
      <div className="row ms-1">
        <h3 className="category">Navigation</h3>
        <span>Home</span>
        <span>Products</span>
        <span>Benefits</span>
        <span>.</span>
      </div>
      <div className="row ms-1">
        <h3 className="category">Company</h3>
        <span>About us</span>
        <span>Team</span>
        <span>Store</span>
        <span>Customer Service</span>
      </div>
      <div className="row">
        <h3 className="category">Content</h3>
        <span>Home</span>
        <span>Catalog</span>
        <span>Cart</span>
        <span>Contact Us</span>
      </div>
    </footer>
  );
}
