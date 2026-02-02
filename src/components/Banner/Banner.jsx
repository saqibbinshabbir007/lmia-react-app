import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-style-three p_relative">
      <div className="pattern-layer">
        <div 
          className="pattern-1" 
          style={{ backgroundImage: 'url(/Banner/shape-38.png)' }}
        ></div>
        <div 
          className="pattern-2" 
          style={{ backgroundImage: 'url(/Banner/shape-39.png)' }}
        ></div>
        <div 
          className="pattern-3" 
          style={{ backgroundImage: 'url(/Banner/shape-40.png)' }}
        ></div>
      </div>
      <figure className="image-layer">
        <img src="/Banner/banner-img-2.webp" alt="Immigration Banner" />
      </figure>
      <div className="auto-container">
        <div className="content-box">
          <h1>Learn How to Find Employers in Canada</h1>
          <p className="sub-heading">
            A coaching and strategy program designed to teach foreign workers how to independently search for jobs, approach employers, and understand the Canadian hiring process.
          </p>
          <div className="btn-box">
            <Link to="/enrollment" className="theme-btn btn-two">
              <span>Join the Coaching Program</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
