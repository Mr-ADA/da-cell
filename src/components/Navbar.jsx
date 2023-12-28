import search from "../assets/search.png";
import cart from "../assets/cart.png";
import account from "../assets/account.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom-bg navbar-dark">
      <div className="container-fluid px-8">
        <a className="navbar-brand" href="#">
          da
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="catalog">
                iPhone
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                iPad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mac
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AirPods
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accessories
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div>
              <a href="#">
                <img src={search} alt="search" className="img-icon" />
              </a>
              <a href="#">
                <img src={cart} alt="cart" className="img-icon" />
              </a>
              <a href="#">
                <img src={account} alt="account" className="img-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
