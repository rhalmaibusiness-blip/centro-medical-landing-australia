import React from 'react';

const CTASection = () => {
    return (
        <section style={{ padding: 0 }}>
            <div className="container animated-gradient" style={{
                borderRadius: '32px',
                padding: '5rem 2rem',
                textAlign: 'center',
                color: 'white',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>
                        Ready to discuss your health program needs?
                    </h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Book a discovery call or send an enquiry — we'll respond within 1 business day.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Book a Call</a>
                        <a href="#contact" className="btn btn-outline" style={{ border: '2px solid white', color: 'white', padding: '1rem 2.5rem' }}>Send Enquiry ↓</a>
                    </div>
                </div>

                {/* Decorative background circle */}
                <div style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'var(--secondary)',
                    borderRadius: '50%',
                    opacity: 0.1,
                    filter: 'blur(50px)'
                }} />
            </div>
        </section>
    );
};

export default CTASection;
