import Link from "next/link";


const ProductDetails = () => {
   
    return (
        <div className="product-details mt-32 padding-b-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-product-details"
                                role="tabpanel"
                                aria-labelledby="pills-product-details-tab"
                                tabIndex={0}
                            >
                                {/* Product Details Content Start */}
                                <div className="product-details">
                                    <div className="product-details__thumb">
                                        <img src="assets/images/thumbs/product-details.png" alt="" />
                                    </div>
                                    <div className="product-details__buttons flx-align justify-content-center gap-3">
                                        <Link scroll={false}
                                            href="#"
                                            className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center"
                                        >
                                            Live Preview
                                            <img src="assets/images/icons/eye-outline.svg" alt="" />
                                        </Link>
                                        <Link scroll={false}
                                            href="#"
                                            className="screenshot-btn btn btn-white pill px-sm-5"
                                            data-images='["assets/images/thumbs/product-details.png", "assets/images/thumbs/product-details.png"]'
                                        >
                                            Screenshot
                                        </Link>
                                    </div>
                                    <p className="product-details__desc">
                                        System management saas products, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident.
                                    </p>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">
                                            Template Features
                                        </h5>
                                        <ul className="product-list">
                                            <li className="product-list__item">
                                                Modern and Professional design
                                            </li>
                                            <li className="product-list__item">
                                                Built with Elementor Pro
                                            </li>
                                            <li className="product-list__item">
                                                100% Responsive &amp; mobile-friendly
                                            </li>
                                            <li className="product-list__item">
                                                12+ pre-built templates
                                            </li>
                                            <li className="product-list__item">Easy to customize</li>
                                            <li className="product-list__item">
                                                Fully responsive website
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">Layout Features</h5>
                                        <ul className="product-list">
                                            <li className="product-list__item">One-Click demo import</li>
                                            <li className="product-list__item">Unlimited color style</li>
                                            <li className="product-list__item">850+ google fonts</li>
                                            <li className="product-list__item">Powered by dpmarket</li>
                                            <li className="product-list__item">
                                                Hight resolution images
                                            </li>
                                            <li className="product-list__item">Easy to customize</li>
                                        </ul>
                                    </div>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">Font Family</h5>
                                        <ul className="product-list">
                                            <li className="product-list__item text-heading">
                                                <Link scroll={false}
                                                    href="https://fonts.google.com/specimen/Fira+Sans?query=fira"
                                                    className="link text-body hover-text-main hover-text-decoration-underline"
                                                >
                                                    Fira Sans
                                                </Link>
                                            </li>
                                            <li className="product-list__item text-heading">
                                                <Link scroll={false}
                                                    href="https://fonts.google.com/specimen/Inter?query=inter"
                                                    className="link text-body hover-text-main hover-text-decoration-underline"
                                                >
                                                    Inter
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-details__item">
                                        <h5 className="product-details__title mb-3">Support</h5>
                                        <p className="product-details__desc">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident.
                                        </p>
                                    </div>
                                    <div className="more-item">
                                        <div className="flx-between mb-4">
                                            <h5 className="more-item__title">More Items</h5>
                                            <Link scroll={false}
                                                href="/profile"
                                                className="text-heading fw-500 hover-text-decoration-underline"
                                            >
                                                View Author Profile
                                            </Link>
                                        </div>
                                        <div className="more-item__content flx-align">
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item1.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item2.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item3.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item4.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item5.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item6.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item7.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item8.png" alt="" />
                                                </Link>
                                            </div>
                                            <div className="more-item__item">
                                                <Link scroll={false}
                                                    href="/all-product"
                                                    className="link w-100 h-100 d-block"
                                                >
                                                    <img src="assets/images/thumbs/more-item9.png" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Details Content End */}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-rating"
                                role="tabpanel"
                                aria-labelledby="pills-rating-tab"
                                tabIndex={0}
                            >
                                <div className="product-review-wrapper">
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">
                                                    For{" "}
                                                    <span className="product-review__subject">
                                                        Customer Support
                                                    </span>{" "}
                                                </span>
                                            </div>
                                            <div className="product-review__date">
                                                by{" "}
                                                <Link scroll={false} href="#" className="product-review__user text--base">
                                                    John Doe{" "}
                                                </Link>{" "}
                                                2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quibusdam itaque vitae ex possimus delectus? Voluptas
                                                expedita accusantium aperiam quo quod dolore dignissimos
                                                rerum praesentium deserunt libero recusandae quisquam est
                                                accusamus eos dolorum sit explicabo, sapiente pariatur
                                                voluptates veniam aut veritatis, magnam velit similique! Ex
                                                similique magni labore aperiam, eius quas molestiae
                                                accusantium porro eaque esse minus amet doloribus quo odit
                                                illo doloremque.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">
                                                    For{" "}
                                                    <span className="product-review__subject">
                                                        Customer Support
                                                    </span>{" "}
                                                </span>
                                            </div>
                                            <div className="product-review__date">
                                                by{" "}
                                                <Link scroll={false} href="#" className="product-review__user text--base">
                                                    John Doe{" "}
                                                </Link>{" "}
                                                2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quibusdam itaque vitae ex possimus delectus? Voluptas
                                                expedita accusantium aperiam quo quod dolore dignissimos
                                                rerum praesentium deserunt libero recusandae quisquam est
                                                accusamus eos dolorum sit explicabo, sapiente pariatur
                                                voluptates veniam aut veritatis, magnam velit similique! Ex
                                                similique magni labore aperiam, eius quas molestiae
                                                accusantium porro eaque esse minus amet doloribus quo odit
                                                illo doloremque.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-comments"
                                role="tabpanel"
                                aria-labelledby="pills-comments-tab"
                                tabIndex={0}
                            >
                                {/* Comment Start */}
                                <div className="comment mt-64 mb-64">
                                    <h5 className="mb-32">2 Comments</h5>
                                    <ul className="comment-list">
                                        <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                            <div className="comment-list__thumb flex-shrink-0">
                                                <img
                                                    src="assets/images/thumbs/comment1.png"
                                                    className="cover-img"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="comment-list__content">
                                                <div className="flx-between gap-2 align-items-start">
                                                    <div>
                                                        <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                                            Jenny Wilson
                                                        </h6>
                                                        <span className="comment-list__date font-14">
                                                            Jan 21, 2024 at 11:25 pm
                                                        </span>
                                                    </div>
                                                    <Link scroll={false}
                                                        className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                                        href="#comment-box"
                                                    >
                                                        Reply
                                                        <span className="icon">
                                                            <img
                                                                src="assets/images/icons/reply-icon.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <p className="comment-list__desc mt-3">
                                                    Lorem ipsum dolor sit amet consectetur. Nec nunc
                                                    pellentesque massa pretium. Quam sapien nec venenatis
                                                    vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                                                    cras vitae neque. Necnunc pellentesque massa pretium.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <ul className="comment-list comment-list--two">
                                                <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                                    <div className="comment-list__thumb flex-shrink-0">
                                                        <img
                                                            src="assets/images/thumbs/comment2.png"
                                                            className="cover-img"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="comment-list__content">
                                                        <div className="flx-between gap-2 align-items-start">
                                                            <div>
                                                                <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                                                    Courtney Henry
                                                                </h6>
                                                                <span className="comment-list__date font-14">
                                                                    Jan 21, 2024 at 11:25 pm
                                                                </span>
                                                            </div>
                                                            <Link scroll={false}
                                                                className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                                                href="#comment-box"
                                                            >
                                                                Reply
                                                                <span className="icon">
                                                                    <img
                                                                        src="assets/images/icons/reply-icon.svg"
                                                                        alt=""
                                                                    />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <p className="comment-list__desc mt-3">
                                                            Lorem ipsum dolor sit amet consectetur. Nec nunc
                                                            pellentesque massa pretium. Quam sapien nec venenatis
                                                            vivamus sed cras faucibus.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* Comment End */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* ======================= Product Sidebar Start ========================= */}
                        <div className="product-sidebar section-bg">
                            <div className="product-sidebar__top position-relative flx-between gap-1">
                                <button
                                    type="button"
                                    className="btn-has-dropdown font-heading font-18"
                                >
                                    Extended License
                                </button>
                                <div className="license-dropdown">
                                    <div className="license-dropdown__item mb-3">
                                        <h6 className="license-dropdown__title font-body mb-1 font-16">
                                            Regular License
                                        </h6>
                                        <p className="license-dropdown__desc font-13">
                                            Use, by you or one client, in a solitary finished result which
                                            end clients are not charged for. The complete cost
                                            incorporates the thing cost and a purchaser expense..
                                        </p>
                                    </div>
                                    <div className="license-dropdown__item">
                                        <h6 className="license-dropdown__title font-body mb-1 font-16">
                                            Extended License
                                        </h6>
                                        <p className="license-dropdown__desc font-13">
                                            Use, by you or one client, in a solitary final result which
                                            end clients can be charged for. The all out cost incorporates
                                            the thing cost and a purchaser expense.
                                        </p>
                                    </div>
                                    <div className="mt-3 pt-2 border-top text-center ">
                                        <Link scroll={false}
                                            href="#"
                                            className="link hover-text-decoration-underline font-14 text-main fw-500"
                                        >
                                            View License Details
                                        </Link>
                                    </div>
                                </div>
                                <h6 className="product-sidebar__title">$1580.00</h6>
                            </div>
                            <ul className="sidebar-list">
                                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                                    <span className="icon">
                                        <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                    </span>
                                    <span className="text">Quality verified</span>
                                </li>
                                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                                    <span className="icon">
                                        <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                    </span>
                                    <span className="text">Use for a single project</span>
                                </li>
                                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300">
                                    <span className="icon">
                                        <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                    </span>
                                    <span className="text">Non-paying users only</span>
                                </li>
                            </ul>
                            <div className="flx-between mt-3">
                                <div className="common-check mb-0">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="checkbox"
                                        id="extended"
                                    />
                                    <label
                                        className="form-check-label mb-0 fw-300 text-body"
                                        htmlFor="extended"
                                    >
                                        Extended support 12 month
                                    </label>
                                </div>
                                <div className="flx-align gap-2">
                                    <span className="product-item__prevPrice text-decoration-line-through">
                                        $12
                                    </span>
                                    <h6 className="product-item__price mb-0 font-14 fw-500">$7.25</h6>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32"
                            >
                                <img src="assets/images/icons/add-to-cart.svg" alt="" />
                                Add To Cart
                            </button>
                            {/* Author Details Start*/}
                            <div className="author-details">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="author-details__thumb flex-shrink-0">
                                        <img src="assets/images/thumbs/author-details-img.png" alt="" />
                                    </div>
                                    <div className="author-details__content">
                                        <h6 className="author-details__name font-18 mb-2">
                                            <Link scroll={false} href="/profile" className="link hover-text-main">
                                                Oviousdev
                                            </Link>
                                        </h6>
                                        <span className="d-flex align-items-center gap-1">
                                            <span className="star-rating">
                                                <span className="star-rating__item font-11">
                                                    <i className="fas fa-star" />
                                                </span>
                                                <span className="star-rating__item font-11">
                                                    <i className="fas fa-star" />
                                                </span>
                                                <span className="star-rating__item font-11">
                                                    <i className="fas fa-star" />
                                                </span>
                                                <span className="star-rating__item font-11">
                                                    <i className="fas fa-star" />
                                                </span>
                                                <span className="star-rating__item font-11">
                                                    <i className="fas fa-star" />
                                                </span>
                                            </span>
                                            <span className="star-rating__text text-body"> 5.0</span>
                                        </span>
                                    </div>
                                </div>
                                <ul className="badge-list flx-align gap-2 mt-3">
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge1.png" alt="" />
                                    </li>
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge2.png" alt="" />
                                    </li>
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge3.png" alt="" />
                                    </li>
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge4.png" alt="" />
                                    </li>
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge5.png" alt="" />
                                    </li>
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge6.png" alt="" />
                                    </li>
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge7.png" alt="" />
                                    </li>
                                    <li
                                        className="badge-list__item"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Badge Info"
                                    >
                                        <img src="assets/images/thumbs/badge8.png" alt="" />
                                    </li>
                                </ul>
                                <Link scroll={false}
                                    href="/profile"
                                    className="btn btn-outline-light w-100 pill mt-32"
                                >
                                    View Portfolio
                                </Link>
                            </div>
                            {/* Author Details End */}
                            {/* Meta Attribute List Start */}
                            <ul className="meta-attribute">
                                <li className="meta-attribute__item">
                                    <span className="name">Last Update</span>
                                    <span className="details">Feb 21, 2024</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Published</span>
                                    <span className="details">Feb 15, 2024</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Category</span>
                                    <span className="details">Themes</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Widget Ready</span>
                                    <span className="details">Yes</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">High Resolution</span>
                                    <span className="details">Yes</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Copatible with</span>
                                    <span className="details">
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            Contact Form 7,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            {" "}
                                            Calendar,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            {" "}
                                            Elementor,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            {" "}
                                            Elementor Pro,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            {" "}
                                            WooCommerce 8.x.x
                                        </Link>
                                    </span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">File size</span>
                                    <span className="details">85 MB</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Framework</span>
                                    <span className="details">Underscores</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Software Version</span>
                                    <span className="details">
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            WordPress 6.3.x,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            WordPress 6.2.x,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            WordPress 6.1.x,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            WordPress 6.0.x,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            WordPress 5.9.x,
                                        </Link>
                                    </span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Marketplace Files Included</span>
                                    <span className="details">
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            PHP Files,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            CSS Files,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            SCSS Files,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            JS Files,
                                        </Link>
                                    </span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Layout</span>
                                    <span className="details">Responsive</span>
                                </li>
                                <li className="meta-attribute__item">
                                    <span className="name">Tags</span>
                                    <span className="details">
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            theme,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            web design,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            minimal design,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            trendy,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            responsive,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            wordpress,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            saas,
                                        </Link>
                                        <Link scroll={false} href="#" className="hover-text-decoration-underline">
                                            dashboard,
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                            {/* Meta Attribute List End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;