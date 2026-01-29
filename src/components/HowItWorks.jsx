import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { title: "Discovery Call", desc: "Needs assessment and consultation." },
        { title: "Program Design", desc: "Tailored program and coordination planning." },
        { title: "Delivery Phase", desc: "Online & onsite (where applicable)." },
        { title: "Follow-up & QA", desc: "Reporting, quality assurance and adjustment." }
    ];

    return (
        <section id="how-it-works" style={{ backgroundColor: 'var(--bg-alt)' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container"
            >
                <h2 className="section-title">How It Works</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    position: 'relative',
                    marginTop: '4rem'
                }}>
                    {/* Connecting Line (Desktop) */}
                    <div style={{
                        display: 'none',
                        position: 'absolute',
                        top: '40px',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'var(--gray-200)',
                        zIndex: 1
                    }} className="step-line" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--white)',
                                border: '4px solid var(--secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                color: 'var(--primary)',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                            }}>
                                {index + 1}
                            </div>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{step.title}</h4>
                            <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div style={{
                    marginTop: '5rem',
                    padding: '2rem',
                    backgroundColor: 'rgba(0, 168, 150, 0.05)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 168, 150, 0.1)',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-800)', margin: 0 }}>
                        <strong>Important:</strong> Centro-Medical Australia provides non-clinical coordination and program services.
                        Clinical components are delivered exclusively by appropriately licensed Australian practitioners.
                    </p>
                </div>
            </motion.div>
            <style jsx>{`
        @media (min-width: 1024px) {
          .step-line { display: block !important; }
        }
      `}</style>
        </section>
    );
};

export default HowItWorks;
