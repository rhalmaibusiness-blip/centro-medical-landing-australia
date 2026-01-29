import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhoWeServe = () => {
    const [activeTab, setActiveTab] = useState('Individuals');

    const content = {
        'Individuals': {
            title: 'For Individuals',
            desc: 'Adults seeking structured preventive health, lifestyle improvement and recovery programs.',
            points: ['Metabolic health programs', 'Rehabilitation coordination', 'Ongoing lifestyle coaching']
        },
        'Businesses': {
            title: 'For Businesses',
            desc: 'Corporate entities looking to enhance employee wellbeing and manage workplace injury effectively.',
            points: ['Employee wellness audits', 'Injury prevention workshops', 'Custom corporate health plans']
        },
        'Partners': {
            title: 'For Partners',
            desc: 'Local practitioner partnerships and clinics seeking management support and program expertise.',
            points: ['Clinical program integration', 'Governance support', 'Scalable delivery models']
        }
    };

    return (
        <section id="who-we-serve" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <h2 className="section-title">Who We Serve</h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {Object.keys(content).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '50px',
                                border: activeTab === tab ? 'none' : '1px solid var(--gray-200)',
                                backgroundColor: activeTab === tab ? 'var(--primary)' : 'transparent',
                                color: activeTab === tab ? 'white' : 'var(--gray-700)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div style={{
                    background: 'var(--bg-alt)',
                    padding: '4rem',
                    borderRadius: '32px',
                    minHeight: '300px'
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{content[activeTab].title}</h3>
                            <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', marginBottom: '2rem', maxWidth: '700px' }}>
                                {content[activeTab].desc}
                            </p>
                            <ul style={{ display: 'grid', gap: '1rem' }}>
                                {content[activeTab].points.map((point, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 500, fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--secondary)' }}>→</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
