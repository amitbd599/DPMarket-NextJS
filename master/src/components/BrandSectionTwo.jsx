"use client";
import Slider from "react-slick";

const BrandSectionTwo = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="brand mt-0">
      <div className="container container">
        <div className="brand-slider">
          <Slider {...settings}>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img
                src="assets/images/thumbs/brand-img1.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/thumbs/brand-white-img1.png"
                alt=""
                className="dark-version"
              />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img
                src="assets/images/thumbs/brand-img2.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/thumbs/brand-white-img2.png"
                alt=""
                className="dark-version"
              />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img
                src="assets/images/thumbs/brand-img3.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/thumbs/brand-white-img3.png"
                alt=""
                className="dark-version"
              />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img
                src="assets/images/thumbs/brand-img4.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/thumbs/brand-white-img4.png"
                alt=""
                className="dark-version"
              />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img
                src="assets/images/thumbs/brand-img5.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/thumbs/brand-white-img5.png"
                alt=""
                className="dark-version"
              />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img
                src="assets/images/thumbs/brand-img3.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/thumbs/brand-white-img3.png"
                alt=""
                className="dark-version"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrandSectionTwo;
