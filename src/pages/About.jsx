import AboutUs from '../components/AboutUs/AboutUs';
import FeatureSection from '../components/AboutUs/FeatureSection';
import Brief from '../components/Brief/Brief';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import TeamSection from '../components/TeamSection/TeamSection';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Title - Keeps the Navbar visible and provides background */}
      <section className="page-title centred p_relative">
        <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/background/page-title.webp)'}}></div>
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-67.png)'}}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* 1. Main Content Section */}
      <AboutUs />

      {/* 2. Feature Blocks (Now below AboutUs) */}
      <div className="features-wrapper" style={{ position: 'relative', zIndex: 10, marginTop: '20px' }}>
        <FeatureSection />
      </div>

      {/* 3. Brief Section (100% same as StepsSection) */}
      <Brief />

      {/* 4. Countries Section */}
      <CoursesSection />

      {/* 5. Why Choose Us Section */}
      <ChooseUs />

      {/* 6. Expert Team Section */}
      <TeamSection />
    </div>
  );
};

export default About;
