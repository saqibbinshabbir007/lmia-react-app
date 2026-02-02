import { Link } from 'react-router-dom';
import { 
  Clock,
  Briefcase,
  FileCheck,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import AboutSection from '../components/AboutSection';
import CoachingSection from '../components/CoachingSection';
import HelpSection from '../components/HelpSection/HelpSection';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import EducationSection from '../components/EducationSection/EducationSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import StepsSection from '../components/StepsSection/StepsSection';
import IncredibleDeal from '../components/IncredibleDeal/IncredibleDeal';

import Banner from '../components/Banner/Banner';
import FeatureSection from '../components/AboutUs/FeatureSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Banner Section */}
      <Banner />

      {/* Feature Section (Reusable Comp with Overlap) */}
      <FeatureSection isHome={true} />

      {/* About Section */}
      <AboutSection />

      {/* Coaching Section */}
      <CoachingSection />

      {/* Help Section */}
      <HelpSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Education Section (Job Focused) */}
      <EducationSection />

      {/* Skills Section (Placement Stats) */}
      <SkillsSection />

      {/* Steps Section (Dream Style Two) */}
      <StepsSection />

      {/* Incredible Deal Promotion */}
      <IncredibleDeal />


    </div>
  );
};

export default Home;
