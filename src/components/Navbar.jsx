import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                    Centro<span style={{ color: 'var(--secondary)' }}>-Medical</span>
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} style={{ fontSize: '0.95rem' }}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <a href="tel:0409351223" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary)' }}>
                            <Phone size={18} />
                            0409 351 223
                        </a>
                        <a href="/#contact" className="btn btn-primary">Book a Call</a>
                    </div>
                </div>


                {/* Mobile Toggle */}
                <div style={{ display: 'block' }} className="mobile-toggle">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'var(--white)',
                    padding: '2rem',
                    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'center'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ fontSize: '1.1rem', fontWeight: 500 }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="tel:0409351223" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary)' }} onClick={() => setMobileMenuOpen(false)}>
                        <Phone size={20} />
                        0409 351 223
                    </a>
                    <a href="/#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Book a Call</a>

                </div>
            )}

            <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
