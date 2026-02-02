import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  ArrowRight,
  X,
  ChevronDown,
} from "lucide-react";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [videoDropdownOpen, setVideoDropdownOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoDropdownRefMain = useRef(null);
  const videoDropdownRefSticky = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let lastScrollPos = 0;
    let threshold = 110;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Only change state if we cross the threshold to prevent unnecessary re-renders
      if (currentScrollPos >= threshold && lastScrollPos < threshold) {
        setIsSticky(true);
      } else if (currentScrollPos < threshold && lastScrollPos >= threshold) {
        setIsSticky(false);
      }
      
      lastScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    if (newState) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove("mobile-menu-visible");
  };

  const isActive = (path) => {
    return location.pathname === path ? "current" : "";
  };

  const openVideoModal = (videoType) => {
    setSelectedVideo(videoType);
    setVideoModalOpen(true);
    setVideoDropdownOpen(false);
    setMobileMenuOpen(false);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
    // Restore scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (videoModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [videoModalOpen]);

  // Close video dropdown when clicking outside — use 'click' so sub-list link click fires first (video opens)
  useEffect(() => {
    const handleClickOutside = (e) => {
      const insideMain = videoDropdownRefMain.current?.contains(e.target);
      const insideSticky = videoDropdownRefSticky.current?.contains(e.target);
      if (!insideMain && !insideSticky) {
        setVideoDropdownOpen(false);
      }
    };
    if (videoDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [videoDropdownOpen]);

  const toggleVideoDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setVideoDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`main-header header-style-two ${location.pathname === '/' ? 'header-style-three' : 'inner-header'} ${isSticky ? "fixed-header" : ""}`}
      >
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="top-left">
                <ul className="info clearfix">
                  <li>
                    <Mail size={15} className="header-icon" />
                    <a href="mailto:info@provisa.com">info@provisa.com</a>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-links clearfix">
                  <li>
                    <a href="#">
                      <Facebook size={16} className="social-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Instagram size={16} className="social-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Twitter size={16} className="social-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Globe size={16} className="social-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="/">
                    <img src="/assets/images/logo-01 (1).webp" alt="ProVisa Coach Consulting" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className={isActive("/") ? "current" : ""}>
                        <Link to="/">Home</Link>
                      </li>
                      <li className={isActive("/about") ? "current" : ""}>
                        <Link to="/about">About</Link>
                      </li>
                      <li
                        className={
                          isActive("/courses") ||
                          location.pathname.startsWith("/course")
                            ? "current"
                            : ""
                        }
                      >
                        <Link to="/courses">Courses</Link>
                      </li>
                      <li className={isActive("/enrollment") ? "current" : ""}>
                        <Link to="/enrollment">Enrollment</Link>
                      </li>
                      <li className={`dropdown ${videoDropdownOpen ? "open" : ""}`} ref={videoDropdownRefMain}>
                        <a href="#watch-video" onClick={toggleVideoDropdown}>
                          Watch Video <ChevronDown size={16} className="dropdown-chevron" style={{ marginLeft: '5px', display: 'inline-block', verticalAlign: 'middle' }} />
                        </a>
                        {videoDropdownOpen && (
                          <ul className="video-dropdown-menu">
                            <li>
                              <a href="#get-canadian-job" onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openVideoModal('get-canadian-job');
                              }}>Get A Canadian Job</a>
                            </li>
                            <li>
                              <a href="#why-hire-us" onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openVideoModal('why-hire-us');
                              }}>Why Hire Us</a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className={isActive("/contact") ? "current" : ""}>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="btn-box">
                <Link to="/courses" className="theme-btn btn-one">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    Start Learning Now <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="/">
                    <img src="/assets/images/logo-01 (1).webp" alt="ProVisa Coach Consulting" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu clearfix">
                  <ul className="navigation clearfix">
                    <li className={isActive("/") ? "current" : ""}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={isActive("/about") ? "current" : ""}>
                      <Link to="/about">About</Link>
                    </li>
                    <li
                      className={
                        isActive("/courses") ||
                        location.pathname.startsWith("/course")
                          ? "current"
                          : ""
                      }
                    >
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li className={isActive("/enrollment") ? "current" : ""}>
                      <Link to="/enrollment">Enrollment</Link>
                    </li>
                    <li className={`dropdown ${videoDropdownOpen ? "open" : ""}`} ref={videoDropdownRefSticky}>
                      <a href="#watch-video" onClick={toggleVideoDropdown}>
                        Watch Video <ChevronDown size={16} className="dropdown-chevron" style={{ marginLeft: '5px', display: 'inline-block', verticalAlign: 'middle' }} />
                      </a>
                      {videoDropdownOpen && (
                        <ul className="video-dropdown-menu">
                          <li>
                            <a href="#get-canadian-job" onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openVideoModal('get-canadian-job');
                            }}>Get A Canadian Job</a>
                          </li>
                          <li>
                            <a href="#why-hire-us" onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openVideoModal('why-hire-us');
                            }}>Why Hire Us</a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className={isActive("/contact") ? "current" : ""}>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="btn-box">
                <Link to="/courses" className="theme-btn btn-one">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    Start Learning Now <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "visible" : ""}`}>
        <div className="menu-backdrop" onClick={closeMobileMenu}></div>
        <div className="close-btn" onClick={closeMobileMenu}>
          <X size={24} color="#ffffff" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img src="/assets/images/logo-01 (1).webp" alt="ProVisa Coach Consulting" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">
              <li>
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={closeMobileMenu}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/enrollment" onClick={closeMobileMenu}>
                  Enrollment
                </Link>
              </li>
              <li>
                <a href="#watch-video" onClick={(e) => e.preventDefault()}>
                  Watch Video
                </a>
                <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                  <li>
                    <a href="#get-canadian-job" onClick={(e) => {
                      e.preventDefault();
                      openVideoModal('get-canadian-job');
                    }}>Get A Canadian Job</a>
                  </li>
                  <li>
                    <a href="#why-hire-us" onClick={(e) => {
                      e.preventDefault();
                      openVideoModal('why-hire-us');
                    }}>Why Hire Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-btn">
            <Link to="/courses" className="theme-btn btn-one" onClick={closeMobileMenu}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                Start Learning Now <ArrowRight size={16} />
              </span>
            </Link>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Toronto, Ontario, Canada</li>
              <li>
                <a href="tel:+14161234567">+1 (416) 123-4567</a>
              </li>
              <li>
                <a href="mailto:info@provisa.com">info@provisa.com</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-facebook-square"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-pinterest-p"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              <X size={24} />
            </button>
            <div className="video-modal-body">
              <h3 className="video-modal-title">
                {selectedVideo === 'get-canadian-job' ? 'Get A Canadian Job' : 'Why Hire Us'}
              </h3>
              <div className="video-wrapper">
                <video
                  controls
                  autoPlay
                  playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                >
                  <source
                    src={
                      selectedVideo === 'get-canadian-job'
                        ? '/Video/Get-a-Canadian-Job-updated.mp4'
                        : '/Video/why-hire-us-R3.mp4'
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
