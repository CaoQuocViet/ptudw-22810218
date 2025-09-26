import SidebarCategories from "../components/SidebarCategories";
import SidebarFillter from "../components/SidebarFillter";
import FilterBar from "../components/Filterbar";
import SingleProduct from "./SingleProduct";

export default function ProductList() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5">
                    <SidebarCategories />
                    <SidebarFillter />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7">
                    <FilterBar />
                    <section className="lattest-product-area pb-40 category-list">
                        <div className="row">
                            {/* single product */}
                            <SingleProduct />
                            {/* single product */}
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src="img/product/p2.jpg" alt="Product" />
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
                            {/* single product */}
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src="img/product/p3.jpg" alt="Product" />
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
                            {/* single product */}
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src="img/product/p4.jpg" alt="Product" />
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
                            {/* single product */}
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src="img/product/p5.jpg" alt="Product" />
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
                            {/* single product */}
                            <div className="col-lg-4 col-md-6">
                                <div className="single-product">
                                    <img className="img-fluid" src="img/product/p6.jpg" alt="Product" />
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
                        </div>
                    </section>
                    <FilterBar />
                </div>
            </div>
        </div>
    );
}