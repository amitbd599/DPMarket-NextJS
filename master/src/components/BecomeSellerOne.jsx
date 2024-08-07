import Link from "next/link";

const BecomeSellerOne = () => {
  return (
    <section className="seller padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="seller-item position-relative z-index-1">
              <img
                src="assets/images/shapes/seller-bg.png"
                className="position-absolute start-0 top-0 z-index--1"
                alt=""
              />
              <h3 className="seller-item__title">
                Earn 75% of the ItemD Price
              </h3>
              <p className="seller-item__desc fw-500 text-heading">
                Sellers receive 75% of the Itemp Price for items Dsold
                exclusively and 50% for items sold non-exclusively. See detailed
                informationabout the fee structure on Market.
              </p>
              <Link scroll={false}
                href="/register"
                className="btn btn-static-outline-black btn-xl pill fw-600"
              >
                Become a Seller
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="seller-item bg-two position-relative z-index-1">
              <img
                src="assets/images/shapes/seller-bg-two.png"
                className="position-absolute start-0 top-0 z-index--1"
                alt=""
              />
              <h3 className="seller-item__title">Earn until 40% commission</h3>
              <p className="seller-item__desc fw-500 text-heading">
                Our Market is the world’s largest creative market place, selling
                millions of digital assets every year. With 30% affiliate
                commission, earning money has never been easier!
              </p>
              <Link scroll={false}
                href="/register"
                className="btn btn-static-outline-black btn-xl pill fw-600"
              >
                Become an Affiliate
              </Link>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="support position-relative z-index-1">
              <img
                src="assets/images/shapes/spider-net-sm.png"
                alt=""
                className="spider-net position-absolute top-0 end-0 z-index--1"
              />
              <img
                src="assets/images/shapes/arrow-shape.png"
                alt=""
                className="arrow-shape"
              />
              <div className="row align-items-center">
                <div className="col-lg-1 d-lg-block d-none" />
                <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <div className="support-thumb text-center">
                    <img src="assets/images/thumbs/support-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 d-lg-block d-none" />
                <div className="col-lg-5 col-md-8">
                  <div className="support-content">
                    <h3 className="support-content__title mb-3">
                      Support 24/7
                    </h3>
                    <p className="support-content__desc">
                      Wanna talk? Send us a message
                    </p>
                    <Link scroll={false}
                      href="mailto:infomail@office.com"
                      className="btn btn-static-black btn-lg fw-300 pill"
                    >
                      infomail@office.com
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

export default BecomeSellerOne;
