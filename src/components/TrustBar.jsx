import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TrustBar = () => {
    const items = [
        "Backed by European healthcare expertise",
        "Australian owned & operated",
        "AHPRA-compliant delivery model"
    ];

    return (
        <div style={{ backgroundColor: 'var(--gray-100)', padding: '1.5rem 0', borderY: '1px solid var(--gray-200)' }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '2rem 4rem'
            }}>
                {items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--gray-700)', fontWeight: 600, fontSize: '0.9rem' }}>
                        <CheckCircle2 size={20} style={{ color: 'var(--secondary)' }} />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustBar;
