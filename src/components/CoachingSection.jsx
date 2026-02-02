import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './CoachingSection.css';

const CoachingSection = () => {
  const serviceData = [
    {
      id: 1,
      image: '/coaching/coaching-1.webp',
      iconClass: 'icon-38',
      title: 'Career Strategy & Insights',
      shortDesc: 'Learn the professional framework and search tactics required to find your own career path in Canada.',
      fullDesc: 'We empower you with a comprehensive coaching roadmap. You will learn how to optimize your profile for Canadian standards, master the art of approaching employers directly, and develop a strategic job-search mindset. Our goal is to give you the independence and skills to navigate the Canadian market and secure a job offer through your own efforts.',
      link: '/services/employer-matching'
    },
    {
      id: 2,
      image: '/coaching/coaching-2.webp',
      iconClass: 'icon-39',
      title: 'Job Search Methodology',
      shortDesc: 'Master the tools to identify and access the hidden Canadian job market independently.',
      fullDesc: 'We teach you how to effectively use job banks and networking platforms. Learn the strategy to find verified opportunities across all Canadian provinces and eliminate uncertainty by knowing exactly where and how to apply.',
      link: '/services/provisa-jobs'
    },
    {
      id: 3,
      image: '/coaching/coaching-3.webp',
      iconClass: 'icon-40',
      title: 'Profile & Branding Mastery',
      shortDesc: 'Learn how to align your professional profile with the specific expectations of Canadian employers.',
      fullDesc: 'We coach you on the essential techniques to build a high impact Canadian style resume and LinkedIn profile. Gain the knowledge to showcase your skills effectively so you can stand out to hiring managers and take charge of your own career growth in Canada.',
      link: '/services/resume-tailoring'
    },
    {
      id: 4,
      image: '/coaching/interview-mastery.png',
      iconClass: 'icon-41',
      title: 'Interview Mastery',
      shortDesc: 'Expert preparation for successful Canadian interviews.',
      fullDesc: 'Master the Canadian hiring process. We provide expert insights into employer expectations so you can ace your own high stakes interviews.',
      link: '/services/hiring-prep'
    }
  ];

  return (
    <section className="cs3-section">
      <div className="cs3-carousel-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          className="cs3-swiper"
        >
          {serviceData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="cs3-block">
                <div className="cs3-inner">
                  {/* Static Content (Desktop Focus) */}
                  <div className="cs3-static">
                    <figure className="cs3-img-box">
                      <img src={item.image} alt={item.title} />
                    </figure>
                    <div className="cs3-content">
                      <div className="cs3-icon-wrap">
                        <i className={item.iconClass}></i>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.shortDesc}</p>
                    </div>
                  </div>

                  {/* Overlay Content (Default on Mobile, Hover on Desktop) */}
                  <div className="cs3-overlay">
                    <figure className="cs3-img-box">
                      <img src={item.image} alt={item.title} />
                    </figure>
                    <div className="cs3-layer"></div>
                    <div className="cs3-content">
                      <div className="cs3-icon-wrap">
                        <i className={item.iconClass}></i>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.fullDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoachingSection;
