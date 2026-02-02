import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
  const choices = [
    {
      id: 1,
      icon: '/assets/images/chooseus/icon-1.png',
      title: 'Interview Preparation Coaching',
      text: 'Learn how to prepare for and approach Canadian employers independently. We teach you the strategies to handle interviews confidently on your own.'
    },
    {
      id: 2,
      icon: '/assets/images/chooseus/icon-2.png',
      title: 'Job Search Strategy Bank',
      text: 'Access our comprehensive coaching resources and proven methods for finding job opportunities in Canada. Learn where to look and how to apply effectively.'
    },
    {
      id: 3,
      icon: '/assets/images/chooseus/icon-3.png',
      title: 'Strategic Career Coaching',
      text: 'Personalized coaching to help you understand Canadian employer expectations and optimize your profile for the professional market.'
    },
    {
      id: 4,
      icon: '/assets/images/chooseus/icon-4.png',
      title: 'Clear Learning Process',
      text: 'Step-by-step coaching framework that teaches you how to navigate work permit requirements and understand the Canadian hiring process independently.'
    }
  ];

  return (
    <section className="cus-choose-section p_relative">
      <div 
        className="cus-pattern-layer" 
        style={{ backgroundImage: 'url(/assets/images/chooseus/shape-71.png)' }}
      ></div>
      <div className="auto-container">
        <div className="cus-sec-header centred mb_60">
          <span className="cus-sub-title">Why Choose ProVisa</span>
          <h2 className="cus-main-title">Tailored Career Solutions for Your <br />Canadian Success.</h2>
        </div>
        <div className="cus-row">
          {choices.map((item) => (
            <div key={item.id} className="cus-block-column">
              <div className="cus-inner-card">
                <div className="cus-icon-wrap">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="cus-link-arrow">
                  <i className="icon-9"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
