import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
                    <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }} className="gradient-text">Terms of Service</h1>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', fontWeight: 500 }}>
                        Centro-Medical Australia Pty Ltd | Last updated: 03.02.2026
                    </p>

                    <div className="tos-content" style={{ color: 'var(--gray-800)', lineHeight: '1.8' }}>
                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>1. Introduction</h3>
                            <p>
                                These Terms of Service (“Terms”) govern your access to and use of the website, services and programs provided by Centro-Medical Australia Pty Ltd (ABN 23 690 098 410, ACN 690 098 410) (“Centro-Medical”, “we”, “our”, “us”).
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                By accessing our website, booking a discovery call, submitting an enquiry or participating in any program, you agree to be bound by these Terms.
                            </p>
                            <p style={{ marginTop: '1rem', fontWeight: 600 }}>
                                If you do not agree, you must not use our services.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--gray-100)', borderRadius: '12px', borderLeft: '4px solid var(--secondary)' }}>
                            <h3 style={{ marginBottom: '1rem' }}>2. Nature of Services (Important Notice)</h3>
                            <p style={{ marginBottom: '1rem', fontWeight: 600 }}>
                                Centro-Medical Australia provides non-clinical healthcare coordination, program management, education and wellness services only.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                ⚠️ <strong>We do not provide medical advice, diagnosis, treatment or clinical services.</strong>
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>All clinical services are:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem' }}>
                                <li>Delivered exclusively by appropriately licensed Australian healthcare practitioners</li>
                                <li>Governed by the practitioner’s own professional standards, registrations and indemnities</li>
                                <li>Subject to applicable AHPRA and Australian healthcare regulations</li>
                            </ul>
                            <p style={{ marginTop: '1rem' }}>
                                Centro-Medical acts solely as a program coordinator and management service provider.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>3. Eligibility</h3>
                            <p>You must be at least 18 years of age to use our services unless otherwise agreed in writing.</p>
                            <p style={{ marginTop: '1rem' }}>By using our services, you confirm that:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li>The information you provide is accurate and complete</li>
                                <li>You have the legal capacity to enter into these Terms</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>4. Discovery Calls & Enquiries</h3>
                            <p>
                                Discovery calls and enquiries are provided for needs assessment, general program discussion and service suitability evaluation only.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                They do not constitute medical consultations and should not be relied upon as medical advice.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>5. Programs & Deliverables</h3>
                            <p>Program structures, timelines, deliverables and pricing:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li>Are agreed on a case-by-case basis</li>
                                <li>May vary depending on individual, corporate or partner engagement</li>
                                <li>May be modified where reasonably required for compliance, quality or operational reasons</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>6. Corporate & Partner Services</h3>
                            <p>Where services are provided to businesses or partners:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li>Engagement terms may be governed by separate written agreements</li>
                                <li>Centro-Medical does not assume employer responsibilities for workplace health outcomes</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>7. No Guarantees</h3>
                            <p>
                                While structured methodologies and quality assurance processes are applied, no specific health, recovery or performance outcomes are guaranteed.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>8. Fees & Payments</h3>
                            <p>Where applicable:</p>
                            <ul style={{ paddingLeft: '1.5rem', listStyle: 'disc', display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <li>Fees are disclosed prior to engagement</li>
                                <li>Invoices must be paid within the agreed timeframe</li>
                                <li>All fees are in AUD and exclusive of GST unless stated otherwise.</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>9. Cancellations & Refunds</h3>
                            <p>
                                Cancellation and refund terms are defined in the relevant proposal or agreement. Services already rendered are non-refundable.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>10. Intellectual Property</h3>
                            <p>
                                All website content, materials and program frameworks are the intellectual property of Centro-Medical Australia Pty Ltd unless otherwise stated.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>11. Limitation of Liability</h3>
                            <p>
                                To the maximum extent permitted by law, Centro-Medical is not liable for indirect or consequential loss. Liability is limited to the amount paid for the relevant service.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Nothing in these Terms excludes rights under the Australian Consumer Law (ACL).
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>12. Third-Party Providers</h3>
                            <p>
                                Centro-Medical coordinates with third-party practitioners but does not control or assume responsibility for their clinical services.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>13. Privacy</h3>
                            <p>
                                Personal information is handled in accordance with our Privacy Policy and the Privacy Act 1988 (Cth).
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>14. Compliance</h3>
                            <p>
                                Services operate within Australian healthcare compliance frameworks and AHPRA-regulated practitioner standards.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>15. Termination</h3>
                            <p>
                                Access may be suspended or terminated where misuse, breach or compliance risk is identified.
                            </p>
                        </section>

                        <section style={{ marginBottom: '2rem', padding: 0 }}>
                            <h3 style={{ marginBottom: '1rem' }}>16. Governing Law</h3>
                            <p>
                                These Terms are governed by the laws of New South Wales, Australia.
                            </p>
                        </section>

                        <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '12px' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>17. Contact</h3>
                            <p style={{ marginBottom: '0.5rem' }}><strong>Centro-Medical Australia Pty Ltd</strong></p>
                            <p style={{ marginBottom: '0.5rem' }}>Warrawee, NSW 2074, Australia</p>
                            <p style={{ marginBottom: '0.5rem' }}>📧 <a href="mailto:info@centro-medical.com.au" style={{ color: 'var(--accent)' }}>info@centro-medical.com.au</a></p>
                            <p>📞 <a href="tel:0409351223" style={{ color: 'var(--accent)' }}>0409 351 223</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
