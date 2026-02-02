import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="main-footer style-two style-three">
        <div className="widget-section p_relative">
          <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/background/footer-bg.jpg)'}}></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link to="/"><img src="/assets/images/footer-logo.png" alt="ProVisa Coach Consulting" /></Link>
                  </figure>
                  <div className="text">
                    <p>Teaching international talent how to find and approach Canadian employers independently. ProVisa Coach Consulting specializes in career coaching and job search education—we guide you through the process, but you take action on your own.</p>
                    <Link to="/about">About Our Services</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link to="/">Truck Drivers</Link></li>
                      <li><Link to="/">IT Professionals</Link></li>
                      <li><Link to="/">Health Care Workers</Link></li>
                      <li><Link to="/">Skilled Trades</Link></li>
                      <li><Link to="/">Hospitality Jobs</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget ml_30">
                  <div className="widget-title">
                    <h3>Recent Projects</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      <li>
                        <figure className="image-box">
                          <img src="/assets/images/resource/footer-7.jpg" alt="Project" />
                          <a href="/assets/images/resource/footer-7.jpg" className="lightbox-image" data-fancybox="gallery">
                            <i className="icon-30"></i>
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img src="/assets/images/resource/footer-8.jpg" alt="Project" />
                          <a href="/assets/images/resource/footer-8.jpg" className="lightbox-image" data-fancybox="gallery">
                            <i className="icon-30"></i>
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img src="/assets/images/resource/footer-9.jpg" alt="Project" />
                          <a href="/assets/images/resource/footer-9.jpg" className="lightbox-image" data-fancybox="gallery">
                            <i className="icon-30"></i>
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img src="/assets/images/resource/footer-10.jpg" alt="Project" />
                          <a href="/assets/images/resource/footer-10.jpg" className="lightbox-image" data-fancybox="gallery">
                            <i className="icon-30"></i>
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img src="/assets/images/resource/footer-11.jpg" alt="Project" />
                          <a href="/assets/images/resource/footer-11.jpg" className="lightbox-image" data-fancybox="gallery">
                            <i className="icon-30"></i>
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <img src="/assets/images/resource/footer-12.jpg" alt="Project" />
                          <a href="/assets/images/resource/footer-12.jpg" className="lightbox-image" data-fancybox="gallery">
                            <i className="icon-30"></i>
                          </a>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget post-widget">
                  <div className="widget-title">
                    <h3>Trending Post</h3>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <ul className="post-info clearfix">
                        <li><Link to="/">Admin</Link></li>
                        <li>December 30, 2020</li>
                      </ul>
                      <h4><Link to="/">How to prepare for a Canadian Employer Interview.</Link></h4>
                    </div>
                    <div className="post">
                      <ul className="post-info clearfix">
                        <li><Link to="/">Admin</Link></li>
                        <li>January 15, 2024</li>
                      </ul>
                      <h4><Link to="/">Strategizing Your Future: The gateway to your Canada Work Permit.</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright">
              <p>Copyright By &copy; <Link to="/">ProVisa Coach Consulting</Link> - 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
