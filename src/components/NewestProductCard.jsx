import iphone_15_promax from "../assets/iphone_15_promax 1.png";
import "../styles/NewestProductCard.css";

export default function NewestProductCard() {
    return (
        <div class="card newest-card d-flex justify-content-center rounded-4">
            <div class="card-body mb-0" style={{ flex: '0 0 auto' }}>
                <h1 class="card-title new-product-h1">iPhone 15 Pro Max</h1>
                <div className="d-flex align-items-center py-2">
                    <p class="card-text mb-0 me-2">Available in: </p>
                    <div className="circle" style={{ backgroundColor: '#847F7C' }}></div>
                    <div className="circle" style={{ backgroundColor: '#1B1B1B' }}></div>
                    <div className="circle" style={{ backgroundColor: '#2F4452' }}></div>
                    <div className="circle" style={{ backgroundColor: '#DDDDDD' }}></div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src={iphone_15_promax} className="me-0"></img>
                    <h1 class="card-text new-product-h1">$5000</h1>
                    <a href="#" class="btn btn-primary rounded-pill" style={{ width: '25%' }}>Buy</a>
                </div>
            </div>
        </div>
    );
}
    