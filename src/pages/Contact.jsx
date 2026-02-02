import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import './Contact.css';

const SearchableCountryDropdown = ({ countries, selectedCountry, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = React.useRef(null);

    const filteredCountries = countries.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.code.includes(searchTerm)
    );

    const handleToggle = () => setIsOpen(!isOpen);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && filteredCountries.length > 0) {
            onSelect(filteredCountries[0]);
            setIsOpen(false);
            setSearchTerm('');
        }
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`cn-searchable-dropdown ${isOpen ? 'is-open' : ''}`} ref={dropdownRef}>
            <div className={`country-selector ${isOpen ? 'active' : ''}`} onClick={handleToggle} data-code={selectedCountry.code}>
                <img 
                    src={`https://flagsapi.com/${selectedCountry.iso}/flat/64.png`} 
                    alt={selectedCountry.name} 
                    className="flag-img"
                />
                <span className="current-code">{selectedCountry.code}</span>
            </div>
            
            {isOpen && (
                <div className="dropdown-list-wrapper">
                    <input 
                        type="text" 
                        autoFocus
                        placeholder="Search country..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="cn-search-input-v2"
                        style={{ textAlign: 'left' }}
                    />
                    <ul className="dropdown-list">
                        {filteredCountries.map((country, index) => (
                            <li 
                                key={country.iso + index} 
                                onClick={() => {
                                    onSelect(country);
                                    setIsOpen(false);
                                    setSearchTerm('');
                                }}
                                className={selectedCountry.iso === country.iso ? 'selected' : ''}
                            >
                                <img src={`https://flagsapi.com/${country.iso}/flat/64.png`} alt={country.name} />
                                <span>{country.code} ({country.name})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const Contact = () => {
    const countries = [
        { name: 'Canada', code: '+1', iso: 'CA' },
        { name: 'Pakistan', code: '+92', iso: 'PK' },
        { name: 'United Kingdom', code: '+44', iso: 'GB' },
        { name: 'United States', code: '+1', iso: 'US' },
        { name: 'United Arab Emirates', code: '+971', iso: 'AE' },
        { name: 'India', code: '+91', iso: 'IN' },
        { name: 'Saudi Arabia', code: '+966', iso: 'SA' },
        { name: 'Turkey', code: '+90', iso: 'TR' },
        { name: 'Australia', code: '+61', iso: 'AU' },
        { name: 'Germany', code: '+49', iso: 'DE' },
        { name: 'France', code: '+33', iso: 'FR' },
        { name: 'China', code: '+86', iso: 'CN' },
        { name: 'South Africa', code: '+27', iso: 'ZA' },
        { name: 'Bangladesh', code: '+880', iso: 'BD' },
        { name: 'Sri Lanka', code: '+94', iso: 'LK' },
        { name: 'Nepal', code: '+977', iso: 'NP' },
        { name: 'Qatar', code: '+974', iso: 'QA' },
        { name: 'Kuwait', code: '+965', iso: 'KW' },
        { name: 'Oman', code: '+968', iso: 'OM' },
        { name: 'Bahrain', code: '+973', iso: 'BH' },
        { name: 'Afghanistan', code: '+93', iso: 'AF' },
        { name: 'Iran', code: '+98', iso: 'IR' },
        { name: 'Egypt', code: '+20', iso: 'EG' },
        { name: 'Italy', code: '+39', iso: 'IT' },
        { name: 'Spain', code: '+34', iso: 'ES' },
        { name: 'Russia', code: '+7', iso: 'RU' },
        { name: 'Brazil', code: '+55', iso: 'BR' },
        { name: 'Mexico', code: '+52', iso: 'MX' },
        { name: 'Japan', code: '+81', iso: 'JP' },
        { name: 'South Korea', code: '+82', iso: 'KR' },
        { name: 'Singapore', code: '+65', iso: 'SG' },
        { name: 'Malaysia', code: '+60', iso: 'MY' },
        { name: 'Thailand', code: '+66', iso: 'TH' }
    ];

    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState(countries[0]);
    const [selectedWACountry, setSelectedWACountry] = useState(countries[0]);
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(null); // null = not touched, true = valid, false = invalid

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        
        if (value.length === 0) {
            setEmailValid(null); // Reset if empty
        } else {
            setEmailValid(validateEmail(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Final validation check
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        alert('Your message has been sent successfully!');
    };

    return (
        <div className="cn-contact-page">
            {/* 1. Page Title Section - Matching About Page Design */}
            <section className="cn-page-title centred p_relative">
                <div 
                    className="cn-bg-layer" 
                    style={{ backgroundImage: 'url(/assets/images/background/page-title.webp)' }}
                ></div>
                <div 
                    className="cn-pattern-layer" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-67.png)' }}
                ></div>
                <div className="auto-container">
                    <div className="cn-content-box">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </section>

            {/* 2. Contact Form & Info Section */}
            <section className="cn-contact-style-two p_relative">
                <div className="auto-container">
                    <div className="cn-row clearfix">
                        
                        {/* LEFT COLUMN: Info */}
                        <div className="cn-column content-column">
                            <div className="cn-content-box">
                                <div className="cn-sec-title">
                                    <span className="cn-sub-title">Quick Contact</span>
                                    <h2>Have Questions? <br />Don't Hesitate to Contact Us</h2>
                                </div>
                                <div className="cn-text mb_45">
                                    <p>Connect with ProVisa Coach Consulting for expert coaching on your Canadian career journey. Our team is ready to teach you how to find employers independently and guide you through the job search process.</p>
                                </div>
                                
                                {/* Location Block */}
                                <div className="cn-location-box pb_40 mb_50">
                                    <div className="cn-icon-box"><i className="icon-61"></i></div>
                                    <div className="cn-loc-info">
                                        <h3>Location</h3>
                                        <p>Suite 500, 250 Yonge Street, Toronto, ON M5B 2L7, Canada.</p>
                                    </div>
                                </div>

                                {/* Quick Contact & Opening Hours */}
                                <div className="cn-inner-box">
                                    <div className="cn-info-row">
                                        <div className="cn-info-col">
                                            <div className="cn-single-item">
                                                <div className="cn-icon-box"><i className="icon-62"></i></div>
                                                <h3>Quick Contact</h3>
                                                <ul className="cn-info-list clearfix">
                                                    <li>
                                                        <span className="label">Phone:</span>
                                                        <p><a href="tel:18963648018">+1 89-636-48018</a></p>
                                                    </li>
                                                    <li>
                                                        <span className="label">Email:</span>
                                                        <p><a href="mailto:info@provisa.com">info@provisa.com</a></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cn-info-col">
                                            <div className="cn-single-item">
                                                <div className="cn-icon-box"><i className="icon-63"></i></div>
                                                <h3>Opening Hrs</h3>
                                                <ul className="cn-info-list clearfix">
                                                    <li>
                                                        <span className="label">Mon - Sat:</span>
                                                        <p>09:00 - 18:00</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Form */}
                        <div className="cn-column form-column">
                            <div className="cn-form-inner">
                                <div className="cn-sec-title mb_40">
                                    <span className="cn-sub-title">Let's Connect</span>
                                    <h2>Send Your Message</h2>
                                    <p className="cn-form-desc">Fill out the form below, and our senior career coaches will get back to you within 24 hours to discuss your Canadian career goals.</p>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="cn-contact-form">
                                    <div className="cn-form-row">
                                        <div className="cn-form-group">
                                            <input type="text" name="firstName" placeholder="First Name *" required />
                                        </div>
                                        <div className="cn-form-group">
                                            <input type="text" name="lastName" placeholder="Last Name *" required />
                                        </div>
                                    </div>
                                    <div className="cn-form-row">
                                        <div className={`cn-form-group ${emailValid === false ? 'email-invalid' : emailValid === true ? 'email-valid' : ''}`}>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="Email *" 
                                                value={email}
                                                onChange={handleEmailChange}
                                                required 
                                            />
                                            {emailValid === false && (
                                                <span className="email-error-msg">Please enter a valid email address</span>
                                            )}
                                        </div>
                                        <div className="cn-form-group country-phone">
                                            <SearchableCountryDropdown 
                                                countries={countries}
                                                selectedCountry={selectedPhoneCountry}
                                                onSelect={setSelectedPhoneCountry}
                                            />
                                            <input type="text" name="phone" placeholder="Phone Number *" required />
                                        </div>
                                    </div>
                                    <div className="cn-form-row">
                                        <div className="cn-form-group">
                                            <input type="text" name="country" placeholder="Country *" required />
                                        </div>
                                        <div className="cn-form-group country-phone">
                                            <SearchableCountryDropdown 
                                                countries={countries}
                                                selectedCountry={selectedWACountry}
                                                onSelect={setSelectedWACountry}
                                            />
                                            <input type="text" name="whatsapp" placeholder="What's App Number *" required />
                                        </div>
                                    </div>
                                    
                                    {/* Message Field */}
                                    <div className="cn-form-group full-width">
                                        <textarea 
                                            name="message" 
                                            placeholder="Your Message *" 
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <div className="cn-btn-box">
                                        <button type="submit" className="cn-submit-btn">
                                            Submit Message <Send size={20} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                                    
            {/* 3. Google Map Section */}
            <section className="cn-map-section">
                <div className="auto-container">
                    <div className="cn-map-inner">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.263851508215!2d-79.38234372336357!3d43.65349477110196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cca74dca7d%3A0xe6a8a3a0c0f86580!2s250%20Yonge%20St%2C%20Toronto%2C%20ON%20M5B%202L7%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="550" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                            title="Office Map"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
