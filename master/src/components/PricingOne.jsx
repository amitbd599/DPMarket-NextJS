import Link from "next/link";

const PricingOne = () => {
  return (
    <section className="pricing padding-y-120 position-relative z-index-1">
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/gradients/pricing-gradient-bg.png"
        alt=""
        className="bg--gradient"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Our Best Pricing Plan</h3>
            <p className="section-heading__desc">
              Every month we pick some best products for you. This month's best
              web themes &amp; templates have arrived, chosen by our content
              specialists.
            </p>
          </div>
          <div className="pricing-tabs">
            <ul
              className="nav tab-gradient nav-pills mb-0"
              id="pills-tab-pricing"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link pill active"
                  id="pills-monthly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-monthly"
                  type="button"
                  role="tab"
                  aria-controls="pills-monthly"
                  aria-selected="true"
                >
                  monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link pill"
                  id="pills-yearly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-yearly"
                  type="button"
                  role="tab"
                  aria-controls="pills-yearly"
                  aria-selected="false"
                >
                  yearly
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="pills-tab-pricingContent">
          <div
            className="tab-pane fade show active"
            id="pills-monthly"
            role="tabpanel"
            aria-labelledby="pills-monthly-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-item box-shadow-lg hover-bg-main">
                  <img
                    src="assets/images/gradients/price-hover-bg.png"
                    alt=""
                    className="hover-bg"
                  />
                  <div className="pricing-item__top">
                    <div className="flx-between flex-nowrap">
                      <span className="pricing-item__icon">
                        <img src="assets/images/icons/price-icon1.svg" alt="" />
                      </span>
                      <span className="popular-badge d-none" />
                    </div>
                    <h5 className="pricing-item__title mb-0 mt-2">
                      Basic Plan
                    </h5>
                  </div>
                  <div className="pricing-item__content">
                    <h3 className="pricing-item__price mb-2">
                      $1599.00
                      <span className="text font-14 text-body font-body fw-400">
                        /Per Month
                      </span>
                    </h3>
                    <p className="pricing-item__desc">
                      Essential services to start your journey
                    </p>
                    <Link scroll={false}
                      href="#"
                      className="btn btn-outline-light btn-lg pill w-100"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="pricing-item__lists">
                    <ul className="text-list">
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Up to 30 members
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Collaboration
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Project management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Case management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Process management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Workflow management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Team management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-item box-shadow-lg hover-bg-main">
                  <img
                    src="assets/images/gradients/price-hover-bg.png"
                    alt=""
                    className="hover-bg"
                  />
                  <div className="pricing-item__top">
                    <div className="flx-between flex-nowrap">
                      <span className="pricing-item__icon">
                        <img src="assets/images/icons/price-icon2.svg" alt="" />
                      </span>
                      <span className="popular-badge">Most Popular</span>
                    </div>
                    <h5 className="pricing-item__title mb-0 mt-2">
                      Standard Plan
                    </h5>
                  </div>
                  <div className="pricing-item__content">
                    <h3 className="pricing-item__price mb-2">
                      $1799.00
                      <span className="text font-14 text-body font-body fw-400">
                        /Per Month
                      </span>
                    </h3>
                    <p className="pricing-item__desc">
                      Essential services to start your journey
                    </p>
                    <Link scroll={false}
                      href="#"
                      className="btn btn-outline-light btn-lg pill w-100"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="pricing-item__lists">
                    <ul className="text-list">
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Up to 30 members
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Collaboration
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Project management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Case management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Process management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Workflow management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Team management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-item box-shadow-lg hover-bg-main">
                  <img
                    src="assets/images/gradients/price-hover-bg.png"
                    alt=""
                    className="hover-bg"
                  />
                  <div className="pricing-item__top">
                    <div className="flx-between flex-nowrap">
                      <span className="pricing-item__icon">
                        <img src="assets/images/icons/price-icon3.svg" alt="" />
                      </span>
                      <span className="popular-badge d-none" />
                    </div>
                    <h5 className="pricing-item__title mb-0 mt-2">
                      Premium Plan
                    </h5>
                  </div>
                  <div className="pricing-item__content">
                    <h3 className="pricing-item__price mb-2">
                      $1999.00
                      <span className="text font-14 text-body font-body fw-400">
                        /Per Month
                      </span>
                    </h3>
                    <p className="pricing-item__desc">
                      Essential services to start your journey
                    </p>
                    <Link scroll={false}
                      href="#"
                      className="btn btn-outline-light btn-lg pill w-100"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="pricing-item__lists">
                    <ul className="text-list">
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Up to 30 members
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Collaboration
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Project management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Case management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Process management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Workflow management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Team management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-yearly"
            role="tabpanel"
            aria-labelledby="pills-yearly-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-item box-shadow-lg hover-bg-main">
                  <img
                    src="assets/images/gradients/price-hover-bg.png"
                    alt=""
                    className="hover-bg"
                  />
                  <div className="pricing-item__top">
                    <div className="flx-between flex-nowrap">
                      <span className="pricing-item__icon">
                        <img src="assets/images/icons/price-icon1.svg" alt="" />
                      </span>
                      <span className="popular-badge d-none" />
                    </div>
                    <h5 className="pricing-item__title mb-0 mt-2">
                      Basic Plan
                    </h5>
                  </div>
                  <div className="pricing-item__content">
                    <h3 className="pricing-item__price mb-2">
                      $1599.00
                      <span className="text font-14 text-body font-body fw-400">
                        /Per Month
                      </span>
                    </h3>
                    <p className="pricing-item__desc">
                      Essential services to start your journey
                    </p>
                    <Link scroll={false}
                      href="#"
                      className="btn btn-outline-light btn-lg pill w-100"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="pricing-item__lists">
                    <ul className="text-list">
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Up to 30 members
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Collaboration
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Project management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Case management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Process management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Workflow management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Team management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-item box-shadow-lg hover-bg-main">
                  <img
                    src="assets/images/gradients/price-hover-bg.png"
                    alt=""
                    className="hover-bg"
                  />
                  <div className="pricing-item__top">
                    <div className="flx-between flex-nowrap">
                      <span className="pricing-item__icon">
                        <img src="assets/images/icons/price-icon2.svg" alt="" />
                      </span>
                      <span className="popular-badge">Most Popular</span>
                    </div>
                    <h5 className="pricing-item__title mb-0 mt-2">
                      Standard Plan
                    </h5>
                  </div>
                  <div className="pricing-item__content">
                    <h3 className="pricing-item__price mb-2">
                      $1799.00
                      <span className="text font-14 text-body font-body fw-400">
                        /Per Month
                      </span>
                    </h3>
                    <p className="pricing-item__desc">
                      Essential services to start your journey
                    </p>
                    <Link scroll={false}
                      href="#"
                      className="btn btn-outline-light btn-lg pill w-100"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="pricing-item__lists">
                    <ul className="text-list">
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Up to 30 members
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Collaboration
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Project management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Case management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Process management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Workflow management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Team management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="pricing-item box-shadow-lg hover-bg-main">
                  <img
                    src="assets/images/gradients/price-hover-bg.png"
                    alt=""
                    className="hover-bg"
                  />
                  <div className="pricing-item__top">
                    <div className="flx-between flex-nowrap">
                      <span className="pricing-item__icon">
                        <img src="assets/images/icons/price-icon3.svg" alt="" />
                      </span>
                      <span className="popular-badge d-none" />
                    </div>
                    <h5 className="pricing-item__title mb-0 mt-2">
                      Premium Plan
                    </h5>
                  </div>
                  <div className="pricing-item__content">
                    <h3 className="pricing-item__price mb-2">
                      $1999.00
                      <span className="text font-14 text-body font-body fw-400">
                        /Per Month
                      </span>
                    </h3>
                    <p className="pricing-item__desc">
                      Essential services to start your journey
                    </p>
                    <Link scroll={false}
                      href="#"
                      className="btn btn-outline-light btn-lg pill w-100"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="pricing-item__lists">
                    <ul className="text-list">
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Up to 30 members
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Collaboration
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Project management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Case management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Process management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Workflow management
                      </li>
                      <li className="text-list__item text-heading">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        Team management
                      </li>
                    </ul>
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

export default PricingOne;
