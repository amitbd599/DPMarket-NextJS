import Link from "next/link";

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
                  <Link scroll={false} href="/">
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
                  </Link>
                </div>
                <p className="footer-widget__desc">
                  Lorem consultancy elitsed do eiusmod tempor inci didunt ut
                  labore dolore magna aliqua sed do eiusmod.
                </p>
                <div className="footer-widget__social">
                  <ul className="social-icon-list">
                    <li className="social-icon-list__item">
                      <Link scroll={false}
                        href="https://www.facebook.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link scroll={false}
                        href="https://www.twitter.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link scroll={false}
                        href="https://www.linkedin.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link scroll={false}
                        href="https://www.pinterest.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li className="social-icon-list__item">
                      <Link scroll={false}
                        href="https://www.pinterest.com"
                        className="social-icon-list__link flx-center"
                      >
                        <i className="fab fa-youtube" />
                      </Link>
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
                    <Link scroll={false} href="/all-product" className="footer-lists__link">
                      Product
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false}
                      href="/product-details"
                      className="footer-lists__link"
                    >
                      Product Details
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/profile" className="footer-lists__link">
                      Profile
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/cart" className="footer-lists__link">
                      Shopping Cart
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/dashboard" className="footer-lists__link">
                      Dashboard
                    </Link>
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
                    <Link scroll={false} href="/dashboard" className="footer-lists__link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/login" className="footer-lists__link">
                      Login{" "}
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/register" className="footer-lists__link">
                      Register
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/blog" className="footer-lists__link">
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/blog-details" className="footer-lists__link">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title">Categoreis</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/all-product" className="footer-lists__link">
                      WordPress
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/all-product" className="footer-lists__link">
                      React
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/all-product" className="footer-lists__link">
                      HTML
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/all-product" className="footer-lists__link">
                      Laravel
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link scroll={false} href="/all-product" className="footer-lists__link">
                      Figma
                    </Link>
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
              <Link scroll={false} href="#" className="footer-link font-14">
                Terms of service
              </Link>
              <Link scroll={false} href="#" className="footer-link font-14">
                Privacy Policy
              </Link>
              <Link scroll={false} href="/contact" className="footer-link font-14">
                cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
