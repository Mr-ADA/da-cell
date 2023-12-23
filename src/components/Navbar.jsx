import search from "../assets/search.png";
import cart from "../assets/cart.png";
import account from "../assets/account.png";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-custom-bg navbar-dark">
            <div class="container-fluid px-8">
                <a class="navbar-brand" href="#">da</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">iPhone</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">iPad</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mac</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">AirPods</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Accessories</a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <div>
                            <a href="#">
                                <img src={search} alt="search" class="img-icon" />
                            </a>
                            <a href="#">
                                <img src={cart} alt="cart" class="img-icon" />
                            </a>
                            <a href="#">
                                <img src={account} alt="account" class="img-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
  