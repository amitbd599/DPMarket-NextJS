import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Register = () => {
  return (
    <>
      {/* ================================== Account Page Start =========================== */}
      <section className="account d-flex">
        <img
          src="assets/images/thumbs/account-img.png"
          alt=""
          className="account__img"
        />
        <div className="account__left d-md-flex d-none flx-align section-bg position-relative z-index-1 overflow-hidden">
          <img
            src="assets/images/shapes/pattern-curve-seven.png"
            alt=""
            className="position-absolute end-0 top-0 z-index--1 h-100"
          />
          <div className="account-thumb">
            <img src="assets/images/thumbs/banner-img.png" alt="" />
            <div className="statistics animation bg-main text-center">
              <h5 className="statistics__amount text-white">50k</h5>
              <span className="statistics__text text-white font-14">
                Customers
              </span>
            </div>
          </div>
        </div>
        <div className="account__right padding-t-120 flx-align">
          <div className="dark-light-mode">
            {/* Light Dark Mode */}
           <ThemeToggle />
          </div>
          <div className="account-content">
            <Link scroll={false} href="/" className="logo mb-64">
              <img
                src="assets/images/logo/logo.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/logo/white-logo-two.png"
                alt=""
                className="dark-version"
              />
            </Link>
            <h4 className="account-content__title mb-48 text-capitalize">
              Create A Free Account
            </h4>
            <form action="#">
              <div className="row gy-4">
                <div className="col-12">
                  <label
                    htmlFor="name"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Full Name
                  </label>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="common-input common-input--bg common-input--withIcon"
                      id="name"
                      placeholder="Your full name"
                    />
                    <span className="input-icon">
                      <img src="assets/images/icons/user-icon.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="email"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Email
                  </label>
                  <div className="position-relative">
                    <input
                      type="email"
                      className="common-input common-input--bg common-input--withIcon"
                      id="email"
                      placeholder="infoname@mail.com"
                    />
                    <span className="input-icon">
                      <img src="assets/images/icons/envelope-icon.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="your-password"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Password
                  </label>
                  <div className="position-relative">
                    <input
                      type="password"
                      className="common-input common-input--bg common-input--withIcon"
                      id="your-password"
                      placeholder="6+ characters, 1 Capital letter"
                    />
                    <span
                      className="input-icon toggle-password cursor-pointer"
                      id="#your-password"
                    >
                      <img src="assets/images/icons/lock-icon.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="common-check my-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="agree"
                    />
                    <label
                      className="form-check-label mb-0 fw-400 font-16 text-body"
                      htmlFor="agree"
                    >
                      I agree to the terms &amp; conditions
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-main btn-lg w-100 pill"
                  >
                    {" "}
                    Create An Account
                  </button>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-lg-icon btn-lg w-100 pill"
                  >
                    <span className="icon icon-left">
                      <img src="assets/images/icons/google.svg" alt="" />
                    </span>
                    Sign up with google
                  </button>
                </div>
                <div className="col-sm-12 mb-0">
                  <div className="have-account">
                    <p className="text font-14">
                      Already a member?{" "}
                      <Link scroll={false}
                        className="link text-main text-decoration-underline  fw-500"
                        href="/login"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ================================== Account Page End =========================== */}
    </>
  );
};

export default Register;
