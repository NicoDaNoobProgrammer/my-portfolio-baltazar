import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/layout.module.css';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [showConfig, setShowConfig] = useState(false);

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (!fullName || !email || !message) {
            setError('Please fill in all fields.');
            setLoading(false);
            return;
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: fullName,
                    from_email: email,
                    message: message,
                }
            );
            setSuccess('Message sent successfully!');
            setFullName('');
            setEmail('');
            setMessage('');
        } catch (err: any) {
            setError('Failed to send message. Please check your EmailJS configuration');
            console.error('EmailJS Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1>Get In Touch</h1>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>
                        I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                    </p>

                    {/* EmailJS Configuration Section */}
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>EmailJS Configuration</h2>
                        <button
                            onClick={() => setShowConfig(!showConfig)}
                            style={{
                                backgroundColor: '#0070f3',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}
                        >
                            {showConfig ? '✓' : '⊕'} {showConfig ? 'Hide Configuration' : 'Show Configuration'}
                        </button>
                        {showConfig && (
                            <div style={{
                                backgroundColor: '#f5f5f5',
                                padding: '1rem',
                                marginTop: '1rem',
                                borderRadius: '4px',
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                color: '#333'
                            }}>
                                <p><strong>Service ID:</strong> {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}</p>
                                <p><strong>Template ID:</strong> {process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}</p>
                                <p><strong>Public Key:</strong> {process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}</p>
                            </div>
                        )}
                    </section>

                    {/* Contact Form */}
                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send me a Message</h2>

                        {error && (
                            <div style={{
                                backgroundColor: '#fce4ec',
                                border: '1px solid #f48fb1',
                                color: '#c2185b',
                                padding: '1rem',
                                borderRadius: '4px',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <span>✕</span> {error}
                            </div>
                        )}

                        {success && (
                            <div style={{
                                backgroundColor: '#e8f5e9',
                                border: '1px solid #81c784',
                                color: '#2e7d32',
                                padding: '1rem',
                                borderRadius: '4px',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <span>✓</span> {success}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                    Full Name <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Your full name"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '1rem',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                    Email Address <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@example.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '1rem',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                                    Message <span style={{ color: 'red' }}>*</span>
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your message here..."
                                    rows={6}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '1rem',
                                        boxSizing: 'border-box',
                                        fontFamily: 'inherit',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    backgroundColor: '#4caf50',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '4px',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    opacity: loading ? 0.7 : 1
                                }}
                            >
                                {loading ? 'Sending...' : '✓ Send Message'}
                            </button>
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
