import Link from "next/link";

const Cart = () => {
    return (
        <div className="cart padding-y-120">
        <div className="container">
          <div className="cart-content">
            <div className="table-responsive">
              <table className="table style-two">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="cart-item">
                        <div className="d-flex align-items-center gap-3">
                          <div className="cart-item__thumb">
                            <Link scroll={false} href="/product-details" className="link">
                              <img
                                src="assets/images/thumbs/product-img2.png"
                                alt=""
                                className="cover-img"
                              />
                            </Link>
                          </div>
                          <div className="cart-item__content">
                            <h6 className="cart-item__title font-heading fw-700 text-capitalize font-18 mb-4">
                              {" "}
                              <Link scroll={false} href="/product-details" className="link">
                                Digital product name here
                              </Link>
                            </h6>
                            <span className="cart-item__price font-18 text-heading fw-500">
                              Category:{" "}
                              <span className="text-body font-14">WordPress</span>
                            </span>
                          </div>
                        </div>
                        <div className="flx-align gap-4 mt-3 mt-lg-4">
                          <div className="flx-align gap-2">
                            <button
                              type="button"
                              className="product-item__wishlist style-two"
                            >
                              <i className="fas fa-heart" />
                            </button>
                            <span className="text-body">Add to wishlist</span>
                          </div>
                          <button
                            type="button"
                            className="rounded-btn delete-btn text-danger hover-text-decoration-underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="cart-item__count">
                        <button data-decrease="data-decrease">
                          {" "}
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          data-value="data-value"
                          type="number"
                          defaultValue={2}
                        />
                        <button data-increase="data-increase">
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                        $28.00
                      </span>
                    </td>
                    <td>
                      <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                        $56.00
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="cart-item">
                        <div className="d-flex align-items-center gap-3">
                          <div className="cart-item__thumb">
                            <Link scroll={false} href="/product-details" className="link">
                              <img
                                src="assets/images/thumbs/product-img3.png"
                                alt=""
                                className="cover-img"
                              />
                            </Link>
                          </div>
                          <div className="cart-item__content">
                            <h6 className="cart-item__title font-heading fw-700 text-capitalize font-18 mb-4">
                              {" "}
                              <Link scroll={false} href="/product-details" className="link">
                                Digital product name here
                              </Link>
                            </h6>
                            <span className="cart-item__price font-18 text-heading fw-500">
                              Category:{" "}
                              <span className="text-body font-14">WordPress</span>
                            </span>
                          </div>
                        </div>
                        <div className="flx-align gap-4 mt-3 mt-lg-4">
                          <div className="flx-align gap-2">
                            <button
                              type="button"
                              className="product-item__wishlist style-two"
                            >
                              <i className="fas fa-heart" />
                            </button>
                            <span className="text-body">Add to wishlist</span>
                          </div>
                          <button
                            type="button"
                            className="rounded-btn delete-btn text-danger hover-text-decoration-underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="cart-item__count">
                        <button data-decrease="data-decrease">
                          {" "}
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          data-value="data-value"
                          type="number"
                          defaultValue={2}
                        />
                        <button data-increase="data-increase">
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                        $28.00
                      </span>
                    </td>
                    <td>
                      <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                        $56.00
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="cart-item">
                        <div className="d-flex align-items-center gap-3">
                          <div className="cart-item__thumb">
                            <Link scroll={false} href="/product-details" className="link">
                              <img
                                src="assets/images/thumbs/product-img4.png"
                                alt=""
                                className="cover-img"
                              />
                            </Link>
                          </div>
                          <div className="cart-item__content">
                            <h6 className="cart-item__title font-heading fw-700 text-capitalize font-18 mb-4">
                              {" "}
                              <Link scroll={false} href="/product-details" className="link">
                                Digital product name here
                              </Link>
                            </h6>
                            <span className="cart-item__price font-18 text-heading fw-500">
                              Category:{" "}
                              <span className="text-body font-14">WordPress</span>
                            </span>
                          </div>
                        </div>
                        <div className="flx-align gap-4 mt-3 mt-lg-4">
                          <div className="flx-align gap-2">
                            <button
                              type="button"
                              className="product-item__wishlist style-two"
                            >
                              <i className="fas fa-heart" />
                            </button>
                            <span className="text-body">Add to wishlist</span>
                          </div>
                          <button
                            type="button"
                            className="rounded-btn delete-btn text-danger hover-text-decoration-underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="cart-item__count">
                        <button data-decrease="data-decrease">
                          {" "}
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          data-value="data-value"
                          type="number"
                          defaultValue={3}
                        />
                        <button data-increase="data-increase">
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                        $28.00
                      </span>
                    </td>
                    <td>
                      <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                        $96.00
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart-content__bottom flx-between gap-2">
              <Link scroll={false}
                href="/all-product"
                className="btn btn-outline-light flx-align gap-2 pill btn-lg"
              >
                <span className="icon line-height-1 font-20">
                  <i className="las la-arrow-left" />
                </span>
                Continue Shopping
              </Link>
              <Link scroll={false}
                href="/cart-personal"
                className="btn btn-main flx-align gap-2 pill btn-lg"
              >
                Next
                <span className="icon line-height-1 font-20">
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Cart;