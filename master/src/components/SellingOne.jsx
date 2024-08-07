"use client";
import Link from "next/link";
import Slider from "react-slick";

const SellingOne = () => {
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
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          
        },
      },
       {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  };
  return (
    <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/gradients/selling-gradient.png"
        alt=""
        className="bg--gradient"
      />
      <img
        src="assets/images/shapes/element2.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <img
        src="assets/images/shapes/curve-pattern1.png"
        alt=""
        className="position-absolute start-0 top-0 z-index--1"
      />
      <img
        src="assets/images/shapes/curve-pattern2.png"
        alt=""
        className="position-absolute end-0 top-0 z-index--1"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-white flx-between max-w-unset gap-4">
          <div>
            <h3 className="section-heading__title">
              Weekly Best selling Products
            </h3>
            <p className="section-heading__desc font-18">
              Every month we pick some best products for you. This month's best
              web themes &amp; templates have arrived, chosen by our content
              specialists.
            </p>
          </div>
          <Link scroll={false}
            href="/all-product"
            className="btn btn-main btn-lg pill fw-300"
          >
            View All Items
          </Link>
        </div>
        <div className="selling-product-slider">
          <Slider {...settings}>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img12.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    Title here digital products new marketplace theme
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="/profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$56</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $65
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-16 mb-2">
                      1230 Sales
                    </span>
                    <ul className="star-rating gap-2">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="flx-align gap-2">
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill"
                    >
                      <span className="icon">
                        <img
                          src="assets/images/icons/download.svg"
                          alt=""
                          className="white-version"
                        />
                        <img
                          src="assets/images/icons/download-white.svg"
                          alt=""
                          className="dark-version"
                        />
                      </span>
                    </Link>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light pill"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img13.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    Title here digital products new marketplace theme
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="/profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$32</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $40
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-16 mb-2">
                      1230 Sales
                    </span>
                    <ul className="star-rating gap-2">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="flx-align gap-2">
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill"
                    >
                      <span className="icon">
                        <img
                          src="assets/images/icons/download.svg"
                          alt=""
                          className="white-version"
                        />
                        <img
                          src="assets/images/icons/download-white.svg"
                          alt=""
                          className="dark-version"
                        />
                      </span>
                    </Link>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light pill"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img14.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    Title here digital products new marketplace theme
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="/profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$90</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $120
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-16 mb-2">
                      1230 Sales
                    </span>
                    <ul className="star-rating gap-2">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="flx-align gap-2">
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill"
                    >
                      <span className="icon">
                        <img
                          src="assets/images/icons/download.svg"
                          alt=""
                          className="white-version"
                        />
                        <img
                          src="assets/images/icons/download-white.svg"
                          alt=""
                          className="dark-version"
                        />
                      </span>
                    </Link>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light pill"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link scroll={false} href="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/product-img13.png"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>
              <div className="product-item__content">
                <h6 className="product-item__title">
                  <Link scroll={false} href="/product-details" className="link">
                    Title here digital products new marketplace theme
                  </Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                  <span className="product-item__author">
                    by
                    <Link scroll={false}
                      href="/profile"
                      className="link hover-text-decoration-underline"
                    >
                      themepix
                    </Link>
                  </span>
                  <div className="flx-align gap-2">
                    <h6 className="product-item__price mb-0">$56</h6>
                    <span className="product-item__prevPrice text-decoration-line-through">
                      $54
                    </span>
                  </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                  <div>
                    <span className="product-item__sales font-16 mb-2">
                      1230 Sales
                    </span>
                    <ul className="star-rating gap-2">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="flx-align gap-2">
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill"
                    >
                      <span className="icon">
                        <img
                          src="assets/images/icons/download.svg"
                          alt=""
                          className="white-version"
                        />
                        <img
                          src="assets/images/icons/download-white.svg"
                          alt=""
                          className="dark-version"
                        />
                      </span>
                    </Link>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn btn-outline-light pill"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SellingOne;
