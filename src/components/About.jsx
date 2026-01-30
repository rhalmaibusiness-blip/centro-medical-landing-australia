import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ backgroundColor: 'var(--bg-alt)' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        borderRadius: '24px',
                        height: '400px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--gray-100)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}
                >
                    <img
                        src="/about_team_professional.png"
                        alt="Centro-Medical Team"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                        <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>
                            "Combining European clinical excellence with Australian healthcare standards."
                        </p>
                    </div>
                </motion.div>

                <div>
                    <span style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem' }}>Who We Are</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1.5rem' }}>Elevating Healthcare Management in Australia</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                        Centro-Medical Australia Pty Ltd is an Australian proprietary company incorporated in New South Wales (Registered 18 August 2025). Onshore coordination and governance ensure quality, compliance and effective local delivery.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', marginBottom: '2rem' }}>
                        Established as the Australian arm of a proven European medical group, we bring operational excellence and clinical program expertise to the local market.
                    </p>

                    <ul style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            "Scalable, compliant model",
                            "Local practitioner partnerships",
                            "Strong governance & QA"
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
