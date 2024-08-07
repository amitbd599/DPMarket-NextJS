"use client";
import Link from "next/link";
import { useState } from "react";

const AllProduct = () => {
  const [activeButton, setActiveButton] = useState("grid-view");
  const [filter, setFilter] = useState(false)

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  
  const handleFilter = () => {
    setFilter(!filter);
  };





  return (
    <section className={`all-product padding-y-120 ${activeButton === "list-view" ? "list-view" : ""
      }`}>
      <div className="container container-two">
        <div className="row">
          <div className="col-lg-12">
            <div className="filter-tab gap-3 flx-between">
              <button
                type="button"
                className="filter-tab__button btn btn-outline-light pill d-flex align-items-center"
              >
                <span className="icon icon-left">
                  <img src="assets/images/icons/filter.svg" alt="" />
                </span>
                <span className="font-18 fw-500">Filters</span>
              </button>
              <ul
                className="nav common-tab nav-pills mb-0 gap-lg-2 gap-1 ms-lg-auto"
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
              <div className="list-grid d-flex align-items-center gap-2">
                <button
                  className={`list-grid__button list-button d-sm-flex d-none text-body ${activeButton === "list-view" ? "active" : ""
                    }`}
                  onClick={() => handleClick("list-view")}
                >
                  <i className="las la-list" />
                </button>
                <button
                  className={`list-grid__button grid-button d-sm-flex d-none  text-body ${activeButton === "grid-view" ? "active" : ""
                    }`}
                  onClick={() => handleClick("grid-view")}
                >
                  <i className="las la-border-all" />
                </button>
                <button className="list-grid__button sidebar-btn text-body d-lg-none d-flex" onClick={handleFilter}>
                  <i className="las la-bars" />
                </button>
              </div>
            </div>
            <form action="#" className="filter-form pb-4 d-block">
              <div className="row gy-3">
                <div className="col-sm-4 col-xs-6">
                  <div className="flx-between gap-1">
                    <label htmlFor="tag" className="form-label font-16">
                      Tag
                    </label>
                    <button type="reset" className="text-body font-14">
                      Clear
                    </button>
                  </div>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="common-input border-gray-five common-input--withLeftIcon"
                      id="tag"
                      placeholder="Search By Tag..."
                    />
                    <span className="input-icon input-icon--left">
                      <img src="assets/images/icons/search-two.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-6">
                  <div className="flx-between gap-1">
                    <label htmlFor="Price" className="form-label font-16">
                      Price
                    </label>
                    <button type="reset" className="text-body font-14">
                      Clear
                    </button>
                  </div>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="common-input border-gray-five"
                      id="Price"
                      placeholder="$7 - $29"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="flx-between gap-1">
                    <label htmlFor="time" className="form-label font-16">
                      Time Frame
                    </label>
                    <button type="reset" className="text-body font-14">
                      Clear
                    </button>
                  </div>
                  <div className="position-relative select-has-icon">
                    <select id="time" className="common-input border-gray-five" defaultValue={1}>
                      <option value={1}>Now</option>
                      <option value={2}>Yesterday</option>
                      <option value={2}>1 Month Ago</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-3 col-lg-4">
            {/* ===================== Filter Sidebar Start ============================= */}
            <div className={`filter-sidebar ${filter && "show"}`}>
              <button
                type="button"
                className="filter-sidebar__close p-2 position-absolute end-0 top-0 z-index-1 text-body hover-text-main font-20 d-lg-none d-block"
              onClick={handleFilter}>
                <i className="las la-times" />
              </button>
              <div className="filter-sidebar__item">
                <button
                  type="button"
                  className="filter-sidebar__button font-16 text-capitalize fw-500"
                >
                  Category
                </button>
                <div className="filter-sidebar__content">
                  <ul className="filter-sidebar-list">
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        All Categories <span className="qty">25489</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        Site Template <span className="qty">12,501</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        WordPress <span className="qty">1258</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        UI Template <span className="qty">1520</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        Templates Kits <span className="qty">210</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        eCommerce <span className="qty">158</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        Marketing <span className="qty">178</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        CMS Template <span className="qty">122</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        Muse Themes <span className="qty">450</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        Blogging <span className="qty">155</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        Courses <span className="qty">125</span>
                      </Link>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <Link scroll={false} href="/" className="filter-sidebar-list__text">
                        Forums <span className="qty">35</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-sidebar__item">
                <button
                  type="button"
                  className="filter-sidebar__button font-16 text-capitalize fw-500"
                >
                  Rating
                </button>
                <div className="filter-sidebar__content">
                  <ul className="filter-sidebar-list">
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="veiwAll"
                          />
                          <label className="form-check-label" htmlFor="veiwAll">
                            View All
                          </label>
                        </div>
                        <span className="qty">(1859)</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="oneStar"
                          />
                          <label className="form-check-label" htmlFor="oneStar">
                            1 Star and above
                          </label>
                        </div>
                        <span className="qty">(785)</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="twoStar"
                          />
                          <label className="form-check-label" htmlFor="twoStar">
                            2 Star and above
                          </label>
                        </div>
                        <span className="qty">(1250)</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="threeStar"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="threeStar"
                          >
                            3 Star and above
                          </label>
                        </div>
                        <span className="qty">(7580)</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="fourStar"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fourStar"
                          >
                            4 Star and above
                          </label>
                        </div>
                        <span className="qty">(1450)</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="fiveStar"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fiveStar"
                          >
                            5 Star Rating
                          </label>
                        </div>
                        <span className="qty">(2530)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-sidebar__item">
                <button
                  type="button"
                  className="filter-sidebar__button font-16 text-capitalize fw-500"
                >
                  Date Updated
                </button>
                <div className="filter-sidebar__content">
                  <ul className="filter-sidebar-list">
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="anyDate"
                          />
                          <label className="form-check-label" htmlFor="anyDate">
                            Any Date
                          </label>
                        </div>
                        <span className="qty"> 5,203</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="lastYear"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="lastYear"
                          >
                            In the last year
                          </label>
                        </div>
                        <span className="qty">1,258</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="lastMonth"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="lastMonth"
                          >
                            In the last month
                          </label>
                        </div>
                        <span className="qty">2450</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="LastWeek"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="LastWeek"
                          >
                            In the last week
                          </label>
                        </div>
                        <span className="qty">325</span>
                      </div>
                    </li>
                    <li className="filter-sidebar-list__item">
                      <div className="filter-sidebar-list__text">
                        <div className="common-check common-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="lastDay"
                          />
                          <label className="form-check-label" htmlFor="lastDay">
                            In the last day
                          </label>
                        </div>
                        <span className="qty">745</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ===================== Filter Sidebar End ============================= */}
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-product"
                role="tabpanel"
                aria-labelledby="pills-product-tab"
                tabIndex={0}
              >
                <div className="row gy-4 list-grid-wrapper">
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img1.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img2.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img3.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img4.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img5.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img6.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img7.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img8.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img9.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img10.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img11.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img12.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img1.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img2.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img3.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img4.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img5.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img6.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img7.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img8.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img9.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img10.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img11.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img12.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img1.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img2.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img3.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img4.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img5.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img6.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img7.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img8.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img9.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img10.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img11.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img12.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img1.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img2.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img3.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img4.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img5.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img6.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img7.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img8.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img9.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img10.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img11.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img12.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img1.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img2.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img3.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img4.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img5.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img6.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img7.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img8.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img9.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img10.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img11.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img12.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img1.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img2.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img3.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img4.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img5.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img6.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img7.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img8.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img9.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img10.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img11.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                  <div className="col-xl-4 col-sm-6">
                    <div className="product-item section-bg">
                      <div className="product-item__thumb d-flex">
                        <Link scroll={false} href="/product-details" className="link w-100">
                          <img
                            src="assets/images/thumbs/product-img12.png"
                            alt=""
                            className="cover-img"
                          />
                        </Link>
                        <button
                          type="button"
                          className="product-item__wishlist"
                        >
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
                {/* Pagination End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
