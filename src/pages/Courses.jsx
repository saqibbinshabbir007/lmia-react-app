import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Users, Clock, ChevronDown } from 'lucide-react';
import './Courses.css';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileDropdownOpen(false);
      }
    };

    if (mobileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileDropdownOpen]);

  const courses = [
    {
      id: 1,
      title: 'Understanding Work Permits & How They Work',
      description: 'Learn what work permits are, why they\'re important for working in Canada, and how the process actually works. This foundation will help you approach your job search with clarity and confidence.',
      fullContent: `When you're looking to work in Canada, understanding work permits and the application process is crucial. This isn't just paperwork—it's the foundation of your entire job search strategy.

In this module, we'll walk you through exactly what work permits mean, why Canadian employers need to support them, and how the entire process unfolds from start to finish. You'll learn the real-world mechanics behind work permits and what employers are actually looking for when they go through this process.

We'll break down the terminology, explain the timelines, and show you what happens behind the scenes. This knowledge isn't just academic—it helps you understand employer expectations, communicate more effectively, and make informed decisions throughout your job search journey.

By the end of this section, you'll have a clear picture of how the system works, which will give you the confidence to approach Canadian employers with the right understanding and expectations.`,
      keyPoints: [
        'What work permits actually mean and why they matter',
        'The step-by-step process employers follow',
        'Timeline expectations and realistic planning',
        'How this knowledge helps your job search strategy'
      ]
    },
    {
      id: 2,
      title: 'How to Find Canadian Job Opportunities',
      description: 'Discover the best sources and strategies to locate genuine Canadian job openings. Avoid wasting time on dead ends and focus on opportunities that can lead to a work permit.',
      fullContent: `Finding real Canadian job opportunities isn't about scrolling through generic job boards. It's about knowing where to look, what to look for, and how to identify genuine opportunities versus time-wasters.

In this module, we'll show you the actual platforms and methods that successful job seekers use to find work permit-supported positions. You'll learn about public job banks, industry-specific resources, and networking channels that most people don't know about.

We'll teach you how to read job postings like a professional—identifying which positions are likely to support work permit applications and which ones aren't worth your time. You'll also learn how to research companies, understand their hiring patterns, and approach them at the right time.

Most importantly, we'll show you how to avoid scams and misleading opportunities. You'll learn the red flags to watch for and the verification steps that protect you from wasting months on false leads.

By the end of this section, you'll have a clear roadmap for finding real opportunities and a system for evaluating whether each opportunity is worth pursuing.`,
      keyPoints: [
        'Best platforms and resources for Canadian jobs',
        'How to identify genuine opportunities',
        'Research methods that save time',
        'Red flags and scam prevention strategies'
      ]
    },
    {
      id: 3,
      title: 'How to Write a Canadian-Style Resume for Work Permit Jobs',
      description: 'Understand the structure, format, and tone Canadian employers expect in a resume. Learn how to present your skills in a way that gets you shortlisted.',
      fullContent: `Your resume is often the first impression you make, and Canadian employers have specific expectations that differ from other markets. Getting this right can mean the difference between getting an interview and getting ignored.

In this module, we'll break down exactly what Canadian employers look for in a resume. We'll cover the structure, formatting, and language that gets results. You'll learn how to present your international experience in a way that Canadian hiring managers understand and value.

We'll show you how to highlight relevant skills, quantify achievements, and format your resume to pass through Applicant Tracking Systems (ATS) that many companies use. You'll also learn about Canadian resume conventions—what to include, what to leave out, and how to present your experience effectively.

Beyond just formatting, we'll teach you how to tailor your resume for different types of positions and industries. You'll learn how to adjust your approach for skilled trades versus professional roles, and how to emphasize the right aspects of your background.

By the end of this section, you'll have a resume that speaks the language Canadian employers understand and that positions you as a strong candidate for work permit-supported positions.`,
      keyPoints: [
        'Canadian resume structure and formatting',
        'How to present international experience effectively',
        'ATS optimization techniques',
        'Tailoring resumes for different industries'
      ]
    },
    {
      id: 4,
      title: 'Crafting a Powerful Cover Letter',
      description: 'Create compelling cover letters that grab employers\' attention. Showcase your value and why you\'re the right fit for the Job!',
      fullContent: `A great cover letter does more than just introduce your resume—it tells your story, demonstrates your communication skills, and shows employers why you're worth their time and investment in the work permit process.

In this module, we'll teach you how to write cover letters that actually get read. You'll learn how to open with impact, structure your message effectively, and close in a way that prompts action. We'll show you the difference between generic cover letters and ones that stand out.

You'll learn how to address the specific needs mentioned in job postings, connect your experience to Canadian workplace expectations, and demonstrate your understanding of the role. We'll also cover how to handle common concerns employers have about hiring international workers.

We'll provide templates and examples, but more importantly, we'll teach you the principles behind effective cover letters so you can adapt them for different opportunities. You'll learn how to balance professionalism with personality, and how to show enthusiasm without sounding desperate.

By the end of this section, you'll be able to write cover letters that make employers want to learn more about you and that position you as someone worth the investment of a work permit application.`,
      keyPoints: [
        'Structure and flow of effective cover letters',
        'How to address employer concerns',
        'Connecting your experience to Canadian needs',
        'Templates and customization strategies'
      ]
    },
    {
      id: 5,
      title: 'Optimizing Your LinkedIn Profile for Canadian Jobs',
      description: 'Make your LinkedIn profile a powerful job-hunting tool. Learn how to attract recruiters, appear in more searches, and present yourself professionally.',
      fullContent: `LinkedIn is where many Canadian employers and recruiters find candidates, but most profiles don't get noticed. In this module, we'll show you how to optimize your profile so it works for you 24/7.

We'll walk you through every section of your LinkedIn profile—from your headline and summary to your experience and skills. You'll learn what keywords recruiters search for, how to use them naturally, and how to present your international background as an asset.

You'll discover how to build a network that matters, how to engage with Canadian professionals in your industry, and how to use LinkedIn's features to increase your visibility. We'll also cover LinkedIn etiquette and best practices for reaching out to employers and recruiters.

Beyond just profile optimization, we'll teach you how to use LinkedIn as an active job search tool. You'll learn how to find and follow companies, join relevant groups, and participate in ways that get you noticed by the right people.

By the end of this section, your LinkedIn profile will be a professional asset that attracts opportunities and positions you as a serious candidate for Canadian employers.`,
      keyPoints: [
        'Complete LinkedIn profile optimization',
        'Keyword strategies for recruiter searches',
        'Networking and engagement best practices',
        'Using LinkedIn as an active job search tool'
      ]
    },
    {
      id: 6,
      title: 'Networking & Finding Hidden Canadian Jobs',
      description: 'Tap into the "hidden" job market that isn\'t posted online. Learn how to build professional relationships that lead to real opportunities.',
      fullContent: `Many of the best Canadian job opportunities never get posted publicly. They're filled through networks, referrals, and direct approaches. In this module, we'll teach you how to access this hidden job market.

You'll learn how to build genuine professional relationships with people in your industry, both in Canada and internationally. We'll show you how to connect with Canadian professionals, participate in industry discussions, and position yourself as someone worth knowing.

We'll cover networking strategies that work—from online communities and professional associations to informational interviews and industry events. You'll learn how to approach people professionally, ask the right questions, and build relationships that lead to opportunities.

Most importantly, we'll teach you how to identify when companies might be open to work permit applications even if they haven't posted positions. You'll learn how to research companies, understand their growth patterns, and approach them at the right time with the right message.

By the end of this section, you'll have a networking strategy that opens doors to opportunities most job seekers never see, and you'll know how to build relationships that can lead to work permit-supported positions.`,
      keyPoints: [
        'Building professional networks effectively',
        'Accessing the hidden job market',
        'Informational interviews and relationship building',
        'Identifying and approaching companies strategically'
      ]
    },
    {
      id: 7,
      title: 'Avoiding Scams',
      description: 'Protect yourself from fake job offers and fraudulent recruiters. Know the warning signs and verify opportunities before you commit.',
      fullContent: `Unfortunately, the Canadian job market for international workers attracts scammers who prey on people's hopes and dreams. In this critical module, we'll teach you how to protect yourself from fraud and identify genuine opportunities.

We'll show you the common scam patterns—fake job offers, fraudulent recruiters, and misleading promises. You'll learn the red flags that should immediately raise suspicion, from requests for upfront payments to offers that seem too good to be true.

You'll learn verification strategies for checking employers, recruiters, and job offers. We'll show you how to research companies, verify credentials, and confirm that opportunities are legitimate before you invest time or money.

We'll also cover how to protect your personal information, what to do if you suspect a scam, and how to report fraudulent activity. Most importantly, we'll teach you to trust your instincts and recognize when something doesn't feel right.

By the end of this section, you'll be equipped to navigate the job market safely, identify genuine opportunities, and protect yourself from the scams that waste time, money, and emotional energy.`,
      keyPoints: [
        'Common scam patterns and red flags',
        'Verification strategies for employers and recruiters',
        'Protecting personal information',
        'What to do if you encounter fraud'
      ]
    },
    {
      id: 8,
      title: 'Preparing for Canadian Job Interviews',
      description: 'Get ready to impress in interviews with Canadian employers. Learn how to answer questions, present yourself professionally, and build rapport.',
      fullContent: `Interviewing for a work permit-supported position is different from regular job interviews. Employers are making a bigger investment, and they want to be certain you're the right fit. This module prepares you to excel in these high-stakes conversations.

We'll cover the types of questions Canadian employers typically ask, especially for international candidates. You'll learn how to address concerns about relocation, work authorization, and cultural fit. We'll show you how to turn potential weaknesses into strengths and how to demonstrate your commitment to Canada.

You'll learn interview techniques that work in Canadian workplaces—from how to structure your answers using the STAR method to how to ask thoughtful questions that show your genuine interest. We'll also cover video interview best practices, which are common for international candidates.

Beyond just answering questions, we'll teach you how to build rapport, demonstrate cultural awareness, and show employers that you understand Canadian workplace expectations. You'll learn how to present yourself as someone who will integrate smoothly and contribute effectively.

By the end of this section, you'll be confident and prepared for interviews, knowing how to present yourself as a strong candidate worth the investment of a work permit application.`,
      keyPoints: [
        'Common interview questions and strong answers',
        'Addressing employer concerns about international hires',
        'Video interview best practices',
        'Building rapport and demonstrating cultural fit'
      ]
    },
    {
      id: 9,
      title: 'What to Do After the Interview',
      description: 'Follow up effectively to keep your candidacy strong. Learn post-interview etiquette that can make or break your chances.',
      fullContent: `What you do after an interview can significantly impact your chances of getting an offer. In this module, we'll teach you the follow-up strategies that keep you top of mind and demonstrate your professionalism.

You'll learn how to write effective thank-you emails that reinforce your interest and highlight key points from your conversation. We'll show you when to follow up, how often to check in, and what to say to stay on employers' radar without being pushy.

We'll cover how to handle different scenarios—from positive interviews where you're waiting for next steps to situations where you haven't heard back. You'll learn how to navigate the waiting period professionally and how to keep other opportunities moving forward.

You'll also learn how to handle job offers, negotiate terms, and ensure that the opportunity includes proper work permit support. We'll show you what to look for in offer letters and how to confirm that employers are committed to the work permit process.

By the end of this section, you'll know exactly how to navigate the post-interview phase professionally, keeping your candidacy strong and positioning yourself for success.`,
      keyPoints: [
        'Effective thank-you and follow-up strategies',
        'Timing and frequency of check-ins',
        'Handling job offers and negotiations',
        'Ensuring work permit support in offers'
      ]
    },
    {
      id: 10,
      title: 'Understanding the Work Permit Application Process',
      description: 'Step inside the actual application process. Learn what happens after you get a job offer and how to navigate each stage successfully.',
      fullContent: `Once you receive a job offer, the work permit application process begins. Understanding this process helps you know what to expect, how to support your employer, and how to prepare for each stage.

In this module, we'll walk you through the entire work permit application process from the employer's perspective. You'll learn what documentation is required, what timelines to expect, and what your role is versus your employer's role in the process.

We'll explain the different stages—from the employer's application submission to the government's assessment to the final decision. You'll learn what factors influence approval, what common issues arise, and how to address potential problems proactively.

You'll also learn about work permit applications and what documentation you'll need to prepare, and how to ensure everything is in order for a smooth transition to Canada.

Most importantly, we'll help you understand what you can control, what your employer handles, and how to communicate effectively throughout the process. This knowledge reduces stress and helps you navigate the journey with confidence.

By the end of this section, you'll have a clear understanding of the entire process, know what to expect at each stage, and be prepared to support your application effectively.`,
      keyPoints: [
        'Complete work permit application process overview',
        'Documentation requirements and timelines',
        'Your role versus employer responsibilities',
        'Work permit application steps and requirements'
      ]
    },
    {
      id: 11,
      title: 'Wrap Up',
      description: 'Recap the key lessons, reinforce the next steps, and leave ready to apply your new skills in the real Canadian job market.',
      fullContent: `In this final module, we'll bring everything together and prepare you to take action. We'll recap the key strategies and insights from the entire course, reinforcing what matters most for your success.

You'll receive a clear action plan for moving forward—prioritizing your efforts, setting realistic timelines, and staying motivated throughout your job search journey. We'll help you identify your next immediate steps and create a roadmap for the coming months.

We'll also address common questions and concerns that arise as you start applying these strategies. You'll learn how to stay persistent, handle rejection professionally, and maintain momentum even when progress feels slow.

Most importantly, we'll reinforce the mindset and approach that leads to success. You'll leave with confidence in your ability to navigate the Canadian job market independently, armed with the knowledge and strategies that actually work.

By the end of this section, you'll be ready to take everything you've learned and apply it in the real world, moving forward with clarity, confidence, and a clear plan for finding Canadian job opportunities.`,
      keyPoints: [
        'Key strategies and insights recap',
        'Creating your action plan',
        'Staying motivated and persistent',
        'Next steps for your job search journey'
      ]
    }
  ];

  const currentCourse = courses[selectedCourse];

  return (
    <div className="courses-single-page">
      {/* Page Title */}
      <section className="courses-page-title centred p_relative">
        <div 
          className="courses-bg-layer" 
          style={{ backgroundImage: 'url(/assets/images/background/page-title.webp)' }}
        ></div>
        <div 
          className="courses-pattern-layer" 
          style={{ backgroundImage: 'url(/assets/images/shape/shape-67.png)' }}
        ></div>
        <div className="auto-container">
          <div className="courses-content-box">
            <h1>Canadian Job Search Coaching Program</h1>
            <p className="courses-subtitle">Learn how to find employers in Canada independently</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="courses-main-section p_relative">
        <div className="auto-container">
          
          {/* Mobile/Tablet Dropdown */}
          <div className="courses-mobile-dropdown" ref={dropdownRef}>
            <button 
              className="courses-dropdown-btn"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              type="button"
            >
              <span className="dropdown-btn-content">
                <BookOpen size={20} />
                <span className="dropdown-btn-text">
                  Module {currentCourse.id}: {currentCourse.title}
                </span>
              </span>
              <ChevronDown 
                size={20} 
                className={`dropdown-arrow ${mobileDropdownOpen ? 'open' : ''}`}
              />
            </button>
            
            {mobileDropdownOpen && (
              <div className="courses-dropdown-menu">
                <ul className="courses-dropdown-list">
                  {courses.map((course, index) => (
                    <li 
                      key={course.id}
                      className={selectedCourse === index ? 'active' : ''}
                      onClick={() => {
                        setSelectedCourse(index);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      <span className="course-number">{course.id}</span>
                      <span className="course-title-text">{course.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="courses-layout-row">
            
            {/* Left Sidebar - Course List (Desktop Only) */}
            <div className="courses-sidebar">
              <div className="courses-sidebar-inner">
                <div className="courses-sidebar-header">
                  <BookOpen size={24} />
                  <h3>Course Modules</h3>
                </div>
                <ul className="courses-list">
                  {courses.map((course, index) => (
                    <li 
                      key={course.id}
                      className={selectedCourse === index ? 'active' : ''}
                      onClick={() => setSelectedCourse(index)}
                    >
                      <span className="course-number">{course.id}</span>
                      <span className="course-title-text">{course.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="courses-content-area">
              <div className="courses-content-inner">
                
                {/* Course Header */}
                <div className="course-header">
                  <span className="course-badge">Module {currentCourse.id}</span>
                  <h2>{currentCourse.title}</h2>
                  <p className="course-intro">{currentCourse.description}</p>
                </div>

                {/* Course Full Content */}
                <div className="course-full-content">
                  <div className="course-text-content">
                    {currentCourse.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="course-paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key Points Section - Natural Style */}
                  <div className="course-key-points">
                    <h3>What This Module Covers</h3>
                    <ul className="key-points-list">
                      {currentCourse.keyPoints.map((point, index) => (
                        <li key={index}>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Info */}
                  <div className="course-stats">
                    <div className="stat-item">
                      <Clock size={18} />
                      <div>
                        <span className="stat-label">Study Format</span>
                        <span className="stat-value">Learn at Your Own Pace</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <Users size={18} />
                      <div>
                        <span className="stat-label">Program Type</span>
                        <span className="stat-value">Coaching & Education</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="course-cta">
                    <Link to="/enrollment" className="theme-btn btn-one">
                      <span>Enroll in Full Program</span>
                    </Link>
                    <p className="cta-note">
                      This is a coaching and education program. We guide you through the process—you take action independently.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
