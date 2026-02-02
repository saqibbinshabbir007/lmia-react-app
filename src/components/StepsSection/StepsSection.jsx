import React from 'react';
import { ArrowRight } from 'lucide-react';
import './StepsSection.css';

const StepsSection = () => {
    const steps = [
        { 
            id: 1, 
            title: '1. Career Profile & Job Search Preparation',
            desc: 'We help you understand your professional profile, target the right roles, and prepare job‑ready resumes and outreach strategies aligned with Canadian market expectations.'
        },
        { 
            id: 2, 
            title: '2. Job Search Strategy & Employer Outreach Training',
            desc: 'Learn how to use public job platforms, networking methods, and professional outreach techniques to approach employers on your own with clarity and confidence.'
        },
        { 
            id: 3, 
            title: '3. Process Awareness & Next‑Step Guidance',
            desc: 'Get clear guidance on understanding the hiring journey, employer expectations, and general work permit pathways so you know what to expect and where to seek official information.'
        },
    ];

    return (
        <section className="sts-section">
            <div className="sts-outer-container">
                {/* Background Image Layer */}
                <div 
                    className="sts-bg-layer" 
                    style={{ backgroundImage: 'url(/assets/images/steps/dream-bg-2.webp)' }}
                ></div>

                {/* Content Column */}
                <div className="sts-content-column">
                    <div className="sts-pattern-layer">
                        <div 
                            className="sts-pattern-1" 
                            style={{ backgroundImage: 'url(/assets/images/steps/shape-51.png)' }}
                        ></div>
                        <div 
                            className="sts-pattern-2" 
                            style={{ backgroundImage: 'url(/assets/images/steps/shape-52.png)' }}
                        ></div>
                    </div>

                    <div className="sts-content-box">
                        <div className="sts-sec-title">
                            <span className="sts-sub-title">Your Pathway to Understanding the Canadian Job Market</span>
                            <h2>A Clear Step by Step Coaching Framework</h2>
                        </div>
                        
                        <div className="sts-text">
                            <p>
                                At ProVisa Coach Consulting, we focus on education and coaching. Our role is 
                                to teach and guide foreign workers on how to independently navigate the 
                                Canadian job market from preparation to outreach without job placement 
                                or employer matching.
                            </p>
                        </div>

                        <ul className="sts-list-item">
                            {steps.map(step => (
                                <li key={step.id}>
                                    <h4 className="sts-step-title">{step.title}</h4>
                                    <p className="sts-step-desc">{step.desc}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="sts-btn-box">
                            <a href="/contact" className="sts-theme-btn">
                                <span>Start Job Search Coaching</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
