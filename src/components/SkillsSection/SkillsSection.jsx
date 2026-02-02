import React from 'react';
import { CheckCircle } from "lucide-react";
import './SkillsSection.css';

const SkillsSection = () => {
    const industries = [
        { 
            id: 1, 
            label: 'Skilled Trades (Trucking & Construction)', 
            desc: 'Understanding hiring trends and job search approaches' 
        },
        { 
            id: 2, 
            label: 'IT Professionals & Engineering', 
            desc: 'Coaching on market expectations and application strategies' 
        },
        { 
            id: 3, 
            label: 'Health Care & Hospitality', 
            desc: 'Guidance on job search preparation and professional standards' 
        }
    ];

    return (
        <section className="sks-section">
            {/* Patterns */}
            <div 
                className="sks-pattern-layer-2" 
                style={{ backgroundImage: 'url(/assets/images/skills/shape-49.png)' }}
            ></div>
            <div 
                className="sks-pattern-layer-3" 
                style={{ backgroundImage: 'url(/assets/images/skills/shape-50.png)' }}
            ></div>

            <div className="auto-container">
                <div className="sks-layout-row">
                    {/* Left: Text content */}
                    <div className="sks-content-col">
                        <div className="sks-content-box">
                            <div className="sks-sec-title sks-mb_30">
                                <span className="sks-sub-title">Proven Experience in Canadian Job Search Coaching</span>
                                <h2>Strategic Coaching for the <br />Canadian Job Market</h2>
                            </div>
                            
                            <div className="sks-text sks-mb_40">
                                <p>
                                    At ProVisa Coach Consulting, our role is to educate and guide foreign 
                                    workers on how the Canadian job market works. Through structured 
                                    coaching and practical insights, we help individuals understand 
                                    job search strategies, industry expectations, and professional 
                                    outreach empowering them to take informed action on their own.
                                </p>
                            </div>

                            <div className="sks-industries-section">
                                <h4 className="sks-industries-title">Industries We Provide Job Search Guidance For</h4>
                                <div className="sks-industries-list">
                                    {industries.map(industry => (
                                        <div className="sks-industry-item" key={industry.id}>
                                            <div className="sks-industry-header">
                                                <CheckCircle className="sks-check-icon" size={22} />
                                                <h5>{industry.label}</h5>
                                            </div>
                                            <p className="sks-industry-desc">{industry.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image with design like reference */}
                    <div className="sks-image-col">
                        <div className="sks-image-wrap">
                            <div className="sks-image-shape-bg"></div>
                            <figure className="sks-image-layer">
                                <img src="/assets/images/skills/travel-2.webp" alt="Travel and Success" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
