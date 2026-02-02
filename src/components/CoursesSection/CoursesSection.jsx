import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, FileCheck, Search, FileText, Mail, Linkedin, Users, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './CoursesSection.css';

const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            icon: FileCheck,
            name: 'Understanding Work Permits & How They Work',
            desc: 'Learn what work permits are, why they\'re important for working in Canada, and how the process actually works. This foundation will help you approach your job search with clarity and confidence.',
            category: 'Foundation'
        },
        {
            id: 2,
            icon: Search,
            name: 'How to Find Canadian Job Opportunities',
            desc: 'Discover the best sources and strategies to locate genuine Canadian job openings. Avoid wasting time on dead ends and focus on opportunities that can lead to a work permit.',
            category: 'Job Search'
        },
        {
            id: 3,
            icon: FileText,
            name: 'How to Write a Canadian-Style Resume',
            desc: 'Understand the structure, format, and tone Canadian employers expect in a resume. Learn how to present your skills in a way that gets you shortlisted.',
            category: 'Resume Building'
        },
        {
            id: 4,
            icon: Mail,
            name: 'Crafting a Powerful Cover Letter',
            desc: 'Create compelling cover letters that grab employers\' attention. Showcase your value and why you\'re the right fit for the job!',
            category: 'Application'
        },
        {
            id: 5,
            icon: Linkedin,
            name: 'Optimizing Your LinkedIn Profile',
            desc: 'Make your LinkedIn profile a powerful job-hunting tool. Learn how to attract recruiters, appear in more searches, and present yourself professionally.',
            category: 'Online Presence'
        },
        {
            id: 6,
            icon: Users,
            name: 'Networking & Finding Hidden Canadian Jobs',
            desc: 'Tap into the "hidden" job market that isn\'t posted online. Learn how to build professional relationships that lead to real opportunities.',
            category: 'Networking'
        }
    ];

    return (
        <section className="cs4-countries-section">
            {/* Pattern Background */}
            <div 
                className="cs4-pattern-layer" 
                style={{ backgroundImage: 'url(/assets/images/shape/shape-48.png)' }}
            ></div>

            <div className="auto-container">
                {/* Section Title */}
                <div className="cs4-sec-title centred mb_60">
                    <span className="cs4-sub-title">Our Expert Programs</span>
                    <h2>Premium Professional Courses for <br />Your Global Career Growth.</h2>
                </div>

                {/* Swiper Carousel */}
                <div className="cs4-carousel-container">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.cs4-prev',
                            nextEl: '.cs4-next',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView:3 },
                            1200: { slidesPerView: 4 }
                        }}
                    >
                        {courses.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className="cs4-countries-block">
                                        <div className="inner-box">
                                            <div className="cs4-icon-wrapper">
                                                <IconComponent size={40} />
                                            </div>
                                            <h3>{item.name}</h3>
                                            <p>{item.desc}</p>
                                            <div className="cs4-text">Module {item.id} • {item.category}</div>
                                            <Link to={`/courses?module=${item.id - 1}`} className="cs4-view-btn">
                                                View Module <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Navigation Arrows */}
                    <div className="cs4-carousel-nav">
                        <div className="cs4-nav-btn cs4-prev">
                            <ChevronLeft size={24} />
                        </div>
                        <div className="cs4-nav-btn cs4-next">
                            <ChevronRight size={24} />
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="cs4-cta-wrapper">
                    <Link to="/courses" className="cs4-view-all-btn">
                        View All Modules <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
