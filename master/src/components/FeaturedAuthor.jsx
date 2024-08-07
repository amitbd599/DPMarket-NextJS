"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
const FeaturedAuthor = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);
  return (
    <section className="top-author padding-y-120 section-bg position-relative z-index-1">
      <img
        src="assets/images/gradients/featured-gradient.png"
        alt=""
        className="bg--gradient white-version"
      />
      <img
        src="assets/images/shapes/spider-net.png"
        alt=""
        className="spider-net position-absolute top-0 start-0 z-index--1 white-version"
      />
      <img
        src="assets/images/shapes/spider-net-white2.png"
        alt=""
        className="spider-net position-absolute top-0 start-0 z-index--1 dark-version"
      />
      <img
        src="assets/images/shapes/pattern-curve-three.png"
        alt=""
        className="position-absolute top-0 end-0 z-index--1"
      />
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <div className="container container-two">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Top Featured Author</h3>
                <p className="section-heading__desc font-18 w-sm">
                  Every month we pick some best products for you. This month's
                  best web themes &amp; templates have arrived, chosen by our
                  content specialists.
                </p>
              </div>
              <div className="author-info d-flex align-items-center gap-3">
                <div className="author-info__thumb">
                  <img src="assets/images/thumbs/author-img.png" alt="" />
                </div>
                <div className="author-info__content">
                  <h4 className="author-info__name mb-1">Amplify</h4>
                  <span className="author-info__text">Member Since 2021</span>
                </div>
              </div>
              <div className="flx-align gap-2 mt-48">
                <Link scroll={false}
                  href="/profile"
                  className="btn btn-main btn-lg pill fw-300"
                >
                  View Profile
                </Link>
                <button
                  type="button"
                  className="follow-btn btn btn-outline-light btn-lg pill"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="circle-content position-relative">
              <div className="circle static-circle">
                <div className="circle__badge">
                  <img src="assets/images/icons/featured-badge.png" alt="" />
                </div>
                <div className="circle__text" ref={textRef}>
                     <p>DP marketer Top Featured Author</p>
                </div>
              </div>
              <div className="row gy-4 card-wrapper">
                <div className="col-sm-6">
                  <div className="product-item box-shadow">
                    <div className="product-item__thumb d-flex">
                      <Link scroll={false} href="/product-details" className="link w-100">
                        <img
                          src="assets/images/thumbs/product-img9.png"
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
                            href="/profile"
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
                </div>
                <div className="col-sm-6">
                  <div className="product-item box-shadow">
                    <div className="product-item__thumb d-flex">
                      <Link scroll={false} href="/product-details" className="link w-100">
                        <img
                          src="assets/images/thumbs/product-img10.png"
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
                            href="/profile"
                            className="link hover-text-decoration-underline"
                          >
                            themepix
                          </Link>
                        </span>
                        <div className="flx-align gap-2">
                          <h6 className="product-item__price mb-0">$129</h6>
                          <span className="product-item__prevPrice text-decoration-line-through">
                            $236
                          </span>
                        </div>
                      </div>
                      <div className="product-item__bottom flx-between gap-2">
                        <div>
                          <span className="product-item__sales font-14 mb-2">
                            100 Sales
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
                </div>
                <div className="col-sm-6">
                  <div className="product-item box-shadow">
                    <div className="product-item__thumb d-flex">
                      <Link scroll={false} href="/product-details" className="link w-100">
                        <img
                          src="assets/images/thumbs/product-img11.png"
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
                            href="/profile"
                            className="link hover-text-decoration-underline"
                          >
                            themepix
                          </Link>
                        </span>
                        <div className="flx-align gap-2">
                          <h6 className="product-item__price mb-0">$79</h6>
                          <span className="product-item__prevPrice text-decoration-line-through">
                            $99
                          </span>
                        </div>
                      </div>
                      <div className="product-item__bottom flx-between gap-2">
                        <div>
                          <span className="product-item__sales font-14 mb-2">
                            900 Sales
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
                </div>
                <div className="col-sm-6">
                  <div className="product-item box-shadow">
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
                            href="/profile"
                            className="link hover-text-decoration-underline"
                          >
                            themepix
                          </Link>
                        </span>
                        <div className="flx-align gap-2">
                          <h6 className="product-item__price mb-0">$59</h6>
                          <span className="product-item__prevPrice text-decoration-line-through">
                            $129
                          </span>
                        </div>
                      </div>
                      <div className="product-item__bottom flx-between gap-2">
                        <div>
                          <span className="product-item__sales font-14 mb-2">
                            1225 Sales
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuthor;
