'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GrowthTab from '../components/GrowthTab';
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
                <h1>Get In Touch</h1>
                <p className={styles.lead}>I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>

                <section className={styles.section}>
                    <h2>EmailJS Configuration</h2>
                    <button
                        onClick={() => setShowConfig(!showConfig)}
                        style={{
                            padding: '8px 16px',
                            marginBottom: '16px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        {showConfig ? 'Hide Configuration' : 'Show Configuration'}
                    </button>

                    {showConfig && (
                        <div style={{
                            backgroundColor: '#f5f5f5',
                            padding: '16px',
                            borderRadius: '4px',
                            marginBottom: '24px'
                        }}>
                            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666' }}>
                                Get your EmailJS credentials from <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">emailjs.com</a>
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div>
                                    <label htmlFor="serviceId" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Service ID</label>
                                    <input
                                        id="serviceId"
                                        type="text"
                                        name="serviceId"
                                        value={emailConfig.serviceId}
                                        onChange={handleConfigChange}
                                        placeholder="service_xxxxxxxxxx"
                                        style={{
                                            width: '100%',
                                            padding: '8px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="templateId" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Template ID</label>
                                    <input
                                        id="templateId"
                                        type="text"
                                        name="templateId"
                                        value={emailConfig.templateId}
                                        onChange={handleConfigChange}
                                        placeholder="template_xxxxxxxxxx"
                                        style={{
                                            width: '100%',
                                            padding: '8px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="publicKey" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Public Key</label>
                                    <input
                                        id="publicKey"
                                        type="text"
                                        name="publicKey"
                                        value={emailConfig.publicKey}
                                        onChange={handleConfigChange}
                                        placeholder="xxxxxxxxxx"
                                        style={{
                                            width: '100%',
                                            padding: '8px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                            </div>
                            <p style={{ fontSize: '12px', color: '#999', marginTop: '12px' }}>
                                Your credentials are stored locally in your browser and are never sent to any server.
                            </p>
                        </div>
                    )}
                </section>

                <section className={styles.section}>
                    <h2>Contact Form</h2>
                    {submitted && (
                        <div style={{
                            padding: '12px',
                            marginBottom: '16px',
                            backgroundColor: '#d4edda',
                            color: '#155724',
                            borderRadius: '4px',
                            border: '1px solid #c3e6cb'
                        }}>
                            ✓ Message sent successfully! Thank you for reaching out.
                        </div>
                    )}
                    {error && (
                        <div style={{
                            padding: '12px',
                            marginBottom: '16px',
                            backgroundColor: '#f8d7da',
                            color: '#721c24',
                            borderRadius: '4px',
                            border: '1px solid #f5c6cb'
                        }}>
                            ✗ {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Name</label>
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
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
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
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleFormChange}
                                placeholder="Your message here..."
                                required
                                rows={5}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    fontFamily: 'inherit',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                fontSize: '16px',
                                opacity: loading ? 0.6 : 1
                            }}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </section>

                <GrowthTab />
            </main>
            <Footer />
        </div>
    );
};

export default Contacts;
