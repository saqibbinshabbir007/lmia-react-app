import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from './components/Header';
import MainFooter from './components/MainFooter/MainFooter';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Enrollment from './pages/Enrollment';
import Terms from './pages/Terms';
import './App.css';

// PayPal Client ID - Replace with your actual PayPal Client ID
const initialPayPalOptions = {
  clientId: "test", // Replace with your PayPal Client ID
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <PayPalScriptProvider options={initialPayPalOptions}>
      <Router>
        <div className="boxed_wrapper">
          <ScrollToTop />
          <SmoothScroll />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/course/:courseName" element={<CourseDetail />} />
          </Routes>
          <MainFooter />
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
