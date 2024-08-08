import Link from "next/link";

const ServiceOne = () => {
  return (
    <section className="service padding-y-120 position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/shapes/curve-pattern3.png"
        alt=""
        className="position-absolute end-0 top-0 z-index--1"
      />
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Best services we provide</h3>
            <p className="section-heading__desc">
              Every month we pick some best products for you. This month's best
              web themes &amp; templates have arrived, chosen by our content
              specialists.
            </p>
          </div>
          <Link scroll={false} href="#" className="btn btn-main btn-lg pill">
            See All Services
          </Link>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="assets/images/icons/service-icon1.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Website Design &amp; Development
              </h5>
              <p className="service-item__desc">
                We help companies communicate with customers more effectively
                and efficiently. Help is a conversational customer support.
              </p>
              <Link scroll={false} href="#" className="btn-simple">
                Read More
                <span className="icon">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="assets/images/icons/service-icon2.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Management Systems Development
              </h5>
              <p className="service-item__desc">
                We help companies communicate with customers more effectively
                and efficiently. Help is a conversational customer support.
              </p>
              <Link scroll={false} href="#" className="btn-simple">
                Read More
                <span className="icon">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="assets/images/icons/service-icon3.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Digital Marketing &amp; Video Editing
              </h5>
              <p className="service-item__desc">
                We help companies communicate with customers more effectively
                and efficiently. Help is a conversational customer support.
              </p>
              <Link scroll={false} href="#" className="btn-simple">
                Read More
                <span className="icon">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="assets/images/icons/service-icon4.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Graphic Design &amp; UI/UX
              </h5>
              <p className="service-item__desc">
                We help companies communicate with customers more effectively
                and efficiently. Help is a conversational customer support.
              </p>
              <Link scroll={false} href="#" className="btn-simple">
                Read More
                <span className="icon">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="assets/images/icons/service-icon5.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Blockchain Crypto web3 Development
              </h5>
              <p className="service-item__desc">
                We help companies communicate with customers more effectively
                and efficiently. Help is a conversational customer support.
              </p>
              <Link scroll={false} href="#" className="btn-simple">
                Read More
                <span className="icon">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="assets/images/icons/service-icon6.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Content Creation &amp; SEO
              </h5>
              <p className="service-item__desc">
                We help companies communicate with customers more effectively
                and efficiently. Help is a conversational customer support.
              </p>
              <Link scroll={false} href="#" className="btn-simple">
                Read More
                <span className="icon">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
