import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--bg-alt)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                <Link
                    to="/"
                    className="btn btn-outline"
                    style={{
                        marginBottom: '2rem',
                        padding: '0.5rem 1rem',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <ShieldCheck size={40} color="var(--secondary)" />
                        <h1 style={{ marginBottom: 0, fontSize: '2.5rem' }} className="gradient-text">Privacy Policy</h1>
                    </div>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', fontWeight: 500 }}>
                        Centro-Medical Australia Pty Ltd | Last updated: 03.02.2026
                    </p>

                    <div className="policy-content" style={{ color: 'var(--gray-800)', lineHeight: '1.8' }}>
                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>1. Introduction</h3>
                            <p>
                                Centro-Medical Australia Pty Ltd (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information in accordance with the <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>2. Information We Collect</h3>
                            <p>We may collect personal information when you interact with our website, especially through our contact forms or by booking a discovery call. This includes:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li><strong>Identity Data:</strong> Full name.</li>
                                <li><strong>Contact Data:</strong> Email address and phone number.</li>
                                <li><strong>Enquiry Data:</strong> Information regarding the nature of your interest (e.g., individual, corporate, or partner enquiry).</li>
                                <li><strong>Message Content:</strong> Any additional information you provide in the message field.</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>3. How We Use Your Information</h3>
                            <p>We use the collected information for the following purposes:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li>To respond to your enquiries submitted via our website.</li>
                                <li>To coordinate discovery calls and assess service suitability.</li>
                                <li>To provide program management and healthcare coordination services.</li>
                                <li>To comply with legal and regulatory obligations.</li>
                            </ul>
                            <p style={{ marginTop: '1rem' }}><strong>Note:</strong> We do not use your information for clinical medical diagnosis. As stated in our Terms, we provide coordination and management services only.</p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>4. Data Security</h3>
                            <p>
                                We take reasonable steps to protect your personal information from unauthorized access, loss, or misuse. Information submitted through our contact form is processed using the Resend email service and delivered to our secure internal email system.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>5. Disclosure of Information</h3>
                            <p>We do not sell or rent our email lists to third parties. We may disclose your information to:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li>Relevant third-party healthcare practitioners (only with your explicit consent or as part of a coordinated program).</li>
                                <li>Service providers who assist in our business operations (e.g., IT hosting and email services).</li>
                                <li>Government or law enforcement bodies where required by law.</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>6. Cookies and Tracking</h3>
                            <p>
                                Our website may use cookies to improve user experience and analyze traffic. You can adjust your browser settings to refuse cookies, though some parts of the site may not function properly as a result.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>7. Your Rights</h3>
                            <p>Under the Privacy Act, you have the right to:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li>Access the personal information we hold about you.</li>
                                <li>Request correction of inaccurate or incomplete data.</li>
                                <li>Request the deletion of your data (under certain circumstances).</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>8. Changes to this Policy</h3>
                            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The "Last updated" date at the top will reflect the most recent version.</p>
                        </section>

                        <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--bg-alt)', borderRadius: '12px', border: '1px solid var(--gray-200)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>9. Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>
                            <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Centro-Medical Australia Pty Ltd</strong></p>
                            <p style={{ marginBottom: '0.5rem' }}>📧 <a href="mailto:info@centromedical.com.au" style={{ color: 'var(--secondary)', fontWeight: 600 }}>info@centromedical.com.au</a></p>
                            <p>📞 <a href="tel:0409351223" style={{ color: 'var(--secondary)', fontWeight: 600 }}>0409 351 223</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
