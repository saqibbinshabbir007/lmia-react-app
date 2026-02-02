import React from 'react';
import './HelpSection.css';

const HelpSection = () => {
    return (
        <section className="hs3-section p_relative">
            {/* Background Patterns - Following original template exactly */}
            <div className="hs3-pattern-layer">
                <div 
                    className="hs3-pattern-1" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-45.png)' }}
                ></div>
                <div 
                    className="hs3-pattern-2" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-46.png)' }}
                ></div>
                <div 
                    className="hs3-pattern-3" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-47.png)' }}
                ></div>
            </div>

            <div className="auto-container">
                {/* Section Title with Star Decoration */}
                <div className="hs3-sec-title light mb_60">
                    <h2>Master the Art of <br />Finding Jobs in Canada.</h2>
                    <span className="hs3-sub-title">Your Step by Step Coaching Guide to Navigating the Canadian Job Market.</span>
                </div>

                <div className="hs3-row clearfix">
                    {/* Step 01 */}
                    <div className="hs3-column">
                        <div className="hs3-single-item">
                            <div className="hs3-inner-box">
                                <div className="hs3-icon-box">
                                    <div className="hs3-icon mb_18">
                                        <i className="icon-42"></i>
                                    </div>
                                    <span className="hs3-count-text">01</span>
                                </div>
                                <div className="hs3-text-box">
                                    <h3>Strategic <br />Profile Audit</h3>
                                    <p>Learn how to evaluate your skills and optimize your resume to meet Canadian standards for high potential job roles.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="hs3-column">
                        <div className="hs3-single-item">
                            <div className="hs3-inner-box">
                                <div className="hs3-icon-box">
                                    <span className="hs3-count-text">02</span>
                                    <div className="hs3-icon mt_18">
                                        <i className="icon-43"></i>
                                    </div>
                                </div>
                                <div className="hs3-text-box">
                                    <h3>Direct <br />Outreach Mastery</h3>
                                    <p>We teach you the exact strategies to find, contact, and pitch yourself to Canadian employers who are ready to hire.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="hs3-column">
                        <div className="hs3-single-item">
                            <div className="hs3-inner-box">
                                <div className="hs3-icon-box">
                                    <div className="hs3-icon mb_13">
                                        <i className="icon-44"></i>
                                    </div>
                                    <span className="hs3-count-text">03</span>
                                </div>
                                <div className="hs3-text-box">
                                    <h3>Offer & <br />Visa Guidance</h3>
                                    <p>A complete walkthrough of the documentation process, teaching you how to handle your own hiring and relocation paperwork.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
