import React from 'react';
import './PassportSection.css';

const PassportSection = () => {
    return (
        <section className="pps-section">
            <div className="pps-pattern-layer">
                <div 
                    className="pps-pattern-1" 
                    style={{ backgroundImage: 'url(/assets/images/passport/shape-20.png)' }}
                ></div>
                <div 
                    className="pps-pattern-2" 
                    style={{ backgroundImage: 'url(/assets/images/passport/shape-21.png)' }}
                ></div>
                <div 
                    className="pps-pattern-3" 
                    style={{ backgroundImage: 'url(/assets/images/passport/shape-22.png)' }}
                ></div>
            </div>

            <div className="auto-container">
                <div className="pps-inner-box">
                    <figure className="pps-image-box">
                        <img src="/assets/images/passport/passport-1.webp" alt="Global Opportunities" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default PassportSection;
