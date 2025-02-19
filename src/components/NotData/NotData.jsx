import React from "react";
import { Link } from "react-router-dom";
import "./not-data.css";

export default function NotData({ hiddenBtn = true }) {
    return (
        <div className="not-data">
            <img src="/assets/imgs/no-product.png" alt="No Data" className="not-data__image" />
            {hiddenBtn && (
                <Link to="/categories" className="btn">
                    Explore More Categories
                </Link>
            )}
        </div>
    );
}
