import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import CTASection from './CTASection';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="container not-found-post" style={{ textAlign: 'center', padding: '150px 0', minHeight: '60vh' }}>
                <h2>The requested article could not be found.</h2>
                <button onClick={() => navigate('/blog')} className="btn btn-primary" style={{ marginTop: '2rem' }}>
                    Back to blog
                </button>
            </div>
        );
    }

    return (
        <article className="blog-post-page">
            <div className="blog-post-header relative" style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '160px 0 80px',
                color: 'var(--white)'
            }}>
                <div className="overlay" style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(10, 25, 47, 0.6) 0%, rgba(10, 25, 47, 0.9) 100%)',
                    zIndex: 1
                }}></div>

                <div className="container relative" style={{ zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
                    <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', marginBottom: '2rem', fontWeight: 600 }}>
                        <ArrowLeft size={18} /> Back to blog
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--white)', lineHeight: 1.2 }}
                    >
                        {post.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem' }}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} /> {post.author}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {post.readTime}</span>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
                <motion.div
                    className="post-content glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ padding: '3rem', borderRadius: '16px', background: 'var(--white)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            <CTASection />

        </article>
    );
};

export default BlogPost;
