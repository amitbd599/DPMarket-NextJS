import ThemeToggle from "./ThemeToggle";

const HeaderOne = () => {
  return (
    <>
      {/* ==================== Header Start Here ==================== */}
      <header className="header">
        <div className="container container-full">
          <nav className="header-inner flx-between">
            {/* Logo Start */}
            <div className="logo">
              <a href="index.html" className="link white-version">
                <img src="assets/images/logo/logo-two.png" alt="Logo" />
              </a>
              <a href="index.html" className="link dark-version">
                <img src="assets/images/logo/white-logo.png" alt="Logo" />
              </a>
            </div>
            {/* Logo End  */}
            {/* Menu Start  */}
            <div className="header-menu d-lg-block d-none">
              <ul className="nav-menu flx-align">
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Home
                  </a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="index.html" className="nav-submenu__link">
                        Home One
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="index-two.html" className="nav-submenu__link">
                        Home Two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Products
                  </a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="all-product.html" className="nav-submenu__link">
                        All Products
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a
                        href="product-details.html"
                        className="nav-submenu__link"
                      >
                        Product Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Pages
                  </a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="profile.html" className="nav-submenu__link">
                        Profile
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="cart.html" className="nav-submenu__link">
                        Shopping Cart
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a
                        href="cart-personal.html"
                        className="nav-submenu__link"
                      >
                        Mailing Address
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="cart-payment.html" className="nav-submenu__link">
                        Payment Method
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a
                        href="cart-thank-you.html"
                        className="nav-submenu__link"
                      >
                        Preview Order
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="dashboard.html" className="nav-submenu__link">
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Blog
                  </a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="blog.html" className="nav-submenu__link">
                        {" "}
                        Blog
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="blog-details.html" className="nav-submenu__link">
                        Blog Details
                      </a>
                    </li>
                    <li className="nav-submenu__item">
                      <a
                        href="blog-details-sidebar.html"
                        className="nav-submenu__link"
                      >
                        Blog Details Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item">
                  <a href="contact.html" className="nav-menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Menu End  */}
            {/* Header Right start */}
            <div className="header-right flx-align">
              <a
                href="cart.html"
                className="header-right__button cart-btn position-relative"
              >
                <img
                  src="assets/images/icons/cart.svg"
                  alt=""
                  className="white-version"
                />
                <img
                  src="assets/images/icons/cart-white.svg"
                  alt=""
                  className="dark-version"
                />
                <span className="qty-badge font-12">0</span>
              </a>
              {/* Light Dark Mode */}
              <ThemeToggle />
              {/* Light Dark Mode */}
              <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                <a href="register.html" className="btn btn-main pill">
                  <span className="icon-left icon">
                    <img src="assets/images/icons/user.svg" alt="" />{" "}
                  </span>
                  Create Account
                </a>
                <div className="language-select flx-align select-has-icon">
                  <img
                    src="assets/images/icons/globe.svg"
                    alt=""
                    className="globe-icon white-version"
                  />
                  <img
                    src="assets/images/icons/globe-white.svg"
                    alt=""
                    className="globe-icon dark-version"
                  />
                  <select className="select py-0 ps-2 border-0 fw-500">
                    <option value={1}>Eng</option>
                    <option value={2}>Bn</option>
                    <option value={3}>Eur</option>
                    <option value={4}>Urd</option>
                  </select>
                </div>
              </div>
              <button type="button" className="toggle-mobileMenu d-lg-none">
                <i className="las la-bars" />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderOne;
