import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import Breadcrumb from "~/components/Breadcrumb";
import useTitle from "~/hooks/useTitle";
import SchoolEvents from "./SchoolEvents";
import SportsEvents from "./SportsEvents";

const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Product Photos", url: "/pages/product-photos" },
];

export default function Index() {
    const { slug } = useParams();
    let nameTitle = "";
    switch (slug) {
        case "product-photos":
            nameTitle = "Product Photos";
            break;
        case "school-events":
            nameTitle = "School Events";
            break;
        case "sports-events":
            nameTitle = "Sports Events";
            break;
        default:
            nameTitle = "Gallery";
            break;
    }
    useTitle(nameTitle);

    return (
        <>
            <main className="main">
                <Breadcrumb title={nameTitle} items={breadcrumbItems} />

                {slug === "product-photos" && <Product />}
                {slug === "school-events" && <SchoolEvents />}
                {slug === "sports-events" && <SportsEvents />}
            </main>
        </>
    );
}
