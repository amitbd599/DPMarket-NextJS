import Link from "next/link";

const BannerTwo = () => {
  return (
    <section className="banner-two position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/gradients/banner-two-gradient.png"
        alt=""
        className="bg--gradient white-version"
      />
      <img
        src="assets/images/gradients/banner-two-gradient-dark.png"
        alt=""
        className="bg--gradient dark-version"
      />
      <img
        src="assets/images/shapes/element-moon3.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/shapes/element-moon2.png"
        alt=""
        className="element two"
      />
      <img
        src="assets/images/shapes/element-moon1.png"
        alt=""
        className="element three"
      />
      <div className="container container-full">
        <div className="row gy-sm-5 gy-4 align-items-center">
          <div className="col-xl-3 col-sm-6 order-xl-0 order-2">
            <div className="position-relative z-index-1">
              <img
                src="assets/images/shapes/dots-sm.png"
                alt=""
                className="dotted-img d-xl-block d-none white-version"
              />
              <img
                src="assets/images/shapes/dots-sm-white.png"
                alt=""
                className="dotted-img d-xl-block d-none dark-version"
              />
              <div className="statistics-wrapper">
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    85,000+
                  </h5>
                  <span className="statistics__text">Active Members</span>
                </div>
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    5+ Million
                  </h5>
                  <span className="statistics__text">Total Download</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="banner-two__content">
              <h1 className="banner-two__title text-center mb-3">
                858,990+ curated assets for download
              </h1>
              <p className="banner-two__desc text-center">
                Lorem ipsum dolor sit amet consectetur. Arcu vestibulum dictumst
                fermentum rhoncus. Velit dui a lorem in sagittis nisl lectus
                diam.
              </p>
              <form action="#" className="search-box style-two">
                <div className="search-box__select select-has-icon">
                  <select className="form-control form-control py-0 border-0 bg-transparent" defaultValue={1}>
                    <option value={1}  disabled="">
                      All Categories
                    </option>
                    <option value={2}>WordPress</option>
                    <option value={3}>Laravel</option>
                    <option value={4}>PHP</option>
                    <option value={5}>React</option>
                    <option value={6}>HTML</option>
                    <option value={7}>Figma</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="common-input common-input--lg pill shadow-sm"
                  placeholder="Search theme, plugins & more..."
                />
                <button
                  type="submit"
                  className="btn btn-main btn-icon icon border-0"
                >
                  <img src="assets/images/icons/search.svg" alt="" />
                </button>
              </form>
              <div className="popular-search d-flex align-items-start gap-3 justify-content-center">
                <h6 className="popular-search__title font-18 fw-700 mb-0 mt-1 flex-shrink-0 flx-align gap-1">
                  <span className="d-md-flex d-none">Popular</span> Search:
                </h6>
                <ul className="search-list">
                  <li className="search-list__item">
                    <Link scroll={false}
                      href="/all-product"
                      className="search-list__link font-14 text-heading"
                    >
                      theme
                    </Link>
                  </li>
                  <li className="search-list__item">
                    <Link scroll={false}
                      href="/all-product"
                      className="search-list__link font-14 text-heading"
                    >
                      plugins
                    </Link>
                  </li>
                  <li className="search-list__item">
                    <Link scroll={false}
                      href="/all-product"
                      className="search-list__link font-14 text-heading"
                    >
                      ui template
                    </Link>
                  </li>
                  <li className="search-list__item">
                    <Link scroll={false}
                      href="/all-product"
                      className="search-list__link font-14 text-heading"
                    >
                      mobile app
                    </Link>
                  </li>
                  <li className="search-list__item">
                    <Link scroll={false}
                      href="/all-product"
                      className="search-list__link font-14 text-heading"
                    >
                      html template
                    </Link>
                  </li>
                  <li className="search-list__item">
                    <Link scroll={false}
                      href="/all-product"
                      className="search-list__link font-14 text-heading"
                    >
                      dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="position-relative z-index-1">
              <img
                src="assets/images/shapes/dots-sm.png"
                alt=""
                className="dotted-img d-xl-block d-none white-version"
              />
              <img
                src="assets/images/shapes/dots-sm-white.png"
                alt=""
                className="dotted-img d-xl-block d-none dark-version"
              />
              <div className="statistics-wrapper style-right">
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    35k+
                  </h5>
                  <span className="statistics__text">Themes and Plugin</span>
                </div>
                <div className="statistics style-three position-relative start-0 top-0 bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    24/7
                  </h5>
                  <span className="statistics__text">Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
