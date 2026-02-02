import React from 'react';
import './ClientsSection.css';

const ClientsSection = () => {
    const logos = [
        { id: 1, src: '/assets/images/clients/clients-1.png' },
        { id: 2, src: '/assets/images/clients/clients-2.png' },
        { id: 3, src: '/assets/images/clients/clients-3.png' },
        { id: 4, src: '/assets/images/clients/clients-4.png' },
        { id: 5, src: '/assets/images/clients/clients-5.png' }
    ];

    return (
        <section className="cls-section">
            <div className="cls-pattern-layer">
                <div 
                    className="cls-pattern-1" 
                    style={{ backgroundImage: 'url(/assets/images/clients/shape-53.png)' }}
                ></div>
                <div 
                    className="cls-pattern-2" 
                    style={{ backgroundImage: 'url(/assets/images/clients/shape-54.png)' }}
                ></div>
            </div>

            <div className="auto-container">
                <div className="cls-inner-box">
                    <ul className="cls-list">
                        {logos.map(logo => (
                            <li className="cls-logo" key={logo.id}>
                                <a href="#">
                                    <img src={logo.src} alt={`Partner Logo ${logo.id}`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
