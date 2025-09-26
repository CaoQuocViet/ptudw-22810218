export default function FilterBar() {
    return (
        <div className="filter-bar d-flex flex-wrap align-items-center">
            <div className="sorting">
                <select>
                    <option value={1}>Default sorting</option>
                    <option value={1}>Default sorting</option>
                    <option value={1}>Default sorting</option>
                </select>
            </div>
            <div className="sorting mr-auto">
                <select>
                    <option value={1}>Show 12</option>
                    <option value={1}>Show 12</option>
                    <option value={1}>Show 12</option>
                </select>
            </div>
            <div className="pagination">
                <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true" /></a>
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true" /></a>
                <a href="#">6</a>
                <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
            </div>
        </div>
    );
}