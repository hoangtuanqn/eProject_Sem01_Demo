import React from "react";
import "~/styles/brandLogos.css"; // Import CSS Module

export default function BrandLogos() {
    return (
        <>
            {/* Brand Logo */}
            <section className="brand-logos">
                <ul className="brand-logos__list">
                    <li className="brand-logos__item">
                        <img src="/assets/imgs/brand-logo-1.webp" alt="FILA" className="brand-logos__image" />
                    </li>
                    <li className="brand-logos__item">
                        <img src="/assets/imgs/brand-logo-2.webp" alt="Ritter Sport" className="brand-logos__image" />
                    </li>
                    <li className="brand-logos__item">
                        <img src="/assets/imgs/brand-logo-3.webp" alt="Nike" className="brand-logos__image" />
                    </li>
                    <li className="brand-logos__item">
                        <img src="/assets/imgs/brand-logo-4.webp" alt="Adidas" className="brand-logos__image" />
                    </li>
                    <li className="brand-logos__item">
                        <img src="/assets/imgs/brand-logo-5.webp" alt="New Holland" className="brand-logos__image" />
                    </li>
                    <li className="brand-logos__item">
                        <img src="/assets/imgs/brand-logo-6.webp" alt="Puma" className="brand-logos__image" />
                    </li>
                </ul>
            </section>
        </>
    );
}
