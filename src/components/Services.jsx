import React from 'react';
import { Activity, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Lifestyle & Metabolic Health",
            description: "Structured preventive health and coaching programs focusing on long-term wellness.",
            icon: <Activity size={32} />,
            link: "#"
        },
        {
            title: "Rehabilitation Coordination",
            description: "Recovery pathway management and return-to-function support tailored to individual needs.",
            icon: <Users size={32} />,
            link: "#"
        },
        {
            title: "Corporate Wellness",
            description: "Workplace wellbeing, injury prevention & education programs for modern businesses.",
            icon: <ShieldCheck size={32} />,
            link: "#"
        }
    ];

    return (
        <section id="services" style={{ backgroundColor: 'var(--white)' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container"
            >
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h2>
                    <p style={{ color: 'var(--gray-700)', maxWidth: '600px', margin: '0 auto' }}>
                        We provide comprehensive healthcare management through three core pillars of expertise.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'var(--white)',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid var(--gray-100)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '12px',
                                background: 'rgba(0, 168, 150, 0.1)',
                                color: 'var(--secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--gray-700)', flexGrow: 1 }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
