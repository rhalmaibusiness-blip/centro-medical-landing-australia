import React from 'react';
import { motion } from 'framer-motion';

const WhyLocal = () => {
    const features = [
        { title: "Compliance Oversight", desc: "Local regulatory management and adherence to Australian standards." },
        { title: "Quality Control", desc: "Hands-on stakeholder management and rigorous QA processes." },
        { title: "Growth & BD", desc: "Commercial expansion and local partnership development from within AU." }
    ];

    return (
        <section id="why-local" style={{ backgroundColor: 'var(--white)' }}>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container"
            >
                <h2 className="section-title">Why Australian-Based Management Matters</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{
                                padding: '2.5rem',
                                borderRadius: '16px',
                                background: 'var(--primary)',
                                color: 'white',
                                textAlign: 'center',
                                boxShadow: '0 10px 30px rgba(10, 25, 47, 0.2)'
                            }}
                        >
                            <h4 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}>{f.title}</h4>
                            <p style={{ opacity: 0.9 }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default WhyLocal;
