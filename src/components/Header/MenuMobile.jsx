import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuMobile = ({ toggleSubmenu }) => {
    const { pathname } = useLocation();

    const handleSubmenuClick = (e) => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.add("closing");
        setTimeout(() => {
            menu.classList.remove("active", "closing");
            document.body.style.overflow = "";
        }, 500);
    };

    useEffect(() => {
        handleSubmenuClick();
    }, [pathname]);

    return (
        <div className="mobile-menu">
            <div className="mobile-menu__overlay"></div>

            <div className="mobile-menu__content">
                <div className="mobile-menu__header">
                    <h2 className="mobile-menu__title">Maverick Dresses</h2>
                    {/* Button close Menu */}
                    <button className="mobile-menu__close" aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 6L6 18M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="mobile-menu__nav">
                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item">
                            <Link
                                to="/"
                                className="mobile-menu__link"
                                onClick={() => {
                                    pathname === "/" && window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="mobile-menu__item">
                            <button
                                className="mobile-menu__link"
                                data-submenu="products"
                                onClick={(e) => toggleSubmenu(e)}
                            >
                                <span>Products</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 1v10M1 6h10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <ul className="mobile-submenu">
                                <li>
                                    <button className="mobile-submenu__link" onClick={(e) => toggleSubmenu(e)}>
                                        <span>School Uniforms</span>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 1v10M1 6h10"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                    <ul className="mobile-submenu__child">
                                        <li>
                                            <Link to="/category/shirts" className="mobile-submenu__link">
                                                Shirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/skirts" className="mobile-submenu__link">
                                                Skirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/frocks" className="mobile-submenu__link">
                                                Frocks
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button className="mobile-submenu__link" onClick={(e) => toggleSubmenu(e)}>
                                        <span>Sport Uniforms</span>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 1v10M1 6h10"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                    <ul className="mobile-submenu__child">
                                        <li>
                                            <Link to="/category/pttshirts" className="mobile-submenu__link">
                                                P.T T-shirts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/ptshorts" className="mobile-submenu__link">
                                                P.T. Shorts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/pttrackpants" className="mobile-submenu__link">
                                                P.T. track pants
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button className="mobile-submenu__link" onClick={(e) => toggleSubmenu(e)}>
                                        <span>Accessories</span>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 1v10M1 6h10"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                    <ul className="mobile-submenu__child">
                                        <li>
                                            <Link to="/category/belts" className="mobile-submenu__link">
                                                Belts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/ties" className="mobile-submenu__link">
                                                Ties
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/logos" className="mobile-submenu__link">
                                                Logos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category/socks" className="mobile-submenu__link">
                                                Socks
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="mobile-menu__item">
                            <button
                                className="mobile-menu__link"
                                data-submenu="about"
                                onClick={(e) => toggleSubmenu(e)}
                            >
                                <span>About</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 1v10M1 6h10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <ul className="mobile-submenu">
                                <li>
                                    <Link to="/pages/about" className="mobile-submenu__link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/careers" className="mobile-submenu__link">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/partners" className="mobile-submenu__link">
                                        Partners
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/customer-growth-chart" className="mobile-submenu__link">
                                        Growth & Achievement
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/awards" className="mobile-submenu__link">
                                        Awards & Recognition
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="mobile-menu__item">
                            <button
                                className="mobile-menu__link"
                                data-submenu="support"
                                onClick={(e) => toggleSubmenu(e)}
                            >
                                <span>Support</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 1v10M1 6h10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <ul className="mobile-submenu">
                                <li>
                                    <Link to="/pages/faq" className="mobile-submenu__link">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/policies" className="mobile-submenu__link">
                                        Policies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/contact" className="mobile-submenu__link">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/size-guide" className="mobile-submenu__link">
                                        Size Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/order-tracking" className="mobile-submenu__link">
                                        Order Tracking
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="mobile-menu__item">
                            <button
                                className="mobile-menu__link"
                                data-submenu="media"
                                onClick={(e) => toggleSubmenu(e)}
                            >
                                <span>Media</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 1v10M1 6h10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <ul className="mobile-submenu">
                                <li>
                                    <button className="mobile-submenu__link" onClick={(e) => toggleSubmenu(e)}>
                                        <span>Gallery</span>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 1v10M1 6h10"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                    <ul className="mobile-submenu__child">
                                        <li>
                                            <Link to="/pages/gallery/product-photos" className="mobile-submenu__link">
                                                Product Photos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/gallery/school-events" className="mobile-submenu__link">
                                                School Events
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/gallery/sports-events" className="mobile-submenu__link">
                                                Sports Events
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/blog/news" className="mobile-submenu__link">
                                        News
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="mobile-menu__item">
                            <button
                                className="mobile-menu__link"
                                data-submenu="activities"
                                onClick={(e) => toggleSubmenu(e)}
                            >
                                <span>Activities</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 1v10M1 6h10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <ul className="mobile-submenu">
                                <li>
                                    <Link to="/pages/wishlist" className="mobile-submenu__link">
                                        Wishlist
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/coupons" className="mobile-submenu__link">
                                        Coupons
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/recently-products" className="mobile-submenu__link">
                                        Recently Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pages/order-tracking" className="mobile-submenu__link">
                                        Order Tracking
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <a href="#!" className="mobile-menu__login">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.667 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H6.667a3.333 3.333 0 00-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1010 2.5a3.333 3.333 0 000 6.667z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Log in
                </a>
            </div>
        </div>
    );
};

export default MenuMobile;
