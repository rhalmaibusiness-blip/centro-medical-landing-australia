import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)',
            paddingTop: '120px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '4rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <span style={{
                        color: 'var(--secondary)',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontSize: '0.875rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Centro-Medical Australia Pty Ltd
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                        Australian Healthcare <br />
                        <span className="gradient-text">Services & Management Hub</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        Preventive health, rehabilitation coordination & corporate wellness programs —
                        delivered with European expertise and local compliance.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <a href="#contact" className="btn btn-primary" style={{ gap: '0.5rem' }}>
                            Book a Discovery Call <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn btn-outline">
                            Request Corporate Proposal
                        </a>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '1rem 0', borderTop: '1px solid var(--gray-200)', color: 'var(--gray-700)', fontSize: '0.9rem' }}>
                        <strong>Warrawee, NSW</strong> • ABN 23 690 098 410 • ACN 690 098 410
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ position: 'relative' }}
                    className="hero-image"
                >
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        right: '20px',
                        bottom: '20px',
                        border: '2px solid var(--secondary)',
                        borderRadius: '24px',
                        zIndex: -1
                    }} />
                    <img
                        src="/hero_healthcare_abstract.png"
                        alt="Healthcare Management Visualization"
                        style={{
                            width: '100%',
                            borderRadius: '24px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                            display: 'block'
                        }}
                    />
                </motion.div>
            </div>

            <style jsx>{`
        @media (min-width: 1024px) {
          .container {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-image { order: -1; margin-bottom: 2rem; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
