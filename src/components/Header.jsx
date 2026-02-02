import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  ArrowRight,
  X,
} from "lucide-react";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
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
    </>
  );
};

export default Header;
