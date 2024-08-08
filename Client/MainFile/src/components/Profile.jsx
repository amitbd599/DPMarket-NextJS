'use client'
import { useState } from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Profile = () => {

  const [activeButton, setActiveButton] = useState("grid-view");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

 let options =  {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }

  let series= [{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }]


    return (
        <section className={`profile pt-5 padding-b-120 ${activeButton === "list-view" ? "list-view" : ""
      }`}>
        <div className="container container-two">
          <div className="tab-content" id="pills-tabb">
            <div
              className="tab-pane fade show active"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              {/* Tab Content End */}
              <div className="profile-wrapper">
                <div className="profile-content">
                  <div className="profile-content__inner">
                    <div className="profile-content__thumb mb-lg-5 mb-4">
                      <img src="assets/images/thumbs/profile-img.png" alt="" />
                    </div>
                    <div className="profile-content__item-wrapper">
                      <div className="profile-content__item">
                        <h5 className="profile-content__title mb-2">About us</h5>
                        <p className="profile-content__desc">
                          At Dpmarket, our journey began in 2018 with a singular
                          mission: to craft innovative digital products that empower
                          businesses in the ever-evolving landscape of the digital
                          world. With a passion for technology and a commitment to
                          excellence, we have steadily grown into a trusted name in
                          the realm of digital solutions.
                        </p>
                      </div>
                      <div className="profile-content__item">
                        <h5 className="profile-content__title mb-2">Our Vision</h5>
                        <p className="profile-content__desc">
                          At Dpmarket, our journey began in 2018 with a singular
                          mission: to craft innovative digital products that empower
                          businesses in the ever-evolving landscape of the digital
                          world. With a passion for technology and a commitment to
                          excellence, we have steadily grown into a trusted name in
                          the realm of digital solutions.
                        </p>
                      </div>
                      <div className="profile-content__item">
                        <h5 className="profile-content__title mb-2">Our Expertise</h5>
                        <p className="profile-content__desc">
                          At Dpmarket, our journey began in 2018 with a singular
                          mission: to craft innovative digital products that empower
                          businesses in the ever-evolving landscape of the digital
                          world. With a passion for technology and a commitment to
                          excellence, we have steadily grown into a trusted name in
                          the realm of digital solutions.
                        </p>
                      </div>
                      <div className="profile-content__item">
                        <h5 className="profile-content__title mb-2">
                          Our Commitment to Quality
                        </h5>
                        <p className="profile-content__desc">
                          At Dpmarket, our journey began in 2018 with a singular
                          mission: to craft innovative digital products that empower
                          businesses in the ever-evolving landscape of the digital
                          world. With a passion for technology and a commitment to
                          excellence, we have steadily grown into a trusted name in
                          the realm of digital solutions.
                        </p>
                      </div>
                      <div className="profile-content__item">
                        <h5 className="profile-content__title mb-2">Our Portfolio</h5>
                        <p className="profile-content__desc">
                          At Dpmarket, our journey began in 2018 with a singular
                          mission: to craft innovative digital products that empower
                          businesses in the ever-evolving landscape of the digital
                          world. With a passion for technology and a commitment to
                          excellence, we have steadily grown into a trusted name in
                          the realm of digital solutions.
                        </p>
                      </div>
                      <div className="profile-content__item">
                        <h5 className="profile-content__title mb-2">Get Support</h5>
                        <p className="profile-content__desc">
                          At Dpmarket, our journey began in 2018 with a singular
                          mission: to craft innovative digital products that empower
                          businesses in the ever-evolving landscape of the digital
                          world. With a passion for technology and a commitment to
                          excellence, we have steadily grown into a trusted name in
                          the realm of digital solutions.
                        </p>
                      </div>
                    </div>
                    <div className="follower-item">
                      <div className="flx-between mb-4">
                        <h5 className="follower-item__title mb-0">1285 Followers</h5>
                        <Link scroll={false}
                          href="/profile"
                          className="text-body fw-500 hover-text-decoration-underline"
                        >
                          View All Followers
                        </Link>
                      </div>
                      <div className="follower-item__content flx-align">
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower1.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower2.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower3.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower4.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower5.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower6.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower7.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower8.png" alt="" />
                          </Link>
                        </div>
                        <div className="follower-item__item">
                          <Link scroll={false}
                            href="/all-product"
                            className="link w-100 h-100 d-block"
                          >
                            <img src="assets/images/thumbs/follower3.png" alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ========================== Profile Sidebar Start =========================== */}
                <div className="profile-sidebar">
                  <div className="profile-sidebar__item">
                    <h5 className="mb-4">Featured Items</h5>
                    <div className="featured-item d-flex align-items-center gap-4">
                      <div className="featured-item__thumb">
                        <Link scroll={false} href="/product-details" className="link">
                          <img
                            src="assets/images/thumbs/featured-item-img.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="featured-item__content">
                        <h6 className="featured-item__title mb-2">
                          <Link scroll={false} href="/product-details" className="link">
                            Personal portfolio one page template
                          </Link>
                        </h6>
                        <span className="featured-item__text mb-2 text-heading fw-500">
                          250 Purchases
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
                          <span className="star-rating__text text-body font-14">
                            {" "}
                            5.0{" "}
                          </span>
                          <span className="star-rating__text text-body font-14">
                            {" "}
                            (116)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="profile-sidebar__author">
                      <div className="author-details p-0 border-0 mt-0">
                        <div className="d-flex align-items-center gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <span className="d-flex align-items-center gap-1">
                              <span className="star-rating">
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                              </span>
                              <span className="star-rating__text text-body">
                                {" "}
                                5.0
                              </span>
                            </span>
                          </div>
                        </div>
                        <ul className="badge-list flx-align gap-2 mt-3">
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge1.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge2.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge3.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge4.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge5.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge6.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge7.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge8.png" alt="" />
                          </li>
                        </ul>
                        <Link scroll={false}
                          href="/profile"
                          className="btn btn-outline-light w-100 pill mt-32 fw-600"
                        >
                          Total 89 Items
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="profile-sidebar__item">
                    <h5 className="profile-sidebar__title">Email to Support</h5>
                    <form action="#">
                      <div className="row gy-4">
                        <div className="col-12">
                          <label
                            htmlFor="emailsId"
                            className="form-label mb-2 font-18 fw-500"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="common-input radius-8 common-input--md"
                            id="emailsId"
                            placeholder="dpmarket@gmail.com"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="messagesId"
                            className="form-label mb-2 font-18 fw-500"
                          >
                            Message
                          </label>
                          <textarea
                            className="common-input radius-8"
                            id="messagesId"
                            placeholder="Write Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-main btn-md w-100">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="profile-sidebar__item">
                    <h5 className="profile-sidebar__title">Social Profile</h5>
                    <ul className="social-icon-list">
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.facebook.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.twitter.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.linkedin.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.pinterest.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.pinterest.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* ========================== Profile Sidebar End =========================== */}
              </div>
              {/* Tab Content Start */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-portfolio"
              role="tabpanel"
              aria-labelledby="pills-portfolio-tab"
              tabIndex={0}
            >
              {/* Profile Portfolio Content Star */}
              {/* Tab Start */}
              <div className="filter-tab gap-3 flx-between mb-5">
                <div className="list-grid d-flex align-items-center gap-2">
                  <button className={`list-grid__button list-button d-sm-flex d-none text-body ${activeButton === "list-view" ? "active" : ""
                    }`}  onClick={() => handleClick("list-view")}>
                    <i className="las la-list" />
                  </button>
                  <button className={`list-grid__button grid-button d-sm-flex d-none text-body ${activeButton === "grid-view" ? "active" : ""
                    }`} onClick={() => handleClick("grid-view")}>
                    <i className="las la-border-all" />
                  </button>
                </div>
                <ul
                  className="nav common-tab nav-pills mb-0 gap-lg-2 gap-1 me-auto"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-product-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-product"
                      type="button"
                      role="tab"
                      aria-controls="pills-product"
                      aria-selected="true"
                    >
                      All Item
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-bestMatch-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bestMatch"
                      type="button"
                      role="tab"
                      aria-controls="pills-bestMatch"
                      aria-selected="false"
                    >
                      {" "}
                      Best Match
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-bestRating-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bestRating"
                      type="button"
                      role="tab"
                      aria-controls="pills-bestRating"
                      aria-selected="false"
                    >
                      Best Rating
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-trending-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-trending"
                      type="button"
                      role="tab"
                      aria-controls="pills-trending"
                      aria-selected="false"
                    >
                      Site Template
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-bestOffers-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bestOffers"
                      type="button"
                      role="tab"
                      aria-controls="pills-bestOffers"
                      aria-selected="false"
                    >
                      Best Offers
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-bestSelling-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bestSelling"
                      type="button"
                      role="tab"
                      aria-controls="pills-bestSelling"
                      aria-selected="false"
                    >
                      Best Selling
                    </button>
                  </li>
                </ul>
                <form action="#" className="search-box style-three">
                  <input
                    type="text"
                    className="common-input pill"
                    placeholder="Search..."
                  />
                  <button
                    type="submit"
                    className="btn btn-main btn-icon icon border-0"
                  >
                    <img src="assets/images/icons/search.svg" alt="" />
                  </button>
                </form>
              </div>
              {/* Tab End */}
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-product"
                  role="tabpanel"
                  aria-labelledby="pills-product-tab"
                  tabIndex={0}
                >
                  <div className="row gy-4 list-grid-wrapper">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$99</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $129
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                1300 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img6.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $256
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                200 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img7.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $259
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                500 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img8.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img12.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                  {/* Pagination Start */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination common-pagination">
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link flx-align gap-2 flex-nowrap" href="#">
                          Next
                          <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination End */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-bestMatch"
                  role="tabpanel"
                  aria-labelledby="pills-bestMatch-tab"
                  tabIndex={0}
                >
                  <div className="row gy-4 list-grid-wrapper">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$99</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $129
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                1300 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img6.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $256
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                200 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img7.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $259
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                500 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img8.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img12.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                  {/* Pagination Start */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination common-pagination">
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link flx-align gap-2 flex-nowrap" href="#">
                          Next
                          <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination End */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-bestRating"
                  role="tabpanel"
                  aria-labelledby="pills-bestRating-tab"
                  tabIndex={0}
                >
                  <div className="row gy-4 list-grid-wrapper">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$99</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $129
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                1300 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img6.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $256
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                200 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img7.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $259
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                500 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img8.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img12.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                  {/* Pagination Start */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination common-pagination">
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link flx-align gap-2 flex-nowrap" href="#">
                          Next
                          <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination End */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-trending"
                  role="tabpanel"
                  aria-labelledby="pills-trending-tab"
                  tabIndex={0}
                >
                  <div className="row gy-4 list-grid-wrapper">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$99</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $129
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                1300 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img6.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $256
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                200 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img7.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $259
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                500 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img8.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img12.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                  {/* Pagination Start */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination common-pagination">
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link flx-align gap-2 flex-nowrap" href="#">
                          Next
                          <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination End */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-bestOffers"
                  role="tabpanel"
                  aria-labelledby="pills-bestOffers-tab"
                  tabIndex={0}
                >
                  <div className="row gy-4 list-grid-wrapper">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$99</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $129
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                1300 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img6.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $256
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                200 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img7.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $259
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                500 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img8.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img12.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                  {/* Pagination Start */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination common-pagination">
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link flx-align gap-2 flex-nowrap" href="#">
                          Next
                          <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination End */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-bestSelling"
                  role="tabpanel"
                  aria-labelledby="pills-bestSelling-tab"
                  tabIndex={0}
                >
                  <div className="row gy-4 list-grid-wrapper">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                href="/profile"
                                className="link hover-text-decoration-underline"
                              >
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$99</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $129
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                1300 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img6.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $256
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                200 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img7.png"
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
                                {" "}
                                themepix
                              </Link>
                            </span>
                            <div className="flx-align gap-2">
                              <h6 className="product-item__price mb-0">$129</h6>
                              <span className="product-item__prevPrice text-decoration-line-through">
                                $259
                              </span>
                            </div>
                          </div>
                          <div className="product-item__bottom flx-between gap-2">
                            <div>
                              <span className="product-item__sales font-14 mb-2">
                                500 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img8.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="product-item section-bg">
                        <div className="product-item__thumb d-flex">
                          <Link scroll={false} href="/product-details" className="link w-100">
                            <img
                              src="assets/images/thumbs/product-img12.png"
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
                                {" "}
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
                                2100 Sales
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
                                  {" "}
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
                  {/* Pagination Start */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination common-pagination">
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link" href="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link scroll={false} className="page-link flx-align gap-2 flex-nowrap" href="#">
                          Next
                          <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination End */}
                </div>
              </div>
              {/* Profile Portfolio Content End */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-followerss"
              role="tabpanel"
              aria-labelledby="pills-followerss-tab"
              tabIndex={0}
            >
              <div className="profile-wrapper">
                <div className="profile-content">
                  <div className="follow-wrapper">
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                {/* ========================== Profile Sidebar Start =========================== */}
                <div className="profile-sidebar">
                  <div className="profile-sidebar__item">
                    <h5 className="mb-4">Featured Items</h5>
                    <div className="featured-item d-flex align-items-center gap-4">
                      <div className="featured-item__thumb">
                        <Link scroll={false} href="/product-details" className="link">
                          <img
                            src="assets/images/thumbs/featured-item-img.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="featured-item__content">
                        <h6 className="featured-item__title mb-2">
                          <Link scroll={false} href="/product-details" className="link">
                            Personal portfolio one page template
                          </Link>
                        </h6>
                        <span className="featured-item__text mb-2 text-heading fw-500">
                          250 Purchases
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
                          <span className="star-rating__text text-body font-14">
                            {" "}
                            5.0{" "}
                          </span>
                          <span className="star-rating__text text-body font-14">
                            {" "}
                            (116)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="profile-sidebar__author">
                      <div className="author-details p-0 border-0 mt-0">
                        <div className="d-flex align-items-center gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <span className="d-flex align-items-center gap-1">
                              <span className="star-rating">
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                              </span>
                              <span className="star-rating__text text-body">
                                {" "}
                                5.0
                              </span>
                            </span>
                          </div>
                        </div>
                        <ul className="badge-list flx-align gap-2 mt-3">
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge1.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge2.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge3.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge4.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge5.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge6.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge7.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge8.png" alt="" />
                          </li>
                        </ul>
                        <Link scroll={false}
                          href="/profile"
                          className="btn btn-outline-light w-100 pill mt-32 fw-600"
                        >
                          Total 89 Items
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="profile-sidebar__item">
                    <h5 className="profile-sidebar__title">Email to Support</h5>
                    <form action="#">
                      <div className="row gy-4">
                        <div className="col-12">
                          <label
                            htmlFor="emailssssId"
                            className="form-label mb-2 font-18 fw-500"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="common-input radius-8 common-input--md"
                            id="emailssssId"
                            placeholder="dpmarket@gmail.com"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="messagessssId"
                            className="form-label mb-2 font-18 fw-500"
                          >
                            Message
                          </label>
                          <textarea
                            className="common-input radius-8"
                            id="messagessssId"
                            placeholder="Write Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-main btn-md w-100">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="profile-sidebar__item">
                    <h5 className="profile-sidebar__title">Social Profile</h5>
                    <ul className="social-icon-list">
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.facebook.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.twitter.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.linkedin.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.pinterest.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.pinterest.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* ========================== Profile Sidebar End =========================== */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Followingg"
              role="tabpanel"
              aria-labelledby="pills-Followingg-tab"
              tabIndex={0}
            >
              <div className="profile-wrapper">
                <div className="profile-content">
                  <div className="follow-wrapper">
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                    <div className="follow-item">
                      <div className="follow-item__author">
                        <div className="d-flex align-items-start gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge1.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge2.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge3.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge4.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge5.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge6.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge7.png" alt="" />
                              </li>
                              <li
                                className="badge-list__item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Badge Info"
                              >
                                <img src="assets/images/thumbs/badge8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="follow-item__meta">
                        <strong className="font-11 fw-600 text-heading">
                          77 Items
                          <br />
                          100 Followers
                          <br />
                          Member Since: September 2018
                          <br />
                          Available for freelance work
                        </strong>
                      </div>
                      <div className="follow-item__sales">
                        <div className="sales">
                          <span className="sales__text mb-1 font-13 text-heading fw-500">
                            Sales
                          </span>
                          <h6 className="sales__amount mb-0 font-body">15,830</h6>
                          <ul className="star-rating mt-2">
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
                          <span className="star-rating__text text-heading font-12 fw-500">
                            {" "}
                            116 ratings
                          </span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-main pill px-4">
                        Unfollow
                      </button>
                    </div>
                  </div>
                </div>
                {/* ========================== Profile Sidebar Start =========================== */}
                <div className="profile-sidebar">
                  <div className="profile-sidebar__item">
                    <h5 className="mb-4">Featured Items</h5>
                    <div className="featured-item d-flex align-items-center gap-4">
                      <div className="featured-item__thumb">
                        <Link scroll={false} href="/product-details" className="link">
                          <img
                            src="assets/images/thumbs/featured-item-img.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="featured-item__content">
                        <h6 className="featured-item__title mb-2">
                          <Link scroll={false} href="/product-details" className="link">
                            Personal portfolio one page template
                          </Link>
                        </h6>
                        <span className="featured-item__text mb-2 text-heading fw-500">
                          250 Purchases
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
                          <span className="star-rating__text text-body font-14">
                            {" "}
                            5.0{" "}
                          </span>
                          <span className="star-rating__text text-body font-14">
                            {" "}
                            (116)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="profile-sidebar__author">
                      <div className="author-details p-0 border-0 mt-0">
                        <div className="d-flex align-items-center gap-2">
                          <div className="author-details__thumb flex-shrink-0">
                            <img
                              src="assets/images/thumbs/author-details-img.png"
                              alt=""
                            />
                          </div>
                          <div className="author-details__content">
                            <h6 className="author-details__name font-18 mb-2">
                              Oviousdev
                            </h6>
                            <span className="d-flex align-items-center gap-1">
                              <span className="star-rating">
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                                <span className="star-rating__item font-11">
                                  <i className="fas fa-star" />
                                </span>
                              </span>
                              <span className="star-rating__text text-body">
                                {" "}
                                5.0
                              </span>
                            </span>
                          </div>
                        </div>
                        <ul className="badge-list flx-align gap-2 mt-3">
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge1.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge2.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge3.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge4.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge5.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge6.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge7.png" alt="" />
                          </li>
                          <li
                            className="badge-list__item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Badge Info"
                          >
                            <img src="assets/images/thumbs/badge8.png" alt="" />
                          </li>
                        </ul>
                        <Link scroll={false}
                          href="/profile"
                          className="btn btn-outline-light w-100 pill mt-32 fw-600"
                        >
                          Total 89 Items
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="profile-sidebar__item">
                    <h5 className="profile-sidebar__title">Email to Support</h5>
                    <form action="#">
                      <div className="row gy-4">
                        <div className="col-12">
                          <label
                            htmlFor="emailssId"
                            className="form-label mb-2 font-18 fw-500"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="common-input radius-8 common-input--md"
                            id="emailssId"
                            placeholder="dpmarket@gmail.com"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="messagessId"
                            className="form-label mb-2 font-18 fw-500"
                          >
                            Message
                          </label>
                          <textarea
                            className="common-input radius-8"
                            id="messagessId"
                            placeholder="Write Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-main btn-md w-100">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="profile-sidebar__item">
                    <h5 className="profile-sidebar__title">Social Profile</h5>
                    <ul className="social-icon-list">
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.facebook.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.twitter.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.linkedin.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.pinterest.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link scroll={false}
                          href="https://www.pinterest.com"
                          className="social-icon-list__link flx-center bg-white border-white text-heading font-18"
                        >
                          {" "}
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* ========================== Profile Sidebar End =========================== */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Settingss"
              role="tabpanel"
              aria-labelledby="pills-Settingss-tab"
              tabIndex={0}
            >
              {/* ================== Setting Section Start ====================== */}
              <div className="row gy-4">
                <div className="col-lg-4 pe-xl-5">
                  <div className="setting-sidebar ">
                    <h6 className="setting-sidebar__title">Your Details</h6>
                    <ul className="setting-sidebar-list">
                      <li className="setting-sidebar-list__item">
                        <Link scroll={false}
                          href="#personalInfo"
                          className="setting-sidebar-list__link active"
                        >
                          Personal Information
                        </Link>
                      </li>
                      <li className="setting-sidebar-list__item">
                        <Link scroll={false} href="#profile" className="setting-sidebar-list__link">
                          Profile
                        </Link>
                      </li>
                      <li className="setting-sidebar-list__item">
                        <Link scroll={false}
                          href="#paymentSystem"
                          className="setting-sidebar-list__link"
                        >
                          Setup Payment System
                        </Link>
                      </li>
                      <li className="setting-sidebar-list__item">
                        <Link scroll={false}
                          href="#emailSetting"
                          className="setting-sidebar-list__link"
                        >
                          Email Setting
                        </Link>
                      </li>
                      <li className="setting-sidebar-list__item">
                        <Link scroll={false}
                          href="#socialNetwork"
                          className="setting-sidebar-list__link"
                        >
                          Social Networks
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8">
                  {/* <form action="#"> */}
                  <div
                    className="setting-content"
                    data-bs-spy="scroll"
                    data-bs-target="#sidebar-scroll-spy"
                  >
                    <div
                      className="card common-card border border-gray-five overflow-hidden mb-24"
                      id="personalInfo"
                    >
                      <div className="card-header">
                        <h6 className="title">Personal Information</h6>
                      </div>
                      <div className="card-body">
                        <div className="row gy-3">
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="fName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="fName"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="lName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="lName"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="country" className="form-label">
                              Country
                            </label>
                            <input
                              type="text"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="country"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="address" className="form-label">
                              Address
                            </label>
                            <input
                              type="text"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="address"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <input
                              type="text"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="city"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="zipCode" className="form-label">
                              Zip Code
                            </label>
                            <input
                              type="text"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="zipCode"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card common-card border border-gray-five overflow-hidden mb-24"
                      id="profile"
                    >
                      <div className="card-header">
                        <h6 className="title">Personal Information</h6>
                      </div>
                      <div className="card-body">
                        <div className="row gy-3">
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="fileUpload" className="form-label">
                              Upload a New Avatar
                            </label>
                            <input
                              type="file"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="fileUpload"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="fileUploadTwo" className="form-label">
                              Upload a New Avatar
                            </label>
                            <input
                              type="file"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="fileUploadTwo"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="ProfileHeading" className="form-label">
                              Profile Heading
                            </label>
                            <input
                              type="text"
                              className="common-input common-input--md border--color-dark bg--white"
                              id="ProfileHeading"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label">Show Country on Your</label>
                            <div className="flx-align gap-3 mt-2">
                              <div className="common-check common-radio mb-0">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="showCountry"
                                  id="yes"
                                />
                                <label
                                  className="form-check-label ps-2"
                                  htmlFor="yes"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="common-check common-radio mb-0">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="showCountry"
                                  id="no"
                                />
                                <label className="form-check-label ps-2" htmlFor="no">
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <label htmlFor="aboutProfile" className="form-label">
                              Write Something About Your Profile
                            </label>
                            <textarea
                              className="common-input common-input--md border--color-dark bg--white"
                              id="aboutProfile"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card common-card border border-gray-five overflow-hidden mb-24"
                      id="paymentSystem"
                    >
                      <div className="card-header">
                        <h6 className="title">Payment Method</h6>
                      </div>
                      <div className="card-body">
                        <div className="payment-method mb-0">
                          <div className="payment-method__wrapper arrow-sm">
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment1"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment1">
                                <img
                                  src="assets/images/thumbs/payment-method1.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment2"
                                hidden=""
                                defaultChecked=""
                              />
                              <label className="form-check-label" htmlFor="payment2">
                                <img
                                  src="assets/images/thumbs/payment-method2.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment3"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment3">
                                <img
                                  src="assets/images/thumbs/payment-method3.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment4"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment4">
                                <img
                                  src="assets/images/thumbs/payment-method4.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment5"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment5">
                                <img
                                  src="assets/images/thumbs/payment-method5.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment6"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment6">
                                <img
                                  src="assets/images/thumbs/payment-method6.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment7"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment7">
                                <img
                                  src="assets/images/thumbs/payment-method7.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment8"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment8">
                                <img
                                  src="assets/images/thumbs/payment-method8.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment9"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment9">
                                <img
                                  src="assets/images/thumbs/payment-method9.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment10"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment10">
                                <img
                                  src="assets/images/thumbs/payment-method10.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment11"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment11">
                                <img
                                  src="assets/images/thumbs/payment-method11.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment12"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment12">
                                <img
                                  src="assets/images/thumbs/payment-method12.png"
                                  alt=""
                                />
                              </label>
                            </div>
                            <div className="payment-method__item">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment13"
                                hidden=""
                              />
                              <label className="form-check-label" htmlFor="payment13">
                                <img
                                  src="assets/images/thumbs/payment-method13.png"
                                  alt=""
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card common-card border border-gray-five overflow-hidden mb-24"
                      id="emailSetting"
                    >
                      <div className="card-header">
                        <h6 className="title">Email Settings</h6>
                      </div>
                      <div className="card-body">
                        <div className="row gy-3">
                          <div className="col-sm-6 col-xs-6">
                            <div className="common-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="ratingReminder"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="ratingReminder"
                              >
                                {" "}
                                Rating reminder send an email for client rating{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <div className="common-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="reviewNotification"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="reviewNotification"
                              >
                                {" "}
                                Item review notification
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <div className="common-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="updateNotification"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="updateNotification"
                              >
                                {" "}
                                Item update notification
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <div className="common-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="dailyNootification"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="dailyNootification"
                              >
                                {" "}
                                Daily update notification
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <div className="common-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="itemNotification"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="itemNotification"
                              >
                                {" "}
                                Item Notification
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <div className="common-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="commentNotification"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="commentNotification"
                              >
                                {" "}
                                Item comment notification
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card common-card border border-gray-five overflow-hidden mb-24"
                      id="socialNetwork"
                    >
                      <div className="card-header">
                        <h6 className="title">Social Network Settings</h6>
                      </div>
                      <div className="card-body">
                        <div className="row gy-3">
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="facebookUrl" className="form-label">
                              Facebook Profile Url
                            </label>
                            <div className="position-relative">
                              <input
                                type="url"
                                className="common-input common-input--md common-input--withLeftIcon"
                                id="facebookUrl"
                                placeholder="Facebook Profile Url"
                              />
                              <span className="input-icon input-icon--left text-main">
                                <i className="fab fa-facebook-f" />{" "}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="linkedinUrl" className="form-label">
                              Linkedin Profile Url
                            </label>
                            <div className="position-relative">
                              <input
                                type="url"
                                className="common-input common-input--md common-input--withLeftIcon"
                                id="linkedinUrl"
                                placeholder="Linkedin Profile Url"
                              />
                              <span className="input-icon input-icon--left text-main">
                                <i className="fab fa-linkedin-in" />
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="behanceUrl" className="form-label">
                              Behance Profile Url
                            </label>
                            <div className="position-relative">
                              <input
                                type="url"
                                className="common-input common-input--md common-input--withLeftIcon"
                                id="behanceUrl"
                                placeholder="Behance Profile Url"
                              />
                              <span className="input-icon input-icon--left text-main">
                                <i className="fab fa-behance" />{" "}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label htmlFor="dribbleUrl" className="form-label">
                              Dribble Profile Url
                            </label>
                            <div className="position-relative">
                              <input
                                type="url"
                                className="common-input common-input--md common-input--withLeftIcon"
                                id="dribbleUrl"
                                placeholder="Dribble Profile Url"
                              />
                              <span className="input-icon input-icon--left text-main">
                                <i className="fab fa-dribbble" />{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn w-100 btn-main btn-md">
                      Save Information
                    </button>
                  </div>
                  {/* </form> */}
                </div>
              </div>
              {/* ================== Setting Section End ====================== */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-hiddenItem"
              role="tabpanel"
              aria-labelledby="pills-hiddenItem-tab"
              tabIndex={0}
            >
              {/* ========================== Hidden Item Start =========================== */}
              <div className="row justify-content-center">
                <div className="col-xxl-8 col-xl-10">
                  <div className="product-reject__wrapper">
                    <div className="card common-card border border-gray-five overflow-hidden">
                      <div className="card-body">
                        <div className="product-reject__content d-flex flex-sm-row flex-column align-items-start gap-md-5 gap-4">
                          <div className="product-reviewer flx-align flex-nowrap gap-3 flex-shrink-0">
                            <div className="product-reviewer__thumb flex-shrink-0">
                              <img src="assets/images/thumbs/client3.png" alt="" />
                            </div>
                            <div className="product-reviewer__content">
                              <h6 className="product-reviewer__name mb-0">
                                John Doe
                              </h6>
                              <span className="product-reviewer__designation font-14">
                                Reviewer
                              </span>
                            </div>
                          </div>
                          <div className="product-reject__item flex-grow-1">
                            <div className="product-reject-info flx-align flex-nowrap gap-3">
                              <div className="product-reject-info__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected1.png"
                                  alt=""
                                />
                              </div>
                              <div className="product-reject-info__content">
                                <h6 className="product-reject-info__name mb-0">
                                  Soft - reject CityScape HTML Template
                                </h6>
                                <span className="product-reject-info__date font-14">
                                  12 March 2024 at 09:21am
                                </span>
                              </div>
                            </div>
                            <ul className="response-list">
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  01.Responsive Issues:{" "}
                                </h6>
                                <p className="response-list__desc font-14">
                                  Your files either inaccurately represented as
                                  responsive or have responsive layout iusser
                                  issues.please take a moment to make sure that your
                                  design layout looks correct at different breakpoints
                                  and that all text is scaled appropriately for
                                  smaller decices.
                                </p>
                              </li>
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  {" "}
                                  02.Typograpgy Hierarchy:{" "}
                                </h6>
                                <p className="response-list__desc font-14">
                                  As my understanding, there are two parts of
                                  hierarchy — Visual and Logic. For visual hierarchy,
                                  I usually use font matching, shapes or color to
                                  enhance it. And for logic hierarchy, I often start
                                  from the spacing control, especially poetic space
                                  art. Simply, we need to enhance the important
                                  content and tell the visitors which you should focus
                                  on
                                </p>
                              </li>
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  03. Placeholder Imagtes:{" "}
                                </h6>
                                <p className="response-list__desc font-14">
                                  Please delete the images form the main and replace
                                  them with placeholders. so that so that client can
                                  just placeholder files.
                                </p>
                              </li>
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  04.Loding Time:
                                </h6>
                                <p className="response-list__desc font-14">
                                  Reduce web loading time, some times take more time
                                  for loading for open your URL. so fixed loading
                                  time.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card common-card border border-gray-five overflow-hidden">
                      <div className="card-body">
                        <div className="product-reject__content d-flex flex-sm-row flex-column align-items-start gap-md-5 gap-4">
                          <div className="product-reviewer flx-align flex-nowrap gap-3 flex-shrink-0">
                            <div className="product-reviewer__thumb flex-shrink-0">
                              <img src="assets/images/thumbs/client3.png" alt="" />
                            </div>
                            <div className="product-reviewer__content">
                              <h6 className="product-reviewer__name mb-0">
                                John William
                              </h6>
                              <span className="product-reviewer__designation font-14">
                                Reviewer
                              </span>
                            </div>
                          </div>
                          <div className="product-reject__item flex-grow-1">
                            <div className="product-reject-info flx-align flex-nowrap gap-3">
                              <div className="product-reject-info__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected1.png"
                                  alt=""
                                />
                              </div>
                              <div className="product-reject-info__content">
                                <h6 className="product-reject-info__name mb-0">
                                  Soft - reject FixTurbo HTML Template
                                </h6>
                                <span className="product-reject-info__date font-14">
                                  10 March 2024 at 10:35am
                                </span>
                              </div>
                            </div>
                            <ul className="response-list">
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  01.Responsive Issues:{" "}
                                </h6>
                                <p className="response-list__desc font-14">
                                  Your files either inaccurately represented as
                                  responsive or have responsive layout iusser
                                  issues.please take a moment to make sure that your
                                  design layout looks correct at different breakpoints
                                  and that all text is scaled appropriately for
                                  smaller decices.
                                </p>
                              </li>
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  {" "}
                                  02.Typograpgy Hierarchy:{" "}
                                </h6>
                                <p className="response-list__desc font-14">
                                  As my understanding, there are two parts of
                                  hierarchy — Visual and Logic. For visual hierarchy,
                                  I usually use font matching, shapes or color to
                                  enhance it. And for logic hierarchy, I often start
                                  from the spacing control, especially poetic space
                                  art. Simply, we need to enhance the important
                                  content and tell the visitors which you should focus
                                  on
                                </p>
                              </li>
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  03. Placeholder Imagtes:{" "}
                                </h6>
                                <p className="response-list__desc font-14">
                                  Please delete the images form the main and replace
                                  them with placeholders. so that so that client can
                                  just placeholder files.
                                </p>
                              </li>
                              <li className="response-list__item">
                                <h6 className="response-list__title fw-600 mb-2">
                                  04.Loding Time:
                                </h6>
                                <p className="response-list__desc font-14">
                                  Reduce web loading time, some times take more time
                                  for loading for open your URL. so fixed loading
                                  time.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========================== Hidden Item End =========================== */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-refunded"
              role="tabpanel"
              aria-labelledby="pills-refunded-tab"
              tabIndex={0}
            >
              {/* =========================== Refund Section Start ========================= */}
              <div className="row gy-4">
                <div className="col-lg-8">
                  <div className="refund-feedback">
                    <h5 className="refund-feedback__title">
                      Refund requests made against items you sold
                    </h5>
                    <p className="refund-feedback__desc">
                      There are no open refund requests at the moment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="profile-sidebar">
                    <div className="profile-sidebar__item">
                      <h6 className="title font-body">Open Request</h6>
                      <div className="select-has-icon">
                        <select className="common-input" defaultValue={1}>
                          <option value={1}>Open Requests</option>
                          <option value={1}>Open Requests</option>
                          <option value={1}>Open Requests</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* =========================== Refund Section End ========================= */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-earning"
              role="tabpanel"
              aria-labelledby="pills-earning-tab"
              tabIndex={0}
            >
              {/* ========================= Earning Section Start ============================= */}
              <div className="row gy-4">
                <div className="col-lg-4 col-sm-6">
                  <div className="earning-card position-relative z-index-1">
                    <img
                      src="assets/images/gradients/testimonial-bg.png"
                      alt=""
                      className="hover-bg visible opacity-100"
                    />
                    <div>
                      <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">
                        Procuring This Month
                      </h6>
                      <p className="earning-card__text font-14  text-white fw-200">
                        Sales earnings this month (March), after associated author
                        fees, &amp; before taxes:
                      </p>
                    </div>
                    <div>
                      <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                        $6422
                      </h5>
                      <p className="earning-card__text font-14  text-white fw-200">
                        All out Procuring after purchaser charge
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="earning-card position-relative z-index-1">
                    <img
                      src="assets/images/gradients/testimonial-bg.png"
                      alt=""
                      className="hover-bg visible opacity-100"
                    />
                    <div>
                      <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">
                        Your Balance
                      </h6>
                    </div>
                    <div>
                      <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                        $6422
                      </h5>
                      <p className="earning-card__text font-14  text-white fw-200">
                        Your Total Blance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="earning-card position-relative z-index-1">
                    <img
                      src="assets/images/gradients/testimonial-bg.png"
                      alt=""
                      className="hover-bg visible opacity-100"
                    />
                    <div>
                      <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">
                        Absolute Worth of Your Deals.
                      </h6>
                      <p className="earning-card__text font-14  text-white fw-200">
                        Total Value of your sales, before taxes:{" "}
                      </p>
                    </div>
                    <div>
                      <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                        $6422
                      </h5>
                      <p className="earning-card__text font-14  text-white fw-200">
                        Total Value of Sale Before Fee
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="dashboard-card">
                    <div className="dashboard-card__header">
                      <h6 className="dashboard-card__title mb-0">Item Sales</h6>
                    </div>
                   

                    <Chart options={options} series={series} type="bar" width={"100%"} height={"100%"} />

                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="dashboard-card">
                    <div className="dashboard-card__header">
                      <h6 className="dashboard-card__title mb-0">Top Countries</h6>
                    </div>
                    <ul className="country-list">
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag1.png" alt="" />
                          </span>
                          <span className="country-list__name">United States</span>
                        </div>
                        <span className="country-list__amount">$58.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag2.png" alt="" />
                          </span>
                          <span className="country-list__name">Maxico</span>
                        </div>
                        <span className="country-list__amount">$69.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag3.png" alt="" />
                          </span>
                          <span className="country-list__name">Brazil</span>
                        </div>
                        <span className="country-list__amount">$120.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag4.png" alt="" />
                          </span>
                          <span className="country-list__name">Canada</span>
                        </div>
                        <span className="country-list__amount">$25.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag5.png" alt="" />
                          </span>
                          <span className="country-list__name">Ireland</span>
                        </div>
                        <span className="country-list__amount">$85.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag6.png" alt="" />
                          </span>
                          <span className="country-list__name">Newzealand</span>
                        </div>
                        <span className="country-list__amount">$99.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag7.png" alt="" />
                          </span>
                          <span className="country-list__name">Spain</span>
                        </div>
                        <span className="country-list__amount">$89.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag8.png" alt="" />
                          </span>
                          <span className="country-list__name">Turkey</span>
                        </div>
                        <span className="country-list__amount">$72.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag9.png" alt="" />
                          </span>
                          <span className="country-list__name">Italy</span>
                        </div>
                        <span className="country-list__amount">$465.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag10.png" alt="" />
                          </span>
                          <span className="country-list__name">Argentina</span>
                        </div>
                        <span className="country-list__amount">$45.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag11.png" alt="" />
                          </span>
                          <span className="country-list__name">Maxico</span>
                        </div>
                        <span className="country-list__amount">$42.00</span>
                      </li>
                      <li className="country-list__item flx-between gap-2">
                        <div className="country-list__content flx-align gap-2">
                          <span className="country-list__flag">
                            <img src="assets/images/thumbs/flag12.png" alt="" />
                          </span>
                          <span className="country-list__name">Newzealand</span>
                        </div>
                        <span className="country-list__amount">$89.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card common-card border shadow-none border-gray-five">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table text-body mt--24">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Item Sales Count</th>
                              <th>Earning</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> Friday</td>
                              <td> 2</td>
                              <td> $5.31</td>
                            </tr>
                            <tr>
                              <td> Saturday</td>
                              <td> 6</td>
                              <td> $30.62</td>
                            </tr>
                            <tr>
                              <td> Sunday</td>
                              <td> 10</td>
                              <td> $100.34</td>
                            </tr>
                            <tr>
                              <td> Monday</td>
                              <td> 1</td>
                              <td> $21.24</td>
                            </tr>
                            <tr>
                              <td> Tuesday</td>
                              <td> 3</td>
                              <td> $32.56</td>
                            </tr>
                            <tr>
                              <td> Wednesday</td>
                              <td> 1</td>
                              <td> $5.15</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========================= Earning Section End ============================= */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-statement"
              role="tabpanel"
              aria-labelledby="pills-statement-tab"
              tabIndex={0}
            >
              {/* ========================= Statement section start =========================== */}
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="statement-item card common-card border border-gray-five">
                    <div className="card-body">
                      <div className="statement-item__header">
                        <h6 className="statement-item__title">Total Earning</h6>
                      </div>
                      <ul className="statement-list">
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">
                            My Funds
                          </span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">
                            Earnings
                          </span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">
                            Tax Withheld
                          </span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">Fees</span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="statement-item card common-card border border-gray-five">
                    <div className="card-body">
                      <div className="statement-item__header">
                        <h6 className="statement-item__title">Monthly Earnings</h6>
                      </div>
                      <ul className="statement-list">
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">
                            My Funds
                          </span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">
                            Earnings
                          </span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">
                            Tax Withheld
                          </span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                        <li className="statement-list__item text-center">
                          <span className="statement-list__text font-13">Fees</span>
                          <h6 className="statement-list__amount mb-0 mt-1 fw-600">
                            $0.00
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card common-card border border-gray-five">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table text-body mt--24">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Order ID</th>
                              <th>Type</th>
                              <th>Price</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td data-label="Date">2022-12-31 03:36 AM</td>
                              <td data-label="Order ID">#DR54745425478 </td>
                              <td data-label="Type"> WordPress</td>
                              <td data-label="Price"> 59.00 USD</td>
                              <td data-label="Details">
                                <Link scroll={false} href="#" className="btn btn-main">
                                  <i className="far fa-eye" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="flx-between gap-2">
                          <div className="paginate-content flx-align flex-nowrap gap-3">
                            <select className="select common-input py-2 px-3 w-auto" defaultValue={1}>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                            </select>
                            <span className="paginate-content__text fs-14">
                              Showing 1 - 10 of 100
                            </span>
                          </div>
                          <nav aria-label="Page navigation example">
                            <ul className="pagination common-pagination mt-0">
                              <li className="page-item">
                                <Link scroll={false} className="page-link" href="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item active">
                                <Link scroll={false} className="page-link" href="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link scroll={false} className="page-link" href="#">
                                  3
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link scroll={false} className="page-link" href="#">
                                  4
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link scroll={false}
                                  className="page-link flx-align gap-2 flex-nowrap"
                                  href="#"
                                >
                                  Next
                                  <span className="icon line-height-1 font-20">
                                    <i className="las la-arrow-right" />
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========================= Statement section End =========================== */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-review"
              role="tabpanel"
              aria-labelledby="pills-review-tab"
              tabIndex={0}
            >
              {/* ===================== Review Section Start ========================== */}
              <div className="card common-card border border-gray-five">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table text-body mt--24">
                      <thead>
                        <tr>
                          <th>Product | Date</th>
                          <th>User</th>
                          <th>Rating</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="review-product d-flex align-items-center gap-2">
                              <div className="review-product__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected1.png"
                                  alt=""
                                />
                              </div>
                              <div className="review-product__content">
                                <h6 className="review-product__name font-15 fw-500 mb-0">
                                  <Link scroll={false} href="/profile" className="link">
                                    CityScape - Real Estate{" "}
                                  </Link>
                                </h6>
                                <span className="review-product__date font-12">
                                  2024-03-13 04:50 pm
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="product-user font-12">
                              <strong className="fw-600 text-heading d-block">
                                WowTheme7
                              </strong>
                              <span>Lorem ipsum dolor sit.</span>
                            </div>
                          </td>
                          <td>
                            <ul className="star-rating justify-content-center">
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
                          </td>
                          <td>
                            <Link scroll={false} href="#" className="btn btn-main">
                              <i className="fa fa-reply" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="review-product d-flex align-items-center gap-2">
                              <div className="review-product__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected2.png"
                                  alt=""
                                />
                              </div>
                              <div className="review-product__content">
                                <h6 className="review-product__name font-15 fw-500 mb-0">
                                  <Link scroll={false} href="/profile" className="link">
                                    FixTurbo - Car Repair{" "}
                                  </Link>
                                </h6>
                                <span className="review-product__date font-12">
                                  2024-02-10 04:50 pm
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="product-user font-12">
                              <strong className="fw-600 text-heading d-block">
                                WowTheme7
                              </strong>
                              <span>Lorem ipsum dolor sit.</span>
                            </div>
                          </td>
                          <td>
                            <ul className="star-rating justify-content-center">
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
                          </td>
                          <td>
                            <Link scroll={false} href="#" className="btn btn-main">
                              <i className="fa fa-reply" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="review-product d-flex align-items-center gap-2">
                              <div className="review-product__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected1.png"
                                  alt=""
                                />
                              </div>
                              <div className="review-product__content">
                                <h6 className="review-product__name font-15 fw-500 mb-0">
                                  <Link scroll={false} href="/profile" className="link">
                                    CityScape - Real Estate{" "}
                                  </Link>
                                </h6>
                                <span className="review-product__date font-12">
                                  2024-03-13 04:50 pm
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="product-user font-12">
                              <strong className="fw-600 text-heading d-block">
                                WowTheme7
                              </strong>
                              <span>Lorem ipsum dolor sit.</span>
                            </div>
                          </td>
                          <td>
                            <ul className="star-rating justify-content-center">
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
                          </td>
                          <td>
                            <Link scroll={false} href="#" className="btn btn-main">
                              <i className="fa fa-reply" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="review-product d-flex align-items-center gap-2">
                              <div className="review-product__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected2.png"
                                  alt=""
                                />
                              </div>
                              <div className="review-product__content">
                                <h6 className="review-product__name font-15 fw-500 mb-0">
                                  <Link scroll={false} href="/profile" className="link">
                                    FixTurbo - Car Repair{" "}
                                  </Link>
                                </h6>
                                <span className="review-product__date font-12">
                                  2024-02-10 04:50 pm
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="product-user font-12">
                              <strong className="fw-600 text-heading d-block">
                                WowTheme7
                              </strong>
                              <span>Lorem ipsum dolor sit.</span>
                            </div>
                          </td>
                          <td>
                            <ul className="star-rating justify-content-center">
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
                          </td>
                          <td>
                            <Link scroll={false} href="#" className="btn btn-main">
                              <i className="fa fa-reply" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="review-product d-flex align-items-center gap-2">
                              <div className="review-product__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected1.png"
                                  alt=""
                                />
                              </div>
                              <div className="review-product__content">
                                <h6 className="review-product__name font-15 fw-500 mb-0">
                                  <Link scroll={false} href="/profile" className="link">
                                    CityScape - Real Estate{" "}
                                  </Link>
                                </h6>
                                <span className="review-product__date font-12">
                                  2024-03-13 04:50 pm
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="product-user font-12">
                              <strong className="fw-600 text-heading d-block">
                                WowTheme7
                              </strong>
                              <span>Lorem ipsum dolor sit.</span>
                            </div>
                          </td>
                          <td>
                            <ul className="star-rating justify-content-center">
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
                          </td>
                          <td>
                            <Link scroll={false} href="#" className="btn btn-main">
                              <i className="fa fa-reply" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="review-product d-flex align-items-center gap-2">
                              <div className="review-product__thumb flex-shrink-0">
                                <img
                                  src="assets/images/thumbs/rejected2.png"
                                  alt=""
                                />
                              </div>
                              <div className="review-product__content">
                                <h6 className="review-product__name font-15 fw-500 mb-0">
                                  <Link scroll={false} href="/profile" className="link">
                                    FixTurbo - Car Repair{" "}
                                  </Link>
                                </h6>
                                <span className="review-product__date font-12">
                                  2024-02-10 04:50 pm
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="product-user font-12">
                              <strong className="fw-600 text-heading d-block">
                                WowTheme7
                              </strong>
                              <span>Lorem ipsum dolor sit.</span>
                            </div>
                          </td>
                          <td>
                            <ul className="star-rating justify-content-center">
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
                          </td>
                          <td>
                            <Link scroll={false} href="#" className="btn btn-main">
                              <i className="fa fa-reply" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flx-between gap-2">
                      <div className="paginate-content flx-align flex-nowrap gap-3">
                        <select className="select common-input py-2 px-3 w-auto" defaultValue={1}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                        <span className="paginate-content__text fs-14">
                          Showing 1 - 10 of 100
                        </span>
                      </div>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination common-pagination mt-0">
                          <li className="page-item">
                            <Link scroll={false} className="page-link" href="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item active">
                            <Link scroll={false} className="page-link" href="#">
                              2
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link scroll={false} className="page-link" href="#">
                              3
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link scroll={false} className="page-link" href="#">
                              4
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link scroll={false}
                              className="page-link flx-align gap-2 flex-nowrap"
                              href="#"
                            >
                              Next
                              <span className="icon line-height-1 font-20">
                                <i className="las la-arrow-right" />
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===================== Review Section End ========================== */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-download"
              role="tabpanel"
              aria-labelledby="pills-download-tab"
              tabIndex={0}
            >
              {/* ========================= Download Section Start ====================== */}
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div className="search-box">
                    <input
                      type="text"
                      className="common-input common-input--lg pill border border-gray-five"
                      placeholder="Search Your Downloads"
                    />
                    <button
                      type="submit"
                      className="btn btn-main btn-icon icon border-0"
                    >
                      <img src="assets/images/icons/search.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="download-wrapper ">
                    <div className="download-item flx-between gap-3">
                      <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
                        <div className="download-item__thumb flex-shrink-0">
                          <img src="assets/images/thumbs/rejected1.png" alt="" />
                        </div>
                        <div className="download-item__info">
                          <h6 className="download-item__title mb-1">
                            <Link scroll={false} href="#" className="link">
                              CityScape - Real Estate HTML Template
                            </Link>
                          </h6>
                          <Link scroll={false}
                            href="#"
                            className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
                          >
                            Tools License
                          </Link>
                          <div className="common-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="notifiedd"
                            />
                            <label
                              className="form-check-label text-body fw-400 mb-0"
                              htmlFor="notifiedd"
                            >
                              Get notified by email if this item is updated
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
                        <button type="button" className="btn btn-main pill px-4">
                          Download{" "}
                          <span className="icon-right icon ms-0">
                            {" "}
                            <i className="las la-download" />
                          </span>
                        </button>
                        <div className="bg-white py-1 px-2 rounded d-inline-block">
                          <ul className="star-rating justify-content-center">
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="download-item flx-between gap-3">
                      <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
                        <div className="download-item__thumb flex-shrink-0">
                          <img src="assets/images/thumbs/rejected2.png" alt="" />
                        </div>
                        <div className="download-item__info">
                          <h6 className="download-item__title mb-1">
                            <Link scroll={false} href="#" className="link">
                              FixTurbo - Car Repairing HTML Template
                            </Link>
                          </h6>
                          <Link scroll={false}
                            href="#"
                            className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
                          >
                            Tools License
                          </Link>
                          <div className="common-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="notified"
                            />
                            <label
                              className="form-check-label text-body fw-400 mb-0"
                              htmlFor="notified"
                            >
                              Get notified by email if this item is updated
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
                        <button type="button" className="btn btn-main pill px-4">
                          Download{" "}
                          <span className="icon-right icon ms-0">
                            {" "}
                            <i className="las la-download" />
                          </span>
                        </button>
                        <div className="bg-white py-1 px-2 rounded d-inline-block">
                          <ul className="star-rating justify-content-center">
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="download-item flx-between gap-3">
                      <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
                        <div className="download-item__thumb flex-shrink-0">
                          <img src="assets/images/thumbs/rejected1.png" alt="" />
                        </div>
                        <div className="download-item__info">
                          <h6 className="download-item__title mb-1">
                            <Link scroll={false} href="#" className="link">
                              CityScape - Real Estate HTML Template
                            </Link>
                          </h6>
                          <Link scroll={false}
                            href="#"
                            className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
                          >
                            Tools License
                          </Link>
                          <div className="common-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="notifiedddd"
                            />
                            <label
                              className="form-check-label text-body fw-400 mb-0"
                              htmlFor="notifiedddd"
                            >
                              Get notified by email if this item is updated
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
                        <button type="button" className="btn btn-main pill px-4">
                          Download{" "}
                          <span className="icon-right icon ms-0">
                            {" "}
                            <i className="las la-download" />
                          </span>
                        </button>
                        <div className="bg-white py-1 px-2 rounded d-inline-block">
                          <ul className="star-rating justify-content-center">
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="download-item flx-between gap-3">
                      <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
                        <div className="download-item__thumb flex-shrink-0">
                          <img src="assets/images/thumbs/rejected2.png" alt="" />
                        </div>
                        <div className="download-item__info">
                          <h6 className="download-item__title mb-1">
                            <Link scroll={false} href="#" className="link">
                              FixTurbo - Car Repairing HTML Template
                            </Link>
                          </h6>
                          <Link scroll={false}
                            href="#"
                            className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline"
                          >
                            Tools License
                          </Link>
                          <div className="common-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="notifieds"
                            />
                            <label
                              className="form-check-label text-body fw-400 mb-0"
                              htmlFor="notifieds"
                            >
                              Get notified by email if this item is updated
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
                        <button type="button" className="btn btn-main pill px-4">
                          Download{" "}
                          <span className="icon-right icon ms-0">
                            {" "}
                            <i className="las la-download" />
                          </span>
                        </button>
                        <div className="bg-white py-1 px-2 rounded d-inline-block">
                          <ul className="star-rating justify-content-center">
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-14">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========================= Download Section End ====================== */}
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default Profile;