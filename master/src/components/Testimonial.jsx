"use client";
import Link from "next/link";
import Slider from "react-slick";

const Testimonial = () => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           dots: false,
        },
      },
    ],
  };
  return (
    <section className="testimonial padding-y-120 position-relative section-bg overflow-hidden">
      <img
        src="assets/images/shapes/brush.png"
        alt=""
        className="element-brush"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Clients Feedback</h3>
          </div>
          <Link scroll={false} href="#" className="btn btn-main btn-lg pill">
            More Feedback
          </Link>
        </div>
        <div className="testimonial-slider">
          <Slider {...settings}>
            <div className="testimonial-item hover-bg-main">
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg dark-version"
              />
              <div className="testimonial-item__rating mb-3">
                <ul className="star-rating">
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="testimonial-item__desc">
                “Great quality products - Flags, programs for exceptional
                capacities, birthday, and occasion welcome are largely still
                mainstream on paper.”
              </p>
              <div className="testimonial-item__quote">
                <img
                  src="assets/images/icons/quote.svg"
                  alt=""
                  className="quote quote-white"
                />
                <img
                  src="assets/images/icons/quote-dark.svg"
                  alt=""
                  className="quote quote-dark"
                />
              </div>
              <div className="client-info d-flex align-items-center gap-3">
                <div className="client-info__thumb">
                  <img src="assets/images/thumbs/client1.png" alt="" />
                </div>
                <div className="client-info__content">
                  <h5 className="client-info__name mb-2">Michel John</h5>
                  <span className="client-info__designation text-heading fw-500">
                    Market Expert
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-item hover-bg-main">
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg dark-version"
              />
              <div className="testimonial-item__rating mb-3">
                <ul className="star-rating">
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="testimonial-item__desc">
                “Great quality products - Flags, programs for exceptional
                capacities, birthday, and occasion welcome are largely still
                mainstream on paper.”
              </p>
              <div className="testimonial-item__quote">
                <img
                  src="assets/images/icons/quote.svg"
                  alt=""
                  className="quote quote-white"
                />
                <img
                  src="assets/images/icons/quote-dark.svg"
                  alt=""
                  className="quote quote-dark"
                />
              </div>
              <div className="client-info d-flex align-items-center gap-3">
                <div className="client-info__thumb">
                  <img src="assets/images/thumbs/client2.png" alt="" />
                </div>
                <div className="client-info__content">
                  <h5 className="client-info__name mb-2">Ralph Edwards</h5>
                  <span className="client-info__designation text-heading fw-500">
                    Analytis
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-item hover-bg-main">
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/testimonial-bg.png"
                alt=""
                className="hover-bg dark-version"
              />
              <div className="testimonial-item__rating mb-3">
                <ul className="star-rating">
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-rating__item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="testimonial-item__desc">
                “Great quality products - Flags, programs for exceptional
                capacities, birthday, and occasion welcome are largely still
                mainstream on paper.”
              </p>
              <div className="testimonial-item__quote">
                <img
                  src="assets/images/icons/quote.svg"
                  alt=""
                  className="quote quote-white"
                />
                <img
                  src="assets/images/icons/quote-dark.svg"
                  alt=""
                  className="quote quote-dark"
                />
              </div>
              <div className="client-info d-flex align-items-center gap-3">
                <div className="client-info__thumb">
                  <img src="assets/images/thumbs/client3.png" alt="" />
                </div>
                <div className="client-info__content">
                  <h5 className="client-info__name mb-2">Jacob Jones</h5>
                  <span className="client-info__designation text-heading fw-500">
                    Market Expert
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
