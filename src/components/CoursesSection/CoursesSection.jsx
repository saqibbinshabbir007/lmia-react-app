import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './CoursesSection.css';

const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            flag: '/assets/images/icons/flag-13.png',
            name: 'Job Search Mastery',
            desc: 'Learn the advanced strategies to navigate the Canadian hidden job market and network effectively with employers.',
            category: 'Career Development'
        },
        {
            id: 2,
            flag: '/assets/images/icons/flag-14.png',
            name: 'Interview Success',
            desc: 'Intensive coaching sessions focused on behavioral and technical interviews with top Canadian companies.',
            category: 'Skill Building'
        },
        {
            id: 3,
            flag: '/assets/images/icons/flag-15.png',
            name: 'Work Permit Guide',
            desc: 'Expert-led sessions explaining the sponsorship details and how to maintain legal compliance during your stay.',
            category: 'Legal & Policy'
        },
        {
            id: 4,
            flag: '/assets/images/icons/flag-16.png',
            name: 'Profile Building',
            desc: 'Optimize your professional profile and resume to meet the exact standards of the Canadian hiring market.',
            category: 'Optimization'
        },
        {
            id: 5,
            flag: '/assets/images/icons/flag-4.png',
            name: 'Language Proficiency',
            desc: 'Specialized training for IELTS/CELPIP to ensure you meet the language requirements for professional roles.',
            category: 'Education'
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
                        {courses.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="cs4-countries-block">
                                    <div className="inner-box">
                                        <div className="cs4-flag">
                                            <img src={item.flag} alt={item.name} />
                                        </div>
                                        <h3><a href="#/">{item.name}</a></h3>
                                        <p>{item.desc}</p>
                                        <div className="cs4-text">Category :</div>
                                        <span className="cs4-designation">{item.category}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
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
            </div>
        </section>
    );
};

export default CoursesSection;
