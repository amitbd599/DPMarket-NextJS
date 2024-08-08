import Link from "next/link";

const PopularTwo = () => {
  return (
    <section className="popular-item-card-section padding-y-120 overflow-hidden">
      <img
        src="assets/images/shapes/brush.png"
        alt=""
        className="element-brush"
      />
      <div className="container container-two">
        <div className="section-heading">
          <h3 className="section-heading__title">Popular Items</h3>
        </div>
        <ul
          className="nav common-tab style-icon justify-content-center align-items-center nav-pills mb-48"
          id="pills-tab-popular"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-all-two-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all-two"
              type="button"
              role="tab"
              aria-controls="pills-all-two"
              aria-selected="true"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="WordPress"
              >
                <img
                  src="assets/images/thumbs/tech-icon1.png"
                  alt=""
                  className="white-version"
                />
                <img
                  src="assets/images/thumbs/tech-icon-white1.png"
                  alt=""
                  className="dark-version"
                />
                <span className="text">WordPress</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-laravel-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-laravel"
              type="button"
              role="tab"
              aria-controls="pills-laravel"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="laravel"
              >
                <img src="assets/images/thumbs/tech-icon2.png" alt="" />
                <span className="text">laravel</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-popular-php-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-popular-php"
              type="button"
              role="tab"
              aria-controls="pills-popular-php"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="PHP"
              >
                <img
                  src="assets/images/thumbs/tech-icon3.png"
                  alt=""
                  className="white-version"
                />
                <img
                  src="assets/images/thumbs/tech-icon-white3.png"
                  alt=""
                  className="dark-version"
                />
                <span className="text">PHP</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-HTML-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-HTML"
              type="button"
              role="tab"
              aria-controls="pills-HTML"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="HTML"
              >
                <img src="assets/images/thumbs/tech-icon4.png" alt="" />
                <span className="text">HTML</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-Sketch-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Sketch"
              type="button"
              role="tab"
              aria-controls="pills-Sketch"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Sketch"
              >
                <img src="assets/images/thumbs/tech-icon5.png" alt="" />
                <span className="text">Sketch</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-Figma-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Figma"
              type="button"
              role="tab"
              aria-controls="pills-Figma"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Figma"
              >
                <img src="assets/images/thumbs/tech-icon6.png" alt="" />
                <span className="text">Figma</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-bootstrap-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-bootstrap"
              type="button"
              role="tab"
              aria-controls="pills-bootstrap"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Bootstrap"
              >
                <img src="assets/images/thumbs/tech-icon7.png" alt="" />
                <span className="text">Bootstrap</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-tailwind-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tailwind"
              type="button"
              role="tab"
              aria-controls="pills-tailwind"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tailwind"
              >
                <img src="assets/images/thumbs/tech-icon8.png" alt="" />
                <span className="text">Tailwind</span>
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-react-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-react"
              type="button"
              role="tab"
              aria-controls="pills-react"
              aria-selected="false"
            >
              <span
                className="product-category-list__item flx-align gap-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="React"
              >
                <img src="assets/images/thumbs/tech-icon9.png" alt="" />
                <span className="text">React</span>
              </span>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tab-popularContent">
          <div
            className="tab-pane fade show active"
            id="pills-all-two"
            role="tabpanel"
            aria-labelledby="pills-all-two-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-laravel"
            role="tabpanel"
            aria-labelledby="pills-laravel-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-popular-php"
            role="tabpanel"
            aria-labelledby="pills-popular-php-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-HTML"
            role="tabpanel"
            aria-labelledby="pills-HTML-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Sketch"
            role="tabpanel"
            aria-labelledby="pills-Sketch-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Figma"
            role="tabpanel"
            aria-labelledby="pills-Figma-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-bootstrap"
            role="tabpanel"
            aria-labelledby="pills-bootstrap-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-tailwind"
            role="tabpanel"
            aria-labelledby="pills-tailwind-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-react"
            role="tabpanel"
            aria-labelledby="pills-react-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item1.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        zirtrust - Fintech SaaS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item3.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        yolla - CRM Software Landingpage
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item4.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Business point - HR UX-UI design Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item5.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        Wonder AI Landing Page Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item6.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        turing UI Kit: AI Smart Healthcare App&nbsp;
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item7.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        FinTrust - Fintech SAAS Ui kit
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item2.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item9.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item10.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        SaaS for Finance Management
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-6">
                <div className="popular-item-card">
                  <div className="popular-item-card__thumb">
                    <Link scroll={false} href="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/popular-item11.png"
                        alt=""
                      />
                    </Link>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-0 text-white">
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
                          <span className="star-rating__text text-white fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <span className="product-item__author">
                        by
                        <Link scroll={false}
                          href="/profile"
                          className="link text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="popular-item-card__content d-flex align-items-center justify-content-between gap-2 text-start">
                    <h6 className="popular-item-card__title mb-0">
                      <Link scroll={false} href="/product-details" className="link">
                        amiz - SaaS customer Website Template
                      </Link>
                    </h6>
                    <Link scroll={false}
                      href="/product-details"
                      className="btn-link line-height-1 flex-shrink-0"
                    >
                      <img
                        src="assets/images/icons/link.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/link-light.svg"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
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

export default PopularTwo;
