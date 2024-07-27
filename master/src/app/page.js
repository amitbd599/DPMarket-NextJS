"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Animation from "@/helper/Animation";
import Preloader from "@/helper/Preloader";
import Link from "next/link";

export default function Home() {
  return (
    <section className="demo">
      {/* Animation */}
      <Animation />
      {/* Preloader */}
      <Preloader />
      {/* Navigation */}
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
          <div className="container nav-container">
            <div className="logo">
              <Link className="main-logo" href="/">
                <img src="assets/img/demo/logo.svg" alt="img" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile ms-auto"></div>
            <div className="collapse navbar-collapse" id="al_main_menu">
              <ul className="navbar-nav menu-open text-center m-auto">
                <li>
                  <a className="page-scroll" href="#demo">
                    Demos
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#inner">
                    Inner Pages
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#header">
                    Header
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#footer">
                    Footer
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#featured">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                <li>
                  <Link
                    href="https://themeforest.net/user/wowtheme7"
                    className="btn btn-base"
                  >
                    Purchase Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Banner Area Start*/}
      <section id="banner" className="banner-area">
        <div className="sidebar-links">
          <Link
            className="btn btn-white"
            href="https://themeforest.net/user/wowtheme7"
          >
            <i className="fa fa-cart-arrow-down" />
            Add To Cart
          </Link>
          <Link
            className="btn btn-white"
            href="https://themeforest.net/user/wowtheme7"
          >
            <i className="fa fa-cog" />
            Demo Link
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 align-self-center">
              <div className="banner-inner text-center">
                <img
                  className="banner-logo"
                  src="/assets/img/demo/nextjs.svg"
                  alt="logo"
                />
                <h1 className="mt-4">
                  Fixturbo - Car Repair &amp; Auto Services NEXT JS Template
                  With RTL
                </h1>
                <p className="me-5 mb-5">
                  Fixturbo is Car Repair &amp; Auto Services NEXT Js Template
                  built for an array of services with Link number of auto
                  service and car repair institutions in mind.
                </p>
                <div className="btn-area">
                  <a className="btn btn-border page-scroll" href="#demo">
                    Try Demos
                  </a>
                  <Link
                    className="btn btn-base me-0"
                    href="https://themeforest.net/user/wowtheme7"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-thumb-wrap">
            <div className="hero-thumb1">
              <img src="assets/img/demo/01.png" alt="img" />
            </div>
            <div className="hero-thumb2 jump">
              <img src="assets/img/demo/06.png" alt="img" />
            </div>
            <div className="hero-thumb3 jump">
              <img src="assets/img/demo/03.png" alt="img" />
            </div>
            <div className="hero-thumb4 jump-reverse">
              <img src="assets/img/demo/04.png" alt="img" />
            </div>
            <div className="hero-thumb5 jump-reverse">
              <img src="assets/img/demo/05.png" alt="img" />
            </div>
            <div className="hero-thumb6 jump-reverse">
              <img src="assets/img/demo/02.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* Banner Area End */}
      {/* counter start */}
      <div className="counter-area pd-top-115 pd-bottom-90">
        <div className="container">
          <div
            className="counter-area-inner wow fadeInUp animated"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={20} />+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Total Pages</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={6} />
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Total Homes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={14} />+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Inner Pages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter end */}
      {/* demo Section */}
      <section id="demo" className="demo-section pd-top-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h5 className="subtitle">AWESOME DEMOS</h5>
                <h2 className="title">Great Home Pages</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/1.png" alt="img" />
                  </span>
                  Home V.1
                  <div className="item-title">Home Auto Repair</div>
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/home-1"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext-rtl.wowtheme7.com/home-1"
                  >
                    RTL Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/2.png" alt="img" />
                  </span>
                  Home V.2
                  <div className="item-title">Home Automotive</div>
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/home-2"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext-rtl.wowtheme7.com/home-2"
                  >
                    RTL Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/3.png" alt="img" />
                  </span>
                  Home V.3
                  <div className="item-title">Home Car Fixers</div>
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/home-3"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext-rtl.wowtheme7.com/home-3"
                  >
                    RTL Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/4.png" alt="img" />
                  </span>
                  Home V.4
                  <div className="item-title">Home Auto Revive</div>
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/home-4"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext-rtl.wowtheme7.com/home-4"
                  >
                    RTL Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/5.png" alt="img" />
                  </span>
                  Home V.5
                  <div className="item-title">Home Car Care</div>
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/home-5"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext-rtl.wowtheme7.com/home-5"
                  >
                    RTL Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/6.png" alt="img" />
                  </span>
                  Home V.6
                  <div className="item-title">Home Auto Parts</div>
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/home-6"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext-rtl.wowtheme7.com/home-6"
                  >
                    RTL Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp coming-soon"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/4.png" alt="img" />
                  </span>
                  <span className="cm-soon-title">Comming Soon</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section id="inner" className="inner-section pd-top-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h2 className="title">Great Inner Pages</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/about.png" alt="img" />
                  </span>
                  About Page
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/about"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/service.png" alt="img" />
                  </span>
                  Service Page
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/service"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/service-details.png" alt="img" />
                  </span>
                  Service Details
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/service-details"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/project.png" alt="img" />
                  </span>
                  Project Page
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/project"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/project-details.png" alt="img" />
                  </span>
                  Project Details
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/project-details"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/team.png" alt="img" />
                  </span>
                  Team Page
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/team"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/team-details.png" alt="img" />
                  </span>
                  Team Details
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/team-details"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/blog.png" alt="img" />
                  </span>
                  Blog Page
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/blog"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/blog-details.png" alt="img" />
                  </span>
                  Blog Details
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/blog-details"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/shop.png" alt="img" />
                  </span>
                  Shop Page
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/shop"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/shop-details.png" alt="img" />
                  </span>
                  Shop Details
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/shop-details"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/contact.png" alt="img" />
                  </span>
                  Contact Page
                </Link>
                <div className="btn-group">
                  <Link
                    className="btn btn-base"
                    href="https://fixturbonext.wowtheme7.com/contact"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp coming-soon"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <Link href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/4.png" alt="img" />
                  </span>
                  <span className="cm-soon-title">Comming Soon</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id="header" className="widget-section pd-top-87">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h2 className="title">Header Style</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/header.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/header2.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/header3.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id="footer" className="widget-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center pd-top-130">
              <div className="section-title">
                <h2 className="title">Footer Style</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/footer.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section
        id="featured"
        className="featured-section pd-top-87 pd-bottom-110"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h2 className="title">Core Features</h2>
                {/* <p>We have created Link new product that will help designers, developers and com-panies create websites for their startups quickly and easily.</p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/3.png" alt="img" />
                Bootstrap 5+
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/1.png" alt="img" />
                Sass
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/4.png" alt="img" />
                Font-Awesome
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/2.png" alt="img" />
                Swiper js
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/5.png" alt="img" />
                HTML5 JSX
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/6.png" alt="img" />
                CSS3
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/8.png" alt="img" />
                W3C Validation
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/9.png" alt="img" />
                Clean Code
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/12.png" alt="img" />
                100% Responsive
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/11.png" alt="img" />
                Google Fonts
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/14.png" alt="img" />
                Well Documented
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/15.png" alt="img" />
                Counter Up
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer area start */}
      <footer
        className="footer-area pd-top-100"
        style={{ backgroundImage: 'url("assets/img/demo/01.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="footer-widget widget text-center pd-bottom-100">
                <Link className="logo" href="/">
                  <img src="assets/img/demo/logo-white.svg" alt="#" />
                </Link>
                <h5 className="text-white mb-5 mt-5 lh-base">
                  It is Link modern &amp; beautiful Car Repair &amp; Auto
                  Services NEXT Template. It's Specially Car Repair &amp; Auto
                  Services Company website.
                </h5>
                <Link
                  className="btn btn-white"
                  href="https://themeforest.net/user/wowtheme7"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center align-self-center">
                <p>Copy Right by wowtheme7</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </section>
  );
}
