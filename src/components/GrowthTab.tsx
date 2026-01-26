import React from 'react';

const GrowthTab: React.FC = () => {
    return (
        <section style={{
            backgroundColor: '#f8f9fa',
            padding: '32px',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            marginTop: '32px'
        }}>
            <h2 style={{ marginBottom: '8px', color: '#212529' }}>Currently Learning</h2>
            <p style={{ 
                fontSize: '16px',
                color: '#6c757d',
                marginBottom: '24px',
                lineHeight: '1.6'
            }}>
                I maintain a growth mindset — here are the areas I'm actively improving:
            </p>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px'
            }}>
                <li style={{
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    border: '1px solid #dee2e6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span style={{ fontSize: '20px' }}>🎯</span>
                    <span style={{ color: '#495057' }}>Advanced TypeScript & Generics</span>
                </li>
                <li style={{
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    border: '1px solid #dee2e6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span style={{ fontSize: '20px' }}>⚡</span>
                    <span style={{ color: '#495057' }}>Performance tuning with React & Next.js</span>
                </li>
                <li style={{
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    border: '1px solid #dee2e6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span style={{ fontSize: '20px' }}>♿</span>
                    <span style={{ color: '#495057' }}>Accessible UI patterns (WCAG)</span>
                </li>
                <li style={{
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    border: '1px solid #dee2e6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span style={{ fontSize: '20px' }}>🎨</span>
                    <span style={{ color: '#495057' }}>Design systems and component libraries</span>
                </li>
            </ul>
        </section>
    );
};

export default GrowthTab;