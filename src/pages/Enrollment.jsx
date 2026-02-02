import React, { useState } from 'react';
import { Send, CheckCircle, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import './Enrollment.css';

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
        <div className={`enr-searchable-dropdown ${isOpen ? 'is-open' : ''}`} ref={dropdownRef}>
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
                        className="enr-search-input-v2"
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

const Enrollment = () => {
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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        whatsapp: ''
    });
    const [errors, setErrors] = useState({});
    const [emailValid, setEmailValid] = useState(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [nameNumberAgreement, setNameNumberAgreement] = useState(false);
    const [formValidated, setFormValidated] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Email validation
        if (name === 'email') {
            if (value.length === 0) {
                setEmailValid(null);
            } else {
                setEmailValid(validateEmail(value));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone Number is required';
        }

        if (!formData.country.trim()) {
            newErrors.country = 'Country is required';
        }

        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = 'WhatsApp Number is required';
        }

        if (!nameNumberAgreement) {
            newErrors.nameNumberAgreement = 'Please accept the name and number agreement';
        }

        if (!termsAccepted) {
            newErrors.termsAccepted = 'Please read and accept the Terms & Conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const isValid = validateForm();
        if (!isValid) {
            // Scroll to first error
            setTimeout(() => {
                const firstErrorField = Object.keys(errors)[0];
                if (firstErrorField) {
                    const element = document.querySelector(`[name="${firstErrorField}"]`) || 
                                   document.querySelector(`.enr-custom-checkbox input[type="checkbox"]`);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        if (element.focus) element.focus();
                    }
                }
            }, 100);
            return;
        }

        // Form is valid, show PayPal button
        setFormValidated(true);
    };

    const handlePaymentSuccess = (details, data) => {
        setPaymentSuccess(true);
        
        // Here you can send enrollment data to your backend
        console.log('Payment successful:', details);
        console.log('Enrollment data:', formData);
        
        alert('Payment successful! Your enrollment has been submitted. Our team will contact you within 24 hours to confirm your enrollment.');
        
        // Reset form after successful payment
        setTimeout(() => {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                country: '',
                whatsapp: ''
            });
            setEmailValid(null);
            setTermsAccepted(false);
            setNameNumberAgreement(false);
            setErrors({});
            setFormValidated(false);
            setPaymentSuccess(false);
        }, 3000);
    };

    const handlePaymentError = (err) => {
        console.error('Payment error:', err);
        alert('Payment failed. Please try again or contact support.');
    };


    return (
        <div className="enr-enrollment-page">
            {/* 1. Hero Section - Page Title */}
            <section className="enr-page-title centred p_relative">
                <div 
                    className="enr-bg-layer" 
                    style={{ backgroundImage: 'url(/assets/images/background/page-title.webp)' }}
                ></div>
                <div 
                    className="enr-pattern-layer" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-67.png)' }}
                ></div>
                <div 
                    className="enr-shape-1" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-48.png)' }}
                ></div>
                <div className="auto-container">
                    <div className="enr-content-box">
                        <h1>Enroll Now</h1>
                        <p className="enr-sub-text">Join Our Canadian Job Search Coaching Program</p>
                    </div>
                </div>
            </section>

            {/* 2. Main Enrollment Section */}
            <section className="enr-enrollment-section p_relative">
                {/* Background Shapes */}
                <div 
                    className="enr-shape-2" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-51.png)' }}
                ></div>
                <div 
                    className="enr-shape-3" 
                    style={{ backgroundImage: 'url(/assets/images/shape/shape-52.png)' }}
                ></div>
                
                <div className="auto-container">
                    <div className="enr-row clearfix">
                        
                        {/* LEFT COLUMN: Program Benefits */}
                        <div className="enr-column content-column">
                            <div className="enr-content-box">
                                <div className="enr-sec-title">
                                    <span className="enr-sub-title">What You'll Get</span>
                                    <h2>Join Our Comprehensive <br />Coaching Program</h2>
                                </div>
                                <div className="enr-text mb_45">
                                    <p>Enroll in our Canadian Job Search Coaching Program and gain access to expert coaching, proven strategies, and the tools you need to find employers in Canada independently.</p>
                                </div>
                                
                                {/* Benefits List */}
                                <div className="enr-benefits-list">
                                    <div className="enr-benefit-item">
                                        <div className="enr-icon-box">
                                            <CheckCircle size={24} />
                                        </div>
                                        <div className="enr-benefit-content">
                                            <h4>30 Days of Expert Coaching</h4>
                                            <p>Learn from experienced career coaches with 30+ years of Canadian job market expertise.</p>
                                        </div>
                                    </div>
                                    <div className="enr-benefit-item">
                                        <div className="enr-icon-box">
                                            <Users size={24} />
                                        </div>
                                        <div className="enr-benefit-content">
                                            <h4>Weekly Webinars</h4>
                                            <p>Join live sessions with industry experts and get your questions answered in real-time.</p>
                                        </div>
                                    </div>
                                    <div className="enr-benefit-item">
                                        <div className="enr-icon-box">
                                            <Award size={24} />
                                        </div>
                                        <div className="enr-benefit-content">
                                            <h4>Exclusive Job Board Access</h4>
                                            <p>Access our active job board with hundreds of Canadian job postings updated regularly.</p>
                                        </div>
                                    </div>
                                    <div className="enr-benefit-item">
                                        <div className="enr-icon-box">
                                            <Clock size={24} />
                                        </div>
                                        <div className="enr-benefit-content">
                                            <h4>Learn Hidden Job Search Strategies</h4>
                                            <p>Discover how to find hidden Canadian job opportunities like professional recruiters do.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Price Display */}
                                <div className="enr-price-box">
                                    <div className="enr-price-label">Program Price</div>
                                    <div className="enr-price-amount">$1,497.00 <span>USD</span></div>
                                    <p className="enr-price-note">One-time payment • 30 days access to course materials</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Enrollment Form */}
                        <div className="enr-column form-column">
                            <div className="enr-form-inner">
                                <div className="enr-sec-title mb_40">
                                    <span className="enr-sub-title">Get Started</span>
                                    <h2>Complete Your Enrollment</h2>
                                    <p className="enr-form-desc">Fill out the form below to enroll in our comprehensive coaching program. Our team will contact you within 24 hours to confirm your enrollment.</p>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="enr-enrollment-form" noValidate>
                                    <div className="enr-form-row">
                                        <div className={`enr-form-group ${errors.firstName ? 'has-error' : ''}`}>
                                            <input 
                                                type="text" 
                                                name="firstName" 
                                                placeholder="First Name *" 
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                            {errors.firstName && (
                                                <span className="field-error-msg">{errors.firstName}</span>
                                            )}
                                        </div>
                                        <div className={`enr-form-group ${errors.lastName ? 'has-error' : ''}`}>
                                            <input 
                                                type="text" 
                                                name="lastName" 
                                                placeholder="Last Name *" 
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                            {errors.lastName && (
                                                <span className="field-error-msg">{errors.lastName}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="enr-form-row">
                                        <div className={`enr-form-group ${errors.email || emailValid === false ? 'email-invalid has-error' : emailValid === true ? 'email-valid' : ''}`}>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="Email *" 
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                            {(errors.email || emailValid === false) && (
                                                <span className="field-error-msg">{errors.email || 'Please enter a valid email address'}</span>
                                            )}
                                        </div>
                                        <div className={`enr-form-group country-phone ${errors.phone ? 'has-error' : ''}`}>
                                            <SearchableCountryDropdown 
                                                countries={countries}
                                                selectedCountry={selectedPhoneCountry}
                                                onSelect={setSelectedPhoneCountry}
                                            />
                                            <input 
                                                type="text" 
                                                name="phone" 
                                                placeholder="Phone Number *" 
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                            {errors.phone && (
                                                <span className="field-error-msg">{errors.phone}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="enr-form-row">
                                        <div className={`enr-form-group ${errors.country ? 'has-error' : ''}`}>
                                            <input 
                                                type="text" 
                                                name="country" 
                                                placeholder="Country *" 
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                            {errors.country && (
                                                <span className="field-error-msg">{errors.country}</span>
                                            )}
                                        </div>
                                        <div className={`enr-form-group country-phone ${errors.whatsapp ? 'has-error' : ''}`}>
                                            <SearchableCountryDropdown 
                                                countries={countries}
                                                selectedCountry={selectedWACountry}
                                                onSelect={setSelectedWACountry}
                                            />
                                            <input 
                                                type="text" 
                                                name="whatsapp" 
                                                placeholder="What's App Number *" 
                                                value={formData.whatsapp}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                            {errors.whatsapp && (
                                                <span className="field-error-msg">{errors.whatsapp}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Agreement Checkboxes */}
                                    <div className={`enr-form-group full-width ${errors.nameNumberAgreement ? 'has-error' : ''}`}>
                                        <label className="enr-custom-checkbox">
                                            <input 
                                                type="checkbox" 
                                                checked={nameNumberAgreement}
                                                onChange={(e) => setNameNumberAgreement(e.target.checked)}
                                                required
                                            />
                                            <span className="checkmark"></span>
                                            <span className="checkbox-text">I agree that my name and number can be used for communication purposes.</span>
                                        </label>
                                        {errors.nameNumberAgreement && (
                                            <span className="field-error-msg">{errors.nameNumberAgreement}</span>
                                        )}
                                    </div>

                                    <div className={`enr-form-group full-width ${errors.termsAccepted ? 'has-error' : ''}`}>
                                        <label className="enr-custom-checkbox">
                                            <input 
                                                type="checkbox" 
                                                checked={termsAccepted}
                                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                                required
                                            />
                                            <span className="checkmark"></span>
                                            <span className="checkbox-text">
                                                I have read and agree to the <Link to="/terms" target="_blank">Terms & Conditions</Link>. 
                                                <strong> Disclaimer: All purchases made are non-refundable.</strong>
                                            </span>
                                        </label>
                                        {errors.termsAccepted && (
                                            <span className="field-error-msg">{errors.termsAccepted}</span>
                                        )}
                                    </div>
                                    
                                    <div className="enr-btn-box">
                                        {!formValidated ? (
                                            <button type="submit" className="enr-submit-btn">
                                                Continue to Payment <Send size={20} />
                                            </button>
                                        ) : !paymentSuccess ? (
                                            <div className="enr-paypal-section">
                                                <div className="enr-payment-info">
                                                    <h4>Complete Your Payment</h4>
                                                    <p>Total Amount: <strong>$1,497.00 USD</strong></p>
                                                </div>
                                                <PayPalButtons
                                                    createOrder={(data, actions) => {
                                                        return actions.order.create({
                                                            purchase_units: [{
                                                                amount: {
                                                                    value: "1497.00",
                                                                    currency_code: "USD"
                                                                },
                                                                description: "Canadian Job Search Coaching Program - Enrollment"
                                                            }]
                                                        });
                                                    }}
                                                    onApprove={(data, actions) => {
                                                        return actions.order.capture().then((details) => {
                                                            handlePaymentSuccess(details, data);
                                                        });
                                                    }}
                                                    onError={handlePaymentError}
                                                    onCancel={() => {
                                                        setFormValidated(false);
                                                        alert('Payment cancelled. You can try again.');
                                                    }}
                                                    style={{
                                                        layout: "vertical",
                                                        color: "gold",
                                                        shape: "rect",
                                                        label: "paypal"
                                                    }}
                                                />
                                                <button 
                                                    type="button" 
                                                    className="enr-back-btn"
                                                    onClick={() => setFormValidated(false)}
                                                >
                                                    Back to Form
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="enr-success-message">
                                                <CheckCircle size={48} color="#28a745" />
                                                <h4>Payment Successful!</h4>
                                                <p>Your enrollment has been submitted. Our team will contact you within 24 hours.</p>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Enrollment;
