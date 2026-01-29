import React from 'react';
import { MapPin, Mail, Send } from 'lucide-react';

const ContactForm = () => {
    return (
        <section id="contact" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
                        <p style={{ color: 'var(--gray-700)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            Have questions about our programs or partnership opportunities?
                            Fill out the form and our team will get back to you shortly.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 style={{ fontWeight: 700 }}>Location</h5>
                                    <p style={{ color: 'var(--gray-700)' }}>Warrawee, NSW 2074, Australia</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5 style={{ fontWeight: 700 }}>Email</h5>
                                    <p style={{ color: 'var(--gray-700)' }}>hello@centromedical.com.au</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-alt)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--gray-200)' }}>
                        <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--gray-300)', fontFamily: 'inherit' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
                                <input type="email" placeholder="example@email.com" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--gray-300)', fontFamily: 'inherit' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>I am a...</label>
                                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="radio" name="type" /> Individual
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="radio" name="type" /> Business
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="radio" name="type" /> Partner / Clinic
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                                <textarea rows="4" placeholder="How can we help?" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--gray-300)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', gap: '0.75rem', fontSize: '1rem', padding: '1rem' }}>
                                Send Enquiry <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
