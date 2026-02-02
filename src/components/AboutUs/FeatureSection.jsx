import React from 'react';
import './FeatureSection.css';

const FeatureSection = ({ isHome = false }) => {
  const features = [
    {
      icon: 'icon-17',
      title: 'Skilled Trades',
      text: 'Job search coaching for skilled professionals exploring opportunities in Canada’s high‑demand industries.'
    },
    {
      icon: 'icon-18',
      title: 'Strategic Consultation',
      text: 'Guidance on understanding job requirements, researching employers, and navigating the Canadian hiring landscape independently.'
    },
    {
      icon: 'icon-19',
      title: 'Work Permits',
      text: 'Educational guidance on work permit options and general pathways, without handling applications or legal processing.'
    },
    {
      icon: 'icon-20',
      title: 'Career Coaching',
      text: 'Personalized career coaching focused on job search strategy, professional outreach, and interview preparation.'
    }
  ];

  return (
    <section className={`job-features-section ${isHome ? 'is-home-version' : 'about-page'} pb_150`}>
      <div className="auto-container">
        <div className="job-features-wrapper">
          <div 
            className="job-features-bg-shape" 
            style={{ backgroundImage: 'url(/assets/images/about-features/shape-41.png)' }}
          ></div>
          <div className="job-features-row">
            {features.map((feature, index) => (
              <div key={index} className="job-features-column">
                <div className="job-features-card">
                  <div className="job-features-icon-box">
                    <i className={feature.icon}></i>
                  </div>
                  <h3><a href="/">{feature.title}</a></h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
