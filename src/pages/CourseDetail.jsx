import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseName } = useParams();
  
  // Course data mapping
  const courseData = {
    'job-search-mastery': {
      name: 'Canadian Job Search Mastery',
      image: '/assets/images/resource/countries-13.jpg',
      description: 'Master the art of navigating the Canadian hidden job market. This course covers everything from networking strategies to accessing non-advertised positions through strategic professional outreach.',
      features: ['Hidden Job Market Access', 'Employer Networking', 'Strategic Outreach', 'Market Analysis']
    },
    'interview-success': {
      name: 'Interview Success Coaching',
      image: '/assets/images/resource/countries-1.jpg',
      description: 'Prepare for high-stakes interviews with tailored coaching. We focus on Canadian cultural nuances, behavioral question techniques, and technical clarity to ensure you stand out.',
      features: ['Behavioral Questions', 'Mock Interviews', 'Technical Readiness', 'Salary Negotiation']
    },
    'work-permit-strategies': {
      name: 'Work Permit Strategies',
      image: '/assets/images/resource/countries-2.jpg',
      description: 'Understand the legal pathways to working in Canada. This program provides clarity on sponsorship, work permit processes, and legal document preparation for a smooth transition.',
      features: ['Sponsorship Insights', 'Legal Compliance', 'Document Checklists', 'Pathway Selection']
    },
    'resume-optimization': {
      name: 'Profile & Resume Optimization',
      image: '/assets/images/resource/countries-3.jpg',
      description: 'Build a profile that gets noticed by Canadian ATS systems and recruiters. We optimize your resume, cover letter, and LinkedIn profile to reflect global standards.',
      features: ['ATS-Friendly Resume', 'LinkedIn Branding', 'Cover Letter Building', 'Keyword Optimization']
    }
  };

  const course = courseData[courseName] || courseData['job-search-mastery'];

  return (
    <div className="course-detail-page">
      {/* Page Title */}
      <section className="page-title centred p_relative">
        <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/background/page-title.jpg)'}}></div>
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-67.png)'}}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>{course.name}</h1>
            <ul className="bread-crumb clearfix">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li>{course.name}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="courses-details p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="countries-sidebar default-sidebar">
                <div className="sidebar-widget category-widget">
                  <div className="widget-title" style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: '#CE1E22' }}>Other Programs</h4>
                  </div>
                  <ul className="category-list clearfix">
                    <li><Link to="/course/job-search-mastery" className={courseName === 'job-search-mastery' ? 'current' : ''}>Job Search Mastery</Link></li>
                    <li><Link to="/course/interview-success" className={courseName === 'interview-success' ? 'current' : ''}>Interview Coaching</Link></li>
                    <li><Link to="/course/work-permit-strategies" className={courseName === 'work-permit-strategies' ? 'current' : ''}>Work Permit Strategies</Link></li>
                    <li><Link to="/course/resume-optimization" className={courseName === 'resume-optimization' ? 'current' : ''}>Resume Optimization</Link></li>
                  </ul>
                </div>
                <div className="sidebar-widget travel-widget">
                  <div className="widget-content p_relative">
                    <figure className="image-box">
                      <img src="/assets/images/resource/travel-1.jpg" alt="Support" />
                    </figure>
                    <div className="content-box">
                      <h3>Program Support</h3>
                      <ul className="list-item clearfix">
                        <li>1-on-1 Mentorship</li>
                        <li>Resource Library</li>
                        <li>Case Studies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="countries-details-content">
                <div className="content-box">
                  <div className="upper-text mb_30">
                    <h2>Mastering {course.name}</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.8em' }}>{course.description}</p>
                  </div>
                  <div className="two-column mb_30">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image-box">
                          <img src={course.image} alt={course.name} style={{ borderRadius: '8px' }} />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                        <div className="text">
                          <h3>Why Enroll in this Program?</h3>
                          <p>Our curriculum is designed by Canadian industry veterans with over 30 years of success. We don't just teach theory; we provide the exact protocols used to secure thousands of professional contracts.</p>
                          <p>From personalized feedback to real-world simulation, we ensure you are 100% ready for the Canadian market.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="visa-types-section mb_50">
                    <h3 className="mb_30">Core Modules Covered</h3>
                    <div className="row clearfix">
                      {course.features.map((feature, index) => (
                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 visa-item">
                          <div className="visa-block-two">
                            <div className="inner-box" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                              <div className="static-content">
                                <div className="content-box">
                                  <h4 style={{ color: '#032B66', marginBottom: '10px' }}>{feature}</h4>
                                  <p>Advanced strategies and practical exercises for deep understanding.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text">
                    <p>Ready to take the next step in your career? Our enrollment is open for the upcoming cohort. Join ProVisa Coach Consulting and turn your Canadian dreams into reality.</p>
                  </div>
                  <div className="btn-box mt_40">
                    <Link to="/contact" className="theme-btn btn-two">
                      <span>Inquire About Enrollment</span>
                    </Link>
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

export default CourseDetail;
