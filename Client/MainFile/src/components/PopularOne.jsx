"use client";
import Link from "next/link";
import Slider from "react-slick";

const PopularOne = () => {
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
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="popular padding-y-120 overflow-hidden">
      <div className="container container-two">
        <div className="section-heading style-left mb-64">
          <h5 className="section-heading__title">Popular Categories</h5>
        </div>
        <div className="popular-slider arrow-style-two row gy-4">
          <Slider {...settings}>
            <div>
              <Link scroll={false} href="/all-product" className="popular-item w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/popular-icon1.svg" alt="" />
                </span>
                <h6 className="popular-item__title font-18">WordPress</h6>
                <span className="popular-item__qty text-body">15,296</span>
              </Link>
            </div>
            <div>
              <Link scroll={false} href="/all-product" className="popular-item w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/popular-icon2.svg" alt="" />
                </span>
                <h6 className="popular-item__title font-18">Plugin</h6>
                <span className="popular-item__qty text-body">15,296</span>
              </Link>
            </div>
            <div>
              <Link scroll={false} href="/all-product" className="popular-item w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/popular-icon3.svg" alt="" />
                </span>
                <h6 className="popular-item__title font-18">HTML</h6>
                <span className="popular-item__qty text-body">15,296</span>
              </Link>
            </div>
            <div>
              <Link scroll={false} href="/all-product" className="popular-item w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/popular-icon4.svg" alt="" />
                </span>
                <h6 className="popular-item__title font-18">Java Script</h6>
                <span className="popular-item__qty text-body">15,296</span>
              </Link>
            </div>
            <div>
              <Link scroll={false} href="/all-product" className="popular-item w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/popular-icon5.svg" alt="" />
                </span>
                <h6 className="popular-item__title font-18">Mobile App</h6>
                <span className="popular-item__qty text-body">15,296</span>
              </Link>
            </div>
            <div>
              <Link scroll={false} href="/all-product" className="popular-item w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/popular-icon6.svg" alt="" />
                </span>
                <h6 className="popular-item__title font-18">PHP Script</h6>
                <span className="popular-item__qty text-body">15,296</span>
              </Link>
            </div>
            <div>
              <Link scroll={false} href="/all-product" className="popular-item w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/popular-icon4.svg" alt="" />
                </span>
                <h6 className="popular-item__title font-18">Java Script</h6>
                <span className="popular-item__qty text-body">15,296</span>
              </Link>
            </div>
          </Slider>
        </div>
        <div className="popular__button text-center">
          <Link scroll={false}
            href="/all-product"
            className="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularOne;
