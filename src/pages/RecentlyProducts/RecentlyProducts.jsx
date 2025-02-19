import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Trash2Icon } from "lucide-react";
import { Rating } from "@mui/material";
import "~/styles/wishList.css";
import "~/styles/recentlyProducts.css";
import products from "~/data/products.json";
import { useWishlistActions } from "~/utils/handleWishlist";
import { calculateOriginalPrice, getTimeAgo } from "~/utils/helpers";

export default function WishList() {
    const { handleWishlistAction } = useWishlistActions();
    const handleGetRecently = () => {
        const savedRecently = localStorage.getItem("recentProducts");
        const recentlyItems = savedRecently ? JSON.parse(savedRecently) : [];
        return recentlyItems
            .map((item) => {
                const product = products.find((p) => p.id === item.id);
                return {
                    ...product,
                    timestamp: item.timestamp,
                };
            })
            .filter(Boolean);
    };

    const [recentlyProducts, setRecentlyProducts] = useState(handleGetRecently);
    const [deletingItemId, setDeletingItemId] = useState(null);

    const removeFromRecently = async (product) => {
        setDeletingItemId(product.id);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Lấy danh sách từ localStorage
        const savedRecently = localStorage.getItem("recentProducts");
        const recentlyItems = savedRecently ? JSON.parse(savedRecently) : [];

        // Lọc bỏ sản phẩm cần xóa
        const updatedItems = recentlyItems.filter((item) => item.id !== product.id);

        // Cập nhật lại localStorage
        localStorage.setItem("recentProducts", JSON.stringify(updatedItems));

        // Cập nhật state
        setRecentlyProducts(handleGetRecently());
        setDeletingItemId(null);
    };

    return (
        <section className="wish-list">
            <div className="container">
                {recentlyProducts.length > 0 ? (
                    <div className="featured-products__grid">
                        <AnimatePresence mode="popLayout">
                            {recentlyProducts.map((product) => {
                                // if (!products[index]) return null;

                                // const product = products.find((product) => product.id === index);
                                return (
                                    <motion.article
                                        key={product.id}
                                        className="product-card"
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            marginBottom: 0,
                                            marginLeft: -200,
                                            transition: {
                                                opacity: { duration: 0.2 },
                                                height: { duration: 0.3, delay: 0.1 },
                                            },
                                        }}
                                    >
                                        <figure className="category-product__wrapper">
                                            {product.sale !== 0 && (
                                                <span className="badge__sale">{`${product.sale}% OFF`}</span>
                                            )}
                                            <div className="image-wrapper">
                                                <Link to={`/product/${product.slug}`}>
                                                    <img
                                                        src={product.thumbnail || "/placeholder.svg"}
                                                        alt={product.name}
                                                        className="category__product-image"
                                                    />
                                                </Link>
                                                <div className="product-card__actions">
                                                    <button
                                                        className="action-btn"
                                                        title="Remove from recently viewed"
                                                        onClick={() => removeFromRecently(product)}
                                                        disabled={deletingItemId === product.id}
                                                    >
                                                        {deletingItemId === product.id ? (
                                                            <img
                                                                src="/assets/icon/loading.gif"
                                                                alt="Loading..."
                                                                className="loading-spinner"
                                                            />
                                                        ) : (
                                                            <Trash2Icon size={20} />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="category__product-details">
                                            <div className="product-card__rating-wrap">
                                                {/* <Rating
                                                    name="read-only"
                                                    value={product.rating}
                                                    precision={0.1}
                                                    readOnly
                                                    size="small"
                                                    sx={{
                                                        fontSize: "1.8rem",
                                                        color: "#ffd700",
                                                    }}
                                                /> */}
                                                {/* <span className="best-sales-item__rating-value">
                                                    ({product.rating.toFixed(1)})
                                                </span> */}
                                                <span className="product-card__time-ago">
                                                    Viewed {getTimeAgo(product.timestamp)}
                                                </span>
                                            </div>
                                            <h3>
                                                <Link
                                                    to={`/product/${product.slug}`}
                                                    className="category__product-name"
                                                >
                                                    {product.name}
                                                </Link>
                                            </h3>
                                            <p className="category__product-price">
                                                ${product.price}
                                                {product.sale > 0 && (
                                                    <span className="category__product-price--old">
                                                        ${calculateOriginalPrice(product.price, product.sale)}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="wish-list__empty">
                        <Heart className="wish-list__empty-icon" />
                        <p className="wish-list__empty-text">Your recently viewed list is empty</p>
                    </div>
                )}
            </div>
        </section>
    );
}
