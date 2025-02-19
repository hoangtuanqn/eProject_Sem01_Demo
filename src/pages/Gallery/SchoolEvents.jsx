import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomInIcon as Zoom, X } from "lucide-react";
import "~/styles/gallery.css";
import schoolEvents from "~/data/schoolEvents.json";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="gallery">
            <div className="container">
                {/* <h1 className="gallery__title">Our Gallery</h1> */}

                <motion.div
                    className="gallery__grid"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    <AnimatePresence>
                        {schoolEvents.map((item) => (
                            <motion.div
                                key={item.id}
                                className="gallery__item"
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedImage(item)}
                            >
                                <img src={item.src || "/placeholder.svg"} alt={item.category} />
                                <div className="gallery__item-overlay">
                                    <Zoom size={24} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="gallery__modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="gallery__modal-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.category} />
                            <button className="gallery__modal-close" onClick={() => setSelectedImage(null)}>
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
export default memo(Gallery);
