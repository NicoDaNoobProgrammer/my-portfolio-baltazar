import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Nico Paolo L. Baltazar</h1>
                    <h2 className="hero-occupation">Frontend Developer</h2>
                    <p className="hero-sub">I build accessible, performant web applications that solve real user problems.</p>
                    <div className="hero-ctas">
                        <a href="#projects" className="cta-button">Featured Work</a>
                        <a href="/about" className="secondary-cta">About Me</a>
                    </div>
                </div>
                {/* avatar sits fixed on the right via .pageAvatar; keep empty spacer for layout balance on very large screens */}
                <div className="hero-spacer" aria-hidden />
            </div>

            <a href="#about" className="scroll-hint" aria-label="Scroll to about">
                <span className="scroll-text">Scroll down to see other texts</span>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="#0b1220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </section>
    );
};

export default Hero;