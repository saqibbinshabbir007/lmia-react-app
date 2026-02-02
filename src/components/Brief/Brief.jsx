import React from 'react';
import './Brief.css';

const Brief = () => {
    const highlights = [
        { id: 1, title: '1. Employer Outreach Strategies' },
        { id: 2, title: '2. Job Search Platform Training' },
        { id: 3, title: '3. Process Awareness & Guidance' },
    ];

    return (
        <section className="brf-section">
            <div className="brf-outer-container">
                {/* Background Image Layer */}
                <div 
                    className="brf-bg-layer" 
                    style={{ backgroundImage: 'url(/assets/images/brief/brief-bg.webp)' }}
                ></div>

                {/* Content Column */}
                <div className="brf-content-column">
                    <div className="brf-pattern-layer">
                        <div 
                            className="brf-pattern-1" 
                            style={{ backgroundImage: 'url(/assets/images/brief/shape-51.png)' }}
                        ></div>
                        <div 
                            className="brf-pattern-2" 
                            style={{ backgroundImage: 'url(/assets/images/brief/shape-52.png)' }}
                        ></div>
                    </div>

                    <div className="brf-content-box">
                        <div className="brf-sec-title">
                            <span className="brf-sub-title">Expert Career Coaches</span>
                            <h2>Learn How to Find Employers in Canada Your Step by Step Guide</h2>
                        </div>
                        
                        <div className="brf-text">
                            <p>
                                At ProVisa Coach Consulting we are dedicated career coaches with over 30 years of professional experience in the Canadian job market. Our mission is simple: to teach you how to find employers in Canada on your own. We don't find jobs for you. We show you exactly how to do it yourself.
                            </p>
                            <p>
                                After decades of working with international talent we've created a practical coaching program that breaks down the Canadian job search process into clear actionable steps. Our comprehensive coaching course gives you the real strategies and tools that successful job seekers use to connect with Canadian employers independently.
                            </p>
                            <p>
                                In our coaching program you'll learn how to research job opportunities identify which employers are hiring and approach them professionally. We teach you the methods to find job openings write effective outreach messages and prepare for interviews. Our focus is on giving you the knowledge and confidence to handle your own job search from start to finish.
                            </p>
                            <p>
                                Whether you're just starting your career or have years of experience our coaching is designed to help you understand Canadian employer expectations and how to present yourself effectively. We guide you through each step from building your profile to understanding work permit requirements so you can make informed decisions on your own.
                            </p>
                            <p>
                                Our goal is your independence. We share 30+ years of industry knowledge so you can confidently navigate the Canadian job market yourself. Join ProVisa Coach Consulting and learn the skills to turn your Canadian career goals into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brief;
