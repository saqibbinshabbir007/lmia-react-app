import React, { useEffect, useRef } from 'react';
import './EducationSection.css';

const EducationSection = () => {
    const parallaxRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current && containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Only run when section is in viewport
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const speed = 0.15;
                    const yPos = (rect.top) * speed;
                    parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
        };

        // Use requestAnimationFrame for smoother updates
        let rafId;
        const onScroll = () => {
            rafId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const countries = [
        { id: 2, name: 'Canada', flag: '/assets/images/icons/flag-2.png' }
    ];

    return (
        <section ref={containerRef} className="eds-section p_relative">
            {/* Background Layers */}
            <div 
                className="eds-bg-layer-2" 
                style={{ backgroundImage: 'url(/assets/images/education/shape-16.png)' }}
            ></div>
            
            <div 
                ref={parallaxRef}
                className="eds-parallax-bg" 
                style={{ 
                    backgroundImage: 'url(/assets/images/education/education-bg.jpg)',
                    willChange: 'transform' // Hardware acceleration hint
                }}
            ></div>

            {/* Main Floating Image */}
            <figure className="eds-image-layer">
                <img src="/assets/images/education/men-1.webp" alt="Counseling" loading="lazy" />
            </figure>

            {/* Decorative Shape */}
            <div className="eds-shape">
                <div 
                    className="eds-shape-2" 
                    style={{ backgroundImage: 'url(/assets/images/education/shape-19.png)' }}
                ></div>
            </div>

            <div className="auto-container">
                <div className="eds-content-box">
                    <h2>Master the Strategy with <br /><span>Elite Coaching for</span> Canadian Careers</h2>
                    <p>
                        Stop searching and start winning with a high impact coaching program 
                        designed to make you a market ready professional. We teach you the 
                        elite networking frameworks and outreach mastery needed to engage 
                        directly with verified Canadian employers. We don't just give you a map 
                        because we coach you through every strategic move from profile 
                        optimization to independent documentation guidance to ensure you 
                        secure your professional future in Canada on your own terms.
                    </p>
                    
                    <ul className="eds-country-list">
                        {countries.map(country => (
                            <li key={country.id}>
                                <div className="eds-flag">
                                    <img src={country.flag} alt={country.name} />
                                </div>
                                <span>{country.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
