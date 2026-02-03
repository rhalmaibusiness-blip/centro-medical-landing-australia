import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Individual',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', type: 'Individual', message: '' });
            } else {
                const detailedError = data.error || data.detail || 'Failed to send message';
                throw new Error(detailedError);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message);
        }
    };

    if (status === 'success') {
        return (
            <section id="contact" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
                    >
                        <CheckCircle size={80} color="var(--secondary)" />
                        <h2 style={{ fontSize: '2.5rem' }}>Thank You!</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', maxWidth: '500px' }}>
                            Your enquiry has been received. Our team will get back to you shortly.
                        </p>
                        <button
                            className="btn btn-primary"
                            onClick={() => setStatus('idle')}
                            style={{ marginTop: '1rem' }}
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

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
                                    <p style={{ color: 'var(--gray-700)' }}>
                                        <a href="mailto:info@centro-medical.com.au" style={{ color: 'inherit' }}>info@centro-medical.com.au</a>
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 style={{ fontWeight: 700 }}>Phone</h5>
                                    <p style={{ color: 'var(--gray-700)' }}>
                                        <a href="tel:0409351223" style={{ color: 'inherit' }}>0409 351 223</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-alt)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--gray-200)' }}>
                        <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={handleSubmit}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--gray-300)', fontFamily: 'inherit' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    required
                                    style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--gray-300)', fontFamily: 'inherit' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>I am a...</label>
                                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                    {['Individual', 'Business', 'Partner / Clinic'].map(t => (
                                        <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                            <input
                                                type="radio"
                                                name="type"
                                                value={t}
                                                checked={formData.type === t}
                                                onChange={handleChange}
                                            /> {t}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="How can we help?"
                                    required
                                    style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--gray-300)', fontFamily: 'inherit', resize: 'vertical' }}
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div style={{ color: 'red', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <XCircle size={16} /> {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={status === 'loading'}
                                style={{ width: '100%', gap: '0.75rem', fontSize: '1rem', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                {status === 'loading' ? (
                                    <>Processing... <Loader2 size={18} className="animate-spin" /></>
                                ) : (
                                    <>Send Enquiry <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

