import React, { useEffect } from "react";
import "~/styles/search.css";
// Library aos
import AOS from "aos";
import "aos/dist/aos.css";
// Import icon from react-icons

export default function Search() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            anchorPlacement: "top-bottom",
            once: true,
        });
    }, []);

    const handleSearch = () => {
        // Implement search functionality here
        const searchInput = document.querySelector(".search__input");
        if (searchInput) {
            console.log("Searching for:", searchInput.value);
        }
    };

    return (
        <section className="searchPage">
            <h1 data-aos="fade-down" className="searchPage__title">
                Search our store
            </h1>
            <div className="searchPage__input-wrapper" data-aos="fade-up">
                <input type="text" className="searchPage__input" placeholder="Search our store" />
                <img
                    src="/assets/icon/search.svg"
                    alt=""
                    className="searchPage__icon"
                    size={20}
                    onClick={handleSearch}
                />
            </div>
        </section>
    );
}
