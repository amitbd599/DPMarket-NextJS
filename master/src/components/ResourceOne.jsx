"use client";
import Link from "next/link";
import Slider from "react-slick";

const ResourceOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-right" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-left" />
      </button>
    );
  }
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
            dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            dots: false,
        },
      },
    ],
  };
  return (
    <section className="resource padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/shapes/element-moon3.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/shapes/curve-pattern3.png"
        alt=""
        className="d-none position-absolute end-0 top-0 z-index--1"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Free Resources</h3>
            <p className="section-heading__desc">
              Every month we pick some best products for you. This month's best
              web themes &amp; templates have arrived, chosen by our content
              specialists.
            </p>
          </div>
          <Link scroll={false} href="#" className="btn btn-main btn-lg pill">
            View All Items
          </Link>
        </div>
        <div className="resource-slider gy-4">
          <Slider {...settings}>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img1.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
                <button type="button" className="product-item__wishlist">
                  <i className="fas fa-heart" />
                </button>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    SaaS dashboard digital products Title here
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$120</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $259
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-14 mb-2">
                      1200 Sales
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="star-rating">
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <span className="star-rating__text text-heading fw-500 font-14">
                        (16)
                      </span>
                    </div>
                  </div>
                  <Link scroll={false}
                    href="/product-details"
                    className="btn btn-outline-light btn-sm pill"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img2.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
                <button type="button" className="product-item__wishlist">
                  <i className="fas fa-heart" />
                </button>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    SaaS dashboard digital products Title here
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$100</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $130
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-14 mb-2">
                      952 Sales
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="star-rating">
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <span className="star-rating__text text-heading fw-500 font-14">
                        (16)
                      </span>
                    </div>
                  </div>
                  <Link scroll={false}
                    href="/product-details"
                    className="btn btn-outline-light btn-sm pill"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img3.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
                <button type="button" className="product-item__wishlist">
                  <i className="fas fa-heart" />
                </button>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    SaaS dashboard digital products Title here
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$160</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $000
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-14 mb-2">
                      1000 Sales
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="star-rating">
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <span className="star-rating__text text-heading fw-500 font-14">
                        (16)
                      </span>
                    </div>
                  </div>
                  <Link scroll={false}
                    href="/product-details"
                    className="btn btn-outline-light btn-sm pill"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img4.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
                <button type="button" className="product-item__wishlist">
                  <i className="fas fa-heart" />
                </button>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    SaaS dashboard digital products Title here
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$250</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $300
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-14 mb-2">
                      320 Sales
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="star-rating">
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <span className="star-rating__text text-heading fw-500 font-14">
                        (16)
                      </span>
                    </div>
                  </div>
                  <Link scroll={false}
                    href="/product-details"
                    className="btn btn-outline-light btn-sm pill"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img5.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
                <button type="button" className="product-item__wishlist">
                  <i className="fas fa-heart" />
                </button>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    SaaS dashboard digital products Title here
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$65</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $85
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-14 mb-2">
                      1001 Sales
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="star-rating">
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star-rating__item font-11">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <span className="star-rating__text text-heading fw-500 font-14">
                        (16)
                      </span>
                    </div>
                  </div>
                  <Link scroll={false}
                    href="/product-details"
                    className="btn btn-outline-light btn-sm pill"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ResourceOne;
