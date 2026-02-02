import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Star } from 'lucide-react';
import './IncredibleDeal.css';

const IncredibleDeal = () => {
    const listItems = [
        "Professional job search strategies",
        "Weekly live coaching and guidance sessions",
        "How to research jobs using public platforms and networks",
        "How to identify genuine opportunities on your own",
        "How to improve your profile for the Canadian market",
        "How to avoid common mistakes during the job search process"
    ];

    return (
        <section className="incredible-deal-section p_relative centred">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: 'url(/assets/images/shape/shape-3.png)' }}></div>
                <div className="pattern-2" style={{ backgroundImage: 'url(/assets/images/shape/shape-11.png)' }}></div>
            </div>
            
            <div className="auto-container">
                <div className="inner-container">
                    <div className="offer-badge-box mb_20">
                        <span className="offer-label">Limited Time Access</span>
                        <div className="star-box-mini">
                            <Star size={14} fill="#CE1E22" color="#CE1E22" />
                        </div>
                    </div>

                    <div className="sec-title mb_20">
                        <h2 className="light">Professional Job Search Coaching Program</h2>
                        <div className="star-divider">
                            <span className="line"></span>
                            <Star size={20} fill="#ffffff" color="#ffffff" className="main-star" />
                            <span className="line"></span>
                        </div>
                        <h3 className="program-fee mt_20">Program Fee $1497 USD</h3>
                    </div>

                    <div className="urgency-text mb_40">
                        <p>This program is designed to teach you how the Canadian job market works and how to approach your job search with clarity and confidence.</p>
                    </div>

                    <div className="features-container mb_50">
                        <h4 className="features-title mb_30">What you will learn</h4>
                        <ul className="feature-list-simple">
                            {listItems.map((item, index) => (
                                <li key={index}>
                                    <CheckCircle size={18} className="check-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="promo-text mb_40">
                        <p style={{ fontWeight: '700', marginBottom: '10px' }}>This is a coaching and education program.</p>
                        <p>We guide you through the process. <br />You take action independently.</p>
                    </div>

                    <div className="btn-box">
                        <Link to="/enrollment" className="theme-btn btn-one">
                            <span>View Program Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IncredibleDeal;
