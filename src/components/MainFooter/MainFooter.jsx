import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, X } from 'lucide-react';
import './MainFooter.css';

const MainFooter = () => {

    return (
        <footer className="mft-main-footer">
            <div className="mft-widget-section">
                <div 
                    className="mft-bg-layer" 
                    style={{ backgroundImage: 'url(/assets/images/footer/footer-bg.webp)' }}
                ></div>
                <div className="auto-container">
                    <div className="mft-row clearfix">
                        {/* About Column */}
                        <div className="mft-col mft-col-4 mft-footer-column">
                            <div className="mft-footer-widget mft-logo-widget">
                                <figure className="mft-footer-logo">
                                    <Link to="/">
                                        <img src="/assets/images/logo-02.webp" alt="ProVisa Coach Consulting" style={{ maxWidth: '180px' }} />
                                    </Link>
                                </figure>
                                <div className="mft-text">
                                    <p>ProVisa Coach Consulting is your premier career coaching partner, teaching foreign workers how to independently search for jobs and approach Canadian employers. We provide education and guidance—we don't find employers for you, but we show you exactly how to do it yourself.</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="mft-col mft-col-4 mft-footer-column">
                            <div className="mft-footer-widget mft-links-widget">
                                <div className="mft-widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <div className="mft-widget-content">
                                    <ul className="mft-links-list clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/courses">Courses</Link></li>
                                        <li><Link to="/enrollment">Enrollment</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Contacts Column */}
                        <div className="mft-col mft-col-4 mft-footer-column">
                            <div className="mft-footer-widget mft-contact-widget">
                                <div className="mft-widget-title">
                                    <h3>Contact Info</h3>
                                </div>
                                <div className="mft-widget-content">
                                    <ul className="mft-contact-list">
                                        <li>
                                            <div className="icon-box"><Phone size={18} /></div>
                                            <div className="text">
                                                <h6>Phone</h6>
                                                <a href="tel:+14161234567">+1 (416) 123-4567</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-box"><Mail size={18} /></div>
                                            <div className="text">
                                                <h6>Email</h6>
                                                <a href="mailto:info@provisa.com">info@provisa.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-box"><MapPin size={18} /></div>
                                            <div className="text">
                                                <h6>Address</h6>
                                                <span>Suite 500, 250 Yonge Street, Toronto, ON M5B 2L7, Canada</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-box"><Clock size={18} /></div>
                                            <div className="text">
                                                <h6>Office Hours</h6>
                                                <span>Mon - Sat: 9:00 - 18:00</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Footer Bottom */}
            <div className="mft-footer-bottom">
                <div className="auto-container">
                    <div className="mft-copyright">
                        <p>Copyright By &copy; <Link to="/">ProVisa Coach Consulting</Link> - 2026</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
