import Link from "next/link";

const BannerOne = () => {
  return (
    <>
      <section className="hero section-bg z-index-1">
        <img
          src="assets/images/gradients/banner-gradient.png"
          alt=""
          className="bg--gradient white-version"
        />
        <img
          src="assets/images/shapes/element-moon1.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element-moon2.png"
          alt=""
          className="element two"
        />
        <div className="container container-two">
          <div className="row align-items-center gy-sm-5 gy-4">
            <div className="col-lg-6">
              <div className="hero-inner position-relative pe-lg-5">
                <div>
                  <h1 className="hero-inner__title">
                    2M+ curated digital products
                  </h1>
                  <p className="hero-inner__desc font-18">
                    Explore the best premium themes and plugins available for
                    sale. Our unique collection is hand-curated by experts. Find
                    and buy the perfect premium theme today.
                  </p>
                  <div className="search-box">
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
                  </div>
                  {/* Tech List Start */}
                  <div className="product-category-list">
                    <Link href="/all-product"
                      className="product-category-list__item"
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
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Laravel"
                    >
                      <img src="assets/images/thumbs/tech-icon2.png" alt="" />
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
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
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="HTML"
                    >
                      <img src="assets/images/thumbs/tech-icon4.png" alt="" />
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sketch"
                    >
                      <img src="assets/images/thumbs/tech-icon5.png" alt="" />
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Figma"
                    >
                      <img src="assets/images/thumbs/tech-icon6.png" alt="" />
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Bootstrap"
                    >
                      <img src="assets/images/thumbs/tech-icon7.png" alt="" />
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Tailwind"
                    >
                      <img src="assets/images/thumbs/tech-icon8.png" alt="" />
                    </Link>
                    <Link href="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="React"
                    >
                      <img src="assets/images/thumbs/tech-icon9.png" alt="" />
                    </Link>
                  </div>
                  {/* Tech List End */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-thumb">
                <img src="assets/images/thumbs/banner-img.png" alt="" />
                <img
                  src="assets/images/shapes/dots.png"
                  alt=""
                  className="dotted-img white-version"
                />
                <img
                  src="assets/images/shapes/dots-white.png"
                  alt=""
                  className="dotted-img dark-version"
                />
                <img
                  src="assets/images/shapes/element2.png"
                  alt=""
                  className="element two end-0"
                />
                <div className="statistics animation bg-main text-center">
                  <h5 className="statistics__amount text-white">50k</h5>
                  <span className="statistics__text text-white font-14">
                    Customers
                  </span>
                </div>
                <div className="statistics style-two bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    22k
                  </h5>
                  <span className="statistics__text text-heading font-14">
                    Themes &amp; Plugins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerOne;
