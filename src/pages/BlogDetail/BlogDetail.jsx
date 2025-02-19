import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Share2, Facebook, Twitter, MoreHorizontal } from "lucide-react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "~/styles/blogDetail.css";
import { Tooltip } from "@mui/material";
import { toast } from "react-hot-toast";

export default function BlogDetail({ article }) {
    const [showShareMenu, setShowShareMenu] = useState(false);

    if (!article) {
        return <div>Loading...</div>;
    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const handleSocialShare = (platform) => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`Check out this article: ${article.name}`);

        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${text}&media=${encodeURIComponent(
                article.thumbnail,
            )}`,
        };

        window.open(shareUrls[platform], "_blank", "width=600,height=400");
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: article.name,
                    text: `Check out this article: ${article.name}`,
                    url: window.location.href,
                })
                .catch((error) => {
                    console.error("Error sharing:", error);
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Link copied to clipboard!");
                });
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        }
    };

    return (
        <article className="blog-detail">
            <div className="container">
                <motion.header
                    className="blog-detail__header"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="blog-detail__title">{article.name}</h1>
                    <div className="blog-detail__meta">
                        <div className="blog-detail__meta-item">
                            <Calendar size={20} />
                            <span>{formatDate(article.published_date)}</span>
                        </div>
                        <div className="blog-detail__meta-item">
                            <User size={20} />
                            <span>{article.author}</span>
                        </div>
                    </div>
                </motion.header>

                <motion.img
                    src={article.thumbnail}
                    alt={article.name}
                    className="blog-detail__featured-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />

                <motion.div
                    className="blog-detail__content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />

                    <div className="blog-detail__share">
                        <div className="blog-detail__share-container">
                            <Tooltip content="Share">
                                <motion.button
                                    className="btn btn--secondary blog-detail__share-btn"
                                    onClick={() => setShowShareMenu(!showShareMenu)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Share2 size={20} />
                                </motion.button>
                            </Tooltip>

                            {showShareMenu && (
                                <div className="blog-detail__share-menu">
                                    <button onClick={() => handleSocialShare("facebook")}>
                                        <Facebook size={20} /> Facebook
                                    </button>
                                    <button onClick={() => handleSocialShare("twitter")}>
                                        <Twitter size={20} /> Twitter
                                    </button>
                                    <button onClick={() => handleSocialShare("pinterest")}>
                                        <PinterestIcon sx={{ fontSize: 20 }} /> Pinterest
                                    </button>
                                    <button onClick={handleShare} className="hiddenMobile">
                                        <MoreHorizontal size={20} /> More
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </article>
    );
}
