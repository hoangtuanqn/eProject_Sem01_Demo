import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Mail, Phone, Bath, Scissors, Stethoscope, LogIn, User, Heart, ShoppingCart, MapPin } from "lucide-react";
import "~/styles/footer.css";
import Newsletter from "./Newsletter";
import { initTicker } from "./ticker";
import { initScrollToTop } from "~/utils/scrollToTop";
import stores from "~/data/stores.json";
export default function Footer() {
    useEffect(() => {
        initTicker();
        const cleanupScrollToTop = initScrollToTop();

        return () => {
            if (typeof cleanupScrollToTop === "function") {
                cleanupScrollToTop();
            }
        };
    }, []);
    return (
        <>
            {/* Gọi Toaster 1 file để hiển thị cho toàn bộ */}
            <Toaster />
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        {/* Contact Info */}
                        <div className="footer__column">
                            <h3 className="footer__heading">Contact Info</h3>
                            {stores.map((store, index) => (
                                <address className="footer__address" key={store.id}>
                                    <MapPin size={18} style={{ marginRight: "8px" }} />
                                    {store.address}
                                </address>
                            ))}

                            <p className="footer__link-wrap">
                                <Mail size={18} />
                                Email:
                                <a href="mailto:{process.env.REACT_APP_BRAND_EMAIL}" className="footer__link">
                                    {process.env.REACT_APP_BRAND_EMAIL}
                                </a>
                            </p>

                            <p className="footer__link-wrap">
                                <Phone size={18} />
                                Phone:
                                <a href="tel:{process.env.REACT_APP_BRAND_PHONE}" className="footer__link">
                                    {process.env.REACT_APP_BRAND_PHONE}
                                </a>
                            </p>
                        </div>

                        {/* Our Store */}
                        <div className="footer__column">
                            <h3 className="footer__heading">Our Store</h3>
                            <ul className="footer__list">
                                <li>
                                    <a href="#!" className="footer__link">
                                        <Scissors size={18} /> Full Grooming
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="footer__link">
                                        <Bath size={18} /> Bath and Dry
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="footer__link">
                                        <Scissors size={18} /> Styling
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="footer__link">
                                        <Stethoscope size={18} /> Medical Bath
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div className="footer__column">
                            <h3 className="footer__heading">Useful Links</h3>
                            <ul className="footer__list">
                                <li>
                                    <a href="#!" className="footer__link">
                                        <LogIn size={18} /> Login
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="footer__link">
                                        <User size={18} /> My account
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="footer__link">
                                        <Heart size={18} /> Wishlist
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="footer__link">
                                        <ShoppingCart size={18} /> Checkout
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <Newsletter />
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer__bottom">
                        <p className="footer__copyright">&copy; 2025, Team 02 FPT APTECH</p>
                        <div className="footer__payment">
                            <img src="/assets/icon/visa.svg" alt="Visa" className="footer__payment-img" />
                            <img src="/assets/icon/mastercard.svg" alt="Mastercard" className="footer__payment-img" />
                            <img src="/assets/icon/amex.svg" alt="American Express" className="footer__payment-img" />
                            <img src="/assets/icon/paypal.svg" alt="PayPal" className="footer__payment-img" />
                            <img src="/assets/icon/diners.svg" alt="Diners Club" className="dinersclub-img" />
                            <img src="/assets/icon/discover.svg" alt="Discover" className="footer__payment-img" />
                        </div>
                    </div>
                    {/* Ticker */}
                    <div className="footer__ticker-container">
                        <div className="footer__ticker">
                            <span id="dateTime"></span>
                            <span id="location"></span>
                        </div>
                    </div>
                    {/* Scoll top button */}
                    <button className="scrollToTopBtn" id="scrollToTopBtn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-8 8h5v8h6v-8h5z" />
                        </svg>
                    </button>
                </div>
            </footer>
        </>
    );
}
