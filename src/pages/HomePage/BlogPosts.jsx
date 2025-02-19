import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import news from "~/data/news.json";
import "~/styles/blogPosts.css";
export default function BlogPosts() {
    return (
        <>
            <section className="blog-posts">
                <div className="container">
                    <div className="section-top">
                        <h2 className="section-title">News Posts</h2>
                        <p className="section-subtitle">
                            Explore our latest blog posts for helpful tips, trends, and insights on school uniforms,
                            fashion, and more!
                        </p>
                    </div>

                    <div className="blog-posts__grid">
                        {/* Blog 1 */}
                        {news
                            .reverse()
                            .slice(0, 3)
                            .map((item) => (
                                <article className="blog-posts__item" key={item.id}>
                                    <figure>
                                        <Link to={`/blog/news/${item.slug}`}>
                                            <img src={item.thumbnail} alt={item.name} className="blog-posts__image" />
                                        </Link>
                                    </figure>
                                    <div className="blog-posts__content">
                                        <h3>
                                            <Link
                                                to={`/blog/news/${item.slug}`}
                                                className="blog-posts__name line-clamp"
                                                style={{ "--line-clamp": 3 }}
                                            >
                                                {item.name}
                                            </Link>
                                        </h3>
                                        <Link to={`/blog/news/${item.slug}`} className="blog-posts__link">
                                            Read more
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
