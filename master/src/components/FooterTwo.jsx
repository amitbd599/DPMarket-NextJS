const FooterTwo = () => {
  return (
    <footer className="footer-two section-bg position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/gradients/footer-gradient-bg.png"
        alt=""
        className="bg--gradient"
      />
      <img
        src="assets/images/shapes/footer-pattern1.png"
        alt=""
        className="position-absolute end-0 top-0 z-index--1"
      />
      <img
        src="assets/images/shapes/footer-pattern2.png"
        alt=""
        className="position-absolute start-0 top-0 z-index--1"
      />
      <div className="footer-inner padding-y-120">
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-xl-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-widget__logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo/logo.png"
                      alt=""
                      className="white-version"
                    />
                    <img
                      src="assets/images/logo/white-logo.png"
                      alt=""
                      className="dark-version"
                    />
                  </a>
                </div>
                <p className="footer-widget__desc">
                  Lorem consultancy elitsed do eiusmod tempor inci didunt ut
                  labore dolore magna aliqua sed do eiusmod.
                </p>
                <div className="footer-widget__social">
                  <ul className="social-icon-list">
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.facebook.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.twitter.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.linkedin.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.pinterest.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.pinterest.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-sm-6 col-xs-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title">Useful Link</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item">
                    <a href="all-product.html" className="footer-lists__link">
                      Product
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a
                      href="product-details.html"
                      className="footer-lists__link"
                    >
                      Product Details
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="profile.html" className="footer-lists__link">
                      Profile
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="cart.html" className="footer-lists__link">
                      Shopping Cart
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="dashboard.html" className="footer-lists__link">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-1 d-xl-block d-none" />
            <div className="col-xl-3 col-sm-6 col-xs-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title">Quick Links</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item">
                    <a href="dashboard.html" className="footer-lists__link">
                      Dashboard
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="login.html" className="footer-lists__link">
                      Login{" "}
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="register.html" className="footer-lists__link">
                      Register
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="blog.html" className="footer-lists__link">
                      Blog{" "}
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="blog-details.html" className="footer-lists__link">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title">Categoreis</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item">
                    <a href="all-product.html" className="footer-lists__link">
                      WordPress
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="all-product.html" className="footer-lists__link">
                      React
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="all-product.html" className="footer-lists__link">
                      HTML
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="all-product.html" className="footer-lists__link">
                      Laravel
                    </a>
                  </li>
                  <li className="footer-lists__item">
                    <a href="all-product.html" className="footer-lists__link">
                      Figma
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom Footer Two */}
      <div className="bottom-footer-two">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text font-14">
              Copyright © 2024 DPmarket, All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link font-14">
                Terms of service
              </a>
              <a href="#" className="footer-link font-14">
                Privacy Policy
              </a>
              <a href="contact.html" className="footer-link font-14">
                cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
