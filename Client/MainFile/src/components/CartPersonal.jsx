import Link from "next/link";

const CartPersonal = () => {
    return (
        <section className="cart-personal padding-y-120">
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-lg-8 pe-sm-5">
              <div className="cart-personal__content">
                <h5 className="cart-personal__title mb-32">Personal information</h5>
                <form action="#">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="form-label font-18 mb-2 fw-500 font-heading"
                    >
                      Email Address <span className="text-danger">*</span>{" "}
                    </label>
                    <span className="text d-block mb-2">
                      We will send the purchase receipt to this address.
                    </span>
                    <input
                      type="email"
                      className="common-input"
                      id="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="form-label font-18 mb-2 fw-500 font-heading"
                    >
                      First Name <span className="text-danger">*</span>{" "}
                    </label>
                    <span className="text d-block mb-2">
                      We will use this to personalize your account experience.
                    </span>
                    <input
                      type="text"
                      className="common-input"
                      id="name"
                      placeholder="First name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="form-label font-18 mb-2 fw-500 font-heading"
                    >
                      Last name <span className="text-danger">*</span>{" "}
                    </label>
                    <span className="text d-block mb-2">
                      We will use this to personalize your account experience.
                    </span>
                    <input
                      type="text"
                      className="common-input"
                      id="lastName"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="mt-32 mb-32">
                    <div className="common-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="agree"
                      />
                      <label className="form-check-label mb-0" htmlFor="agree">
                        Agree To Terms
                      </label>
                    </div>
                    <div className="common-check mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="privacy"
                      />
                      <label className="form-check-label mb-0" htmlFor="privacy">
                        Agree To Privacy Policy
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <form action="#" className="apply-coupon flx-align gap-3">
                <input
                  type="text"
                  className="common-input common-input--md w-auto pill"
                  placeholder="Coupon code"
                />
                <button
                  type="submit"
                  className="btn btn-main btn-md py-3 px-sm-5 px-4 flx-align gap-2 pill fw-300"
                >
                  {" "}
                  Apply
                </button>
              </form>
              <div className="cart-content__bottom flx-between gap-2">
                <Link scroll={false}
                  href="/cart"
                  className="btn btn-outline-light flx-align gap-2 pill btn-lg"
                >
                  <span className="icon line-height-1 font-20">
                    <i className="las la-arrow-left" />
                  </span>
                  Back
                </Link>
                <Link scroll={false}
                  href="/cart-payment"
                  className="btn btn-main flx-align gap-2 pill btn-lg"
                >
                  Proceed To Payment
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-summary">
                <h5 className="order-summary__title mb-32">Order Summary</h5>
                <ul className="billing-list">
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">You have 3 items</span>
                    <span className="amount text-heading fw-500">$259.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">Discount</span>
                    <span className="amount text-body">$00.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">Handling Fee</span>
                    <span className="amount text-body">$15.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">Subtotal</span>
                    <span className="amount text-body">$15.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading font-20 fw-500 font-heading">
                      Total
                    </span>
                    <span className="amount text-heading font-20 fw-500 font-heading">
                      $274.00
                    </span>
                  </li>
                </ul>
                <button
                  type="submit"
                  className="btn btn-outline-light pill btn-lg w-100 mt-32"
                >
                  <span className="icon icon-left">
                    <img
                      src="assets/images/icons/cart-reverse.svg"
                      alt=""
                      className="white-version"
                    />
                    <img
                      src="assets/images/icons/cart-white.svg"
                      alt=""
                      className="dark-version"
                    />
                  </span>
                  Purchased Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default CartPersonal;