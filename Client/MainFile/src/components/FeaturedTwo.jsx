import Link from "next/link";

const FeaturedTwo = () => {
  return (
    <section className="featured-contributor padding-y-120 position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/shapes/pattern-curve-3.png"
        alt=""
        className="position-absolute start-0 top-0 z-index--1"
      />
      <img
        src="assets/images/shapes/element-moon1.png"
        alt=""
        className="element two"
      />
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element one"
      />
      <div className="container container-two">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-4 col-lg-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">
                  Featured Contributors
                </h3>
                <p className="section-heading__desc font-18 w-sm">
                  Who creates useful, qualitful, customer centric digital
                  products
                </p>
              </div>
              <Link scroll={false}
                href="/profile"
                className="btn btn-main btn-lg pill fw-300"
              >
                All Contributors
              </Link>
            </div>
          </div>
          <div className="col-xl-2 d-xl-block d-none" />
          <div className="col-xl-6 col-lg-7">
            <div className="row gy-4">
              <div className="col-sm-6 col-xs-6">
                <div className="contributor-item">
                  <img
                    src="assets/images/icons/madel-badge.png"
                    alt=""
                    className="contributor-item__badge"
                  />
                  <div className="contributor-item__content">
                    <div className="contributor-info flx-align gap-2">
                      <div className="contributor-info__thumb">
                        <img
                          src="assets/images/thumbs/contributor-img1.png"
                          alt=""
                        />
                      </div>
                      <div className="contributor-info__content">
                        <h6 className="contributor-info__name mb-1 text-white">
                          Amplify
                        </h6>
                        <span className="contributor-info__text text-white font-14">
                          12558 Sold Items
                        </span>
                      </div>
                    </div>
                    <div className="contributor-item__thumb">
                      <img
                        src="assets/images/thumbs/contributor1.png"
                        alt=""
                        className="cover-img"
                      />
                      <Link scroll={false} href="#" className="contributor-item__link">
                        <img src="assets/images/icons/link-white.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-6">
                <div className="contributor-item">
                  <img
                    src="assets/images/icons/madel-badge.png"
                    alt=""
                    className="contributor-item__badge"
                  />
                  <div className="contributor-item__content">
                    <div className="contributor-info flx-align gap-2">
                      <div className="contributor-info__thumb">
                        <img
                          src="assets/images/thumbs/contributor-img2.png"
                          alt=""
                        />
                      </div>
                      <div className="contributor-info__content">
                        <h6 className="contributor-info__name mb-1 text-white">
                          Radiuspoint
                        </h6>
                        <span className="contributor-info__text text-white font-14">
                          35462 Sold Items
                        </span>
                      </div>
                    </div>
                    <div className="contributor-item__thumb">
                      <img
                        src="assets/images/thumbs/contributor2.png"
                        alt=""
                        className="cover-img"
                      />
                      <Link scroll={false} href="#" className="contributor-item__link">
                        <img src="assets/images/icons/link-white.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-6">
                <div className="contributor-item">
                  <img
                    src="assets/images/icons/madel-badge.png"
                    alt=""
                    className="contributor-item__badge"
                  />
                  <div className="contributor-item__content">
                    <div className="contributor-info flx-align gap-2">
                      <div className="contributor-info__thumb">
                        <img
                          src="assets/images/thumbs/contributor-img3.png"
                          alt=""
                        />
                      </div>
                      <div className="contributor-info__content">
                        <h6 className="contributor-info__name mb-1 text-white">
                          Ovious
                        </h6>
                        <span className="contributor-info__text text-white font-14">
                          2542 Sold Items
                        </span>
                      </div>
                    </div>
                    <div className="contributor-item__thumb">
                      <img
                        src="assets/images/thumbs/contributor3.png"
                        alt=""
                        className="cover-img"
                      />
                      <Link scroll={false} href="#" className="contributor-item__link">
                        <img src="assets/images/icons/link-white.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-6">
                <div className="contributor-item">
                  <img
                    src="assets/images/icons/madel-badge.png"
                    alt=""
                    className="contributor-item__badge"
                  />
                  <div className="contributor-item__content">
                    <div className="contributor-info flx-align gap-2">
                      <div className="contributor-info__thumb">
                        <img
                          src="assets/images/thumbs/contributor-img1.png"
                          alt=""
                        />
                      </div>
                      <div className="contributor-info__content">
                        <h6 className="contributor-info__name mb-1 text-white">
                          Themex
                        </h6>
                        <span className="contributor-info__text text-white font-14">
                          6854 Sold Items
                        </span>
                      </div>
                    </div>
                    <div className="contributor-item__thumb">
                      <img
                        src="assets/images/thumbs/contributor1.png"
                        alt=""
                        className="cover-img"
                      />
                      <Link scroll={false} href="#" className="contributor-item__link">
                        <img src="assets/images/icons/link-white.svg" alt="" />
                      </Link>
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

export default FeaturedTwo;
