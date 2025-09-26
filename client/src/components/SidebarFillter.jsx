export default function SidebarFillter() {
    return (
        <div className="sidebar-filter mt-50">
            <div className="top-filter-head">Product Filters</div>
            <div className="common-filter">
                <div className="head">Brands</div>
                <form action="#">
                    <ul>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label htmlFor="apple">Apple<span>(29)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label htmlFor="asus">Asus<span>(29)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label htmlFor="gionee">Gionee<span>(19)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label htmlFor="micromax">Micromax<span>(19)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label htmlFor="samsung">Samsung<span>(19)</span></label></li>
                    </ul>
                </form>
            </div>
            <div className="common-filter">
                <div className="head">Color</div>
                <form action="#">
                    <ul>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label htmlFor="black">Black<span>(29)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label htmlFor="balckleather">Black
                            Leather<span>(29)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label htmlFor="blackred">Black
                            with red<span>(19)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label htmlFor="gold">Gold<span>(19)</span></label></li>
                        <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label htmlFor="spacegrey">Spacegrey<span>(19)</span></label></li>
                    </ul>
                </form>
            </div>
            <div className="common-filter">
                <div className="head">Price</div>
                <div className="price-range-area">
                    <div id="price-range">
                        <div className="value-wrapper d-flex">
                            <div className="price">Price:</div>
                            <span>$</span>
                            <div id="lower-value">
                                <div className="to">to</div>
                                <span>$</span>
                                <div id="upper-value">
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div></div>

    );
}