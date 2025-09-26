export default function SingleProduct() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-product">
                <img className="img-fluid" src="img/product/p1.jpg" alt="Product" />
                <div className="product-details">
                    <h6>addidas New Hammer sole
                        for Sports person</h6>
                    <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                        <a href="#" className="social-info">
                            <span className="ti-bag" />
                        </a>
                        <a href="#" className="social-info">
                            <span className="lnr lnr-heart" />
                        </a>
                        <a href="#" className="social-info">
                            <span className="lnr lnr-sync" />
                        </a>
                        <a href="#" className="social-info">
                            <span className="lnr lnr-move" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}