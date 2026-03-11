'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/layout.module.css';
import emailjs from '@emailjs/browser';

const Contacts: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [emailConfig, setEmailConfig] = useState({
        serviceId: 'service_rkfvzam',
        templateId: 'template_0plhm3q',
        publicKey: '2yeEqmz92k1ZdsLaV'
    });

    const [showConfig, setShowConfig] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Load from localStorage on client side
        const savedServiceId = localStorage.getItem('emailjs_serviceId');
        const savedTemplateId = localStorage.getItem('emailjs_templateId');
        const savedPublicKey = localStorage.getItem('emailjs_publicKey');

        if (savedServiceId || savedTemplateId || savedPublicKey) {
            setEmailConfig({
                serviceId: savedServiceId || 'service_rkfvzam',
                templateId: savedTemplateId || 'template_0plhm3q',
                publicKey: savedPublicKey || '2yeEqmz92k1ZdsLaV'
            });
        }
    }, []);

    const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newConfig = { ...emailConfig, [name]: value };
        setEmailConfig(newConfig);
        localStorage.setItem(`emailjs_${name}`, value);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
            setError('Please configure EmailJS credentials first.');
            setLoading(false);
            return;
        }

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.');
            setLoading(false);
            return;
        }

        try {
            emailjs.init(emailConfig.publicKey);
            
            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'baltazarnicopaolo@gmail.com'
                }
            );

            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setError('Failed to send message. Please check your EmailJS configuration.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: '12px' }}>Get In Touch</h1>
                    <p className={styles.lead} style={{ marginBottom: '48px', fontSize: '18px' }}>
                        I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                    </p>

                    {/* Config Section */}
                    <section className={styles.section} style={{ backgroundColor: '#f9f9f9', padding: '24px', borderRadius: '8px', marginBottom: '48px' }}>
                        <h2 style={{ marginBottom: '16px' }}>EmailJS Configuration</h2>
                        <button
                            onClick={() => setShowConfig(!showConfig)}
                            style={{
                                padding: '10px 20px',
                                marginBottom: '16px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                        >
                            {showConfig ? '✕ Hide Configuration' : '⚙ Show Configuration'}
                        </button>

                        {showConfig && (
                            <div style={{
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '6px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
                                    Get your EmailJS credentials from <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>emailjs.com</a>
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                                    <div>
                                        <label htmlFor="serviceId" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Service ID</label>
                                        <input
                                            id="serviceId"
                                            type="text"
                                            name="serviceId"
                                            value={emailConfig.serviceId}
                                            onChange={handleConfigChange}
                                            placeholder="service_xxxxxxxxxx"
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px',
                                                boxSizing: 'border-box',
                                                fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="templateId" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Template ID</label>
                                        <input
                                            id="templateId"
                                            type="text"
                                            name="templateId"
                                            value={emailConfig.templateId}
                                            onChange={handleConfigChange}
                                            placeholder="template_xxxxxxxxxx"
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px',
                                                boxSizing: 'border-box',
                                                fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="publicKey" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Public Key</label>
                                        <input
                                            id="publicKey"
                                            type="text"
                                            name="publicKey"
                                            value={emailConfig.publicKey}
                                            onChange={handleConfigChange}
                                            placeholder="xxxxxxxxxx"
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px',
                                                boxSizing: 'border-box',
                                                fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                </div>
                                <p style={{ fontSize: '12px', color: '#999', marginTop: '16px', backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '4px', margin: '16px 0 0 0' }}>
                                    🔒 Your credentials are stored locally in your browser and are never sent to any server.
                                </p>
                            </div>
                        )}
                    </section>

                    {/* Contact Form Section */}
                    <section className={styles.section}>
                        <h2 style={{ marginBottom: '24px' }}>Send me a Message</h2>
                        
                        {submitted && (
                            <div style={{
                                padding: '16px',
                                marginBottom: '24px',
                                backgroundColor: '#d4edda',
                                color: '#155724',
                                borderRadius: '6px',
                                border: '1px solid #c3e6cb',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '20px' }}>✓</span>
                                <span>Message sent successfully! Thank you for reaching out. I'll get back to you soon.</span>
                            </div>
                        )}
                        
                        {error && (
                            <div style={{
                                padding: '16px',
                                marginBottom: '24px',
                                backgroundColor: '#f8d7da',
                                color: '#721c24',
                                borderRadius: '6px',
                                border: '1px solid #f5c6cb',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '20px' }}>✗</span>
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '15px' }}>Full Name *</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Your name"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '6px',
                                        fontSize: '15px',
                                        boxSizing: 'border-box',
                                        transition: 'border-color 0.2s',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                                    onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '15px' }}>Email Address *</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="your.email@example.com"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '6px',
                                        fontSize: '15px',
                                        boxSizing: 'border-box',
                                        transition: 'border-color 0.2s',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                                    onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '15px' }}>Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Your message here... Tell me about your project, question, or inquiry."
                                    required
                                    rows={6}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '6px',
                                        fontSize: '15px',
                                        fontFamily: 'inherit',
                                        boxSizing: 'border-box',
                                        transition: 'border-color 0.2s',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                                    onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    padding: '14px 28px',
                                    backgroundColor: loading ? '#ccc' : '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    transition: 'background-color 0.2s',
                                    alignSelf: 'flex-start'
                                }}
                                onMouseOver={(e) => !loading && (e.currentTarget.style.backgroundColor = '#218838')}
                                onMouseOut={(e) => !loading && (e.currentTarget.style.backgroundColor = '#28a745')}
                            >
                                {loading ? '⏳ Sending...' : '📧 Send Message'}
                            </button>
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contacts;
