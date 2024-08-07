import Link from "next/link";

const ArrivalTwo = () => {
  return (
    <section className="arrival-product padding-y-120 section-bg position-relative z-index-1">
      <img
        src="assets/images/gradients/product-gradient.png"
        alt=""
        className="bg--gradient white-version"
      />
      <img
        src="assets/images/shapes/element2.png"
        alt=""
        className="element one"
      />
      <div className="container container-two">
        <div className="section-heading">
          <h3 className="section-heading__title">New Arrival Products</h3>
        </div>
        <ul
          className="nav common-tab justify-content-center nav-pills mb-48"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              All Item
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-wordPress-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-wordPress"
              type="button"
              role="tab"
              aria-controls="pills-wordPress"
              aria-selected="false"
            >
              wordPress
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-php-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-php"
              type="button"
              role="tab"
              aria-controls="pills-php"
              aria-selected="false"
            >
              php
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-siteTemplate-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-siteTemplate"
              type="button"
              role="tab"
              aria-controls="pills-siteTemplate"
              aria-selected="false"
            >
              site Template
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-blogging-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-blogging"
              type="button"
              role="tab"
              aria-controls="pills-blogging"
              aria-selected="false"
            >
              blogging
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-marketing-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-marketing"
              type="button"
              role="tab"
              aria-controls="pills-marketing"
              aria-selected="false"
            >
              marketing
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-plugins-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-plugins"
              type="button"
              role="tab"
              aria-controls="pills-plugins"
              aria-selected="false"
            >
              plugins
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-uiTemplate-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-uiTemplate"
              type="button"
              role="tab"
              aria-controls="pills-uiTemplate"
              aria-selected="false"
            >
              UI Template
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
          <div
            className="tab-pane fade"
            id="pills-wordPress"
            role="tabpanel"
            aria-labelledby="pills-wordPress-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
          <div
            className="tab-pane fade"
            id="pills-php"
            role="tabpanel"
            aria-labelledby="pills-php-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
          <div
            className="tab-pane fade"
            id="pills-siteTemplate"
            role="tabpanel"
            aria-labelledby="pills-siteTemplate-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
          <div
            className="tab-pane fade"
            id="pills-blogging"
            role="tabpanel"
            aria-labelledby="pills-blogging-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
          <div
            className="tab-pane fade"
            id="pills-marketing"
            role="tabpanel"
            aria-labelledby="pills-marketing-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
          <div
            className="tab-pane fade"
            id="pills-plugins"
            role="tabpanel"
            aria-labelledby="pills-plugins-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
          <div
            className="tab-pane fade"
            id="pills-uiTemplate"
            role="tabpanel"
            aria-labelledby="pills-uiTemplate-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
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
          </div>
        </div>
        <div className="text-center mt-64">
          <Link scroll={false}
            href="/all-product"
            className="btn btn-main btn-lg pill fw-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArrivalTwo;
