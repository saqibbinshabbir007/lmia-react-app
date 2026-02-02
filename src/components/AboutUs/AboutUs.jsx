import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-style-three about-page p_relative">
      {/* Background Map and Shapes */}
      <div className="pattern-layer">
        <div className="pattern-map" style={{ backgroundImage: 'url(/assets/images/shape/shape-42.png)' }}></div>
      </div>

      <div className="container-custom">
        {/* 1. Left Image: Traveler */}
        <div className="traveler-image">
          <img src="/assets/images/resource/men-2.png" alt="Traveler" />
        </div>

        {/* 2. Center Content: Who we are */}
        <div className="content-column">
          <div className="sec-title">
            <span className="sub-title">WHO WE ARE?</span>
            <h2>Teaching You How to Find Employers in Canada</h2>
          </div>
          <div className="text">
            <p>
              ProVisa Coach Consulting is a premier career coaching firm that helps skilled international workers understand how to find employers in Canada. We teach you the strategies, tools, and methods you need to search for jobs independently and approach Canadian employers with confidence. Our coaching program focuses on education and guidance—we don't find employers for you, but we show you exactly how to do it yourself.
            </p>
          </div>
          <div className="inner-box">
            <div className="list-item">
              <div className="icon-box">
                <img src="/assets/images/icons/icon-13.png" alt="checkmark" />
              </div>
              <h5>Coaching on Canadian Job Search Strategies & Work Permit Pathways</h5>
            </div>
            <div className="list-item">
              <div className="icon-box">
                <img src="/assets/images/icons/icon-14.png" alt="building" />
              </div>
              <h5>Learn how to approach and connect with Canadian employers independently.</h5>
            </div>
          </div>

        </div>

        {/* 3. Right Side: Single Image */}
        <div className="image-grid-column">
          <div className="single-image-box">
            <div className="success-badge">30+ Years Experience</div>
            <div className="image-inner">
              <img src="/assets/images/about-us/main.webp" alt="ProVisa Coach Consulting" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
