import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '5rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', display: 'block' }}>
                            Centro<span style={{ color: 'var(--secondary)' }}>-Medical</span>
                        </Link>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.8' }}>
                            Centro-Medical Australia Pty Ltd<br />
                            Warrawee, NSW 2074, Australia<br />
                            Phone: <a href="tel:0409351223" style={{ color: 'white' }}>0409 351 223</a><br />
                            ABN 23 690 098 410<br />
                            ACN 690 098 410
                        </p>
                    </div>

                    <div>
                        <h5 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>Quick Links</h5>
                        <ul style={{ display: 'grid', gap: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#how-it-works">How It Works</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>Legal</h5>
                        <ul style={{ display: 'grid', gap: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h5 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>Connect</h5>
                        <ul style={{ display: 'grid', gap: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} Centro-Medical Australia Pty Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
