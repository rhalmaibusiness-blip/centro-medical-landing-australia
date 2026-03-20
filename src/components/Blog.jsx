import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="container" style={{ textAlign: 'center', paddingTop: '120px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="gradient-text"
                        style={{ fontSize: '3rem', marginBottom: '1rem' }}
                    >
                        Our Professional Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Read our latest articles, health tips, and interesting facts from our experts.
                    </motion.p>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="blog-card glass-card"
                            >
                                <Link to={`/blog/${post.slug}`} className="blog-card-image">
                                    <img src={post.image} alt={post.title} />
                                </Link>
                                <div className="blog-card-content">
                                    <div className="blog-meta flex-between" style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> {post.date}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--gray-700)', marginBottom: '1.5rem', fontSize: '1rem' }}>{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="read-more-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 600 }}>
                                        Read more <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
