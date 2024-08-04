const BreadcrumbSix = () => {
    return (
        <section className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
        <img
          src="assets/images/gradients/breadcrumb-gradient-bg.png"
          alt=""
          className="bg--gradient"
        />
        <img
          src="assets/images/shapes/element-moon3.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element-moon1.png"
          alt=""
          className="element three"
        />
        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="breadcrumb-four-content">
                <h3 className="breadcrumb-four-content__title text-center mb-3 text-capitalize">
                  Shopping Cart
                </h3>
                <ul className="breadcrumb-list flx-align justify-content-center gap-2 mb-2">
                  <li className="breadcrumb-list__item font-14 text-body">
                    <a
                      href="index.html"
                      className="breadcrumb-list__link text-body hover-text-main"
                    >
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-list__item font-14 text-body">
                    <span className="breadcrumb-list__icon font-10">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </li>
                  <li className="breadcrumb-list__item font-14 text-body">
                    <span className="breadcrumb-list__text">My Shopping Cart</span>
                  </li>
                </ul>
                <ul className="process-list">
                  <li className="process-list__item activePage">
                    <a href="cart.html" className="process-list__link">
                      <div className="icons">
                        <span className="icon white">
                          <img src="assets/images/icons/process-white1.svg" alt="" />
                        </span>
                      </div>
                      <span className="text">Shopping Cart</span>
                    </a>
                  </li>
                  <li className="process-list__item activePage">
                    <a href="cart-personal.html" className="process-list__link">
                      <div className="icons">
                        <span className="icon white">
                          <img src="assets/images/icons/process-white2.svg" alt="" />
                        </span>
                        <span className="icon colored">
                          <img src="assets/images/icons/process2.svg" alt="" />
                        </span>
                      </div>
                      <span className="text">Mailing Address</span>
                    </a>
                  </li>
                  <li className="process-list__item activePage">
                    <a href="cart-payment.html" className="process-list__link">
                      <div className="icons">
                        <span className="icon white">
                          <img src="assets/images/icons/process-white3.svg" alt="" />
                        </span>
                        <span className="icon colored">
                          <img src="assets/images/icons/process3.svg" alt="" />
                        </span>
                      </div>
                      <span className="text">Payment Methods</span>
                    </a>
                  </li>
                  <li className="process-list__item">
                    <a href="cart-thank-you.html" className="process-list__link">
                      <div className="icons">
                        <span className="icon white">
                          <img src="assets/images/icons/process-white4.svg" alt="" />
                        </span>
                        <span className="icon colored">
                          <img src="assets/images/icons/process4.svg" alt="" />
                        </span>
                      </div>
                      <span className="text">Preview Order</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default BreadcrumbSix;