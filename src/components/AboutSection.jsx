import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-container">
      {/* Content Section */}
      <div className="content-item">
        <span className="subtitle">Experts in the Canadian Job Market</span>
        <h2 className="title">A Clear, Practical Way to Approach Your Career in Canada</h2>
        <p className="description">
          At <strong className="highlight-text">ProVisa Coach Consulting</strong>, we work with foreign workers who want to understand how the Canadian job market really works. Our team brings years of hands-on experience and focuses on helping you learn how to search for jobs, approach employers professionally, and make informed decisions throughout the process.
        </p>
        <p className="description">
          We don’t promise jobs or claim to place you with employers. Instead, we focus on practical coaching sharing real-world insights, proven job-search methods, and clear guidance so you can take the right steps on your own, with confidence.
        </p>
        <p className="description">
          Whether you’re in skilled trades, technology, or healthcare, our goal is simple: to help you understand the process, avoid common mistakes, and move forward in a legal and realistic way toward working in Canada.
        </p>

        <Link to="/contact" className="btn-more">
          <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            Start Job Search Training <ArrowRight size={18} />
          </span>
        </Link>
      </div>

      {/* Right Image Column */}
      <div className="right-image-column">
        <div className="single-image-box">
          <div className="success-badge">30+ Years Experience</div>
          <div className="image-inner">
            <img src="/assets/images/resource/Coaching (2).webp" alt="Coaching Session" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
