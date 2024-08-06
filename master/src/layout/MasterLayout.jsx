'use client'
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MasterLayout = ({ children }) => {
    let pathname = usePathname();
let [active, setActive] = useState(false)
let [show, setShow] = useState(false)
    let dashboardControl =()=>{
        setActive(!active)
    }
    let showProfileControl =()=>{
        setShow(!show)
    }


    
    return (
        <>

            <div className="mobile-menu d-lg-none d-block" >
                <button type="button" className="close-button">
                    {" "}
                    <i className="las la-times" />{" "}
                </button>
                <div className="mobile-menu__inner">
                    <a href="index.html" className="mobile-menu__logo">
                        <img
                            src="assets/images/logo/logo.png"
                            alt="Logo"
                            className="white-version"
                        />
                        <img
                            src="assets/images/logo/white-logo-two.png"
                            alt="Logo"
                            className="dark-version"
                        />
                    </a>
                    <div className="mobile-menu__menu">
                        <ul className="nav-menu flx-align nav-menu--mobile">
                            <li className="nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">
                                    Home
                                </a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="index.html" className="nav-submenu__link">
                                            {" "}
                                            Home One
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="index-two.html" className="nav-submenu__link">
                                            {" "}
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
                                            {" "}
                                            All Products
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="product-details.html" className="nav-submenu__link">
                                            {" "}
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
                                            {" "}
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart.html" className="nav-submenu__link">
                                            {" "}
                                            Shopping Cart
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart-personal.html" className="nav-submenu__link">
                                            {" "}
                                            Mailing Address
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart-payment.html" className="nav-submenu__link">
                                            {" "}
                                            Payment Method
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart-thank-you.html" className="nav-submenu__link">
                                            {" "}
                                            Preview Order
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="dashboard.html" className="nav-submenu__link">
                                            {" "}
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
                                            {" "}
                                            Blog Details
                                        </a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="blog-details-sidebar.html" className="nav-submenu__link">
                                            {" "}
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
                        <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
                            <a href="register.html" className="btn btn-main pill">
                                <span className="icon-left icon">
                                    <img src="assets/images/icons/user.svg" alt="" />
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
                    </div>
                </div>
            </div>


            <section className={`dashboard ${active && "active"}`} onClick={()=> show ===true && setShow(false) }>
                <div className="dashboard__inner d-flex">
                    {/* Dashboard Sidebar Start */}
                    <div className={`dashboard-sidebar ${active && "active"}`}>
                        <button
                            type="button"
                            className="dashboard-sidebar__close d-lg-none d-flex"
                        >
                            <i className="las la-times" />
                        </button>
                        <div className="dashboard-sidebar__inner">
                            <a href="index.html" className="logo mb-48">
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
                            </a>
                            <a href="index.html" className="logo favicon mb-48">
                                <img src="assets/images/logo/favicon.png" alt="" />
                            </a>
                            {/* Sidebar List Start */}
                            <ul className="sidebar-list">
                                <li className={`sidebar-list__item ${pathname == "/dashboard" && "activePage"}`}>
                                    <a href="dashboard.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon1.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active1.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Dashboard</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/dashboard-profile" && "activePage"}`}>
                                    <a href="dashboard-profile.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon2.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active2.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Profile</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/follower" && "activePage"}`}>
                                    <a href="follower.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon4.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active4.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Followers</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/following" && "activePage"}`}>
                                    <a href="following.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon5.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active5.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Followings</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/setting" && "activePage"}`}>
                                    <a href="setting.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon10.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active10.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Settings</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/statement" && "activePage"}`}>
                                    <a href="statement.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon12.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active12.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Statements</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/earning" && "activePage"}`}>
                                    <a href="earning.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon11.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active11.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Earnings</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/review" && "activePage"}`}>
                                    <a href="review.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon7.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active7.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Reviews</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/download" && "activePage"}`}>
                                    <a href="download.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon6.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active6.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Downloads</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/refund" && "activePage"}`}>
                                    <a href="refund.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon8.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active8.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Refunds</span>
                                    </a>
                                </li>
                                <li className={`sidebar-list__item ${pathname == "/login" && "activePage"}`}>
                                    <a href="login.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img
                                                src="assets/images/icons/sidebar-icon13.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            <img
                                                src="assets/images/icons/sidebar-icon-active13.svg"
                                                alt=""
                                                className="icon icon-active"
                                            />
                                        </span>
                                        <span className="text">Logout</span>
                                    </a>
                                </li>
                            </ul>
                            {/* Sidebar List End */}
                        </div>
                    </div>

                    <div className="dashboard-body">
                        {/* Dashboard Nav Start */}
                        <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
                            <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
                                <button onClick={dashboardControl}
                                    type="button"
                                    className="icon-btn bar-icon text-heading bg-gray-seven flx-center"
                                >
                                    <i className="las la-bars" />
                                </button>
                                <button onClick={dashboardControl}
                                    type="button"
                                    className="icon-btn arrow-icon text-heading bg-gray-seven flx-center"
                                >
                                    <img src="assets/images/icons/angle-right.svg" alt="" />
                                </button>
                                <form action="#" className="search-input d-sm-block d-none">
                                    <span className="icon">
                                        <img
                                            src="assets/images/icons/search-dark.svg"
                                            alt=""
                                            className="white-version"
                                        />
                                        <img
                                            src="assets/images/icons/search-dark-white.svg"
                                            alt=""
                                            className="dark-version"
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        className="common-input common-input--md common-input--bg pill w-100"
                                        placeholder="Search here..."
                                    />
                                </form>
                            </div>
                            <div className="dashboard-nav__right" >
                                <div className="header-right flx-align">
                                    <div className="header-right__inner gap-sm-3 gap-2 flx-align d-flex">
                                        {/* Light Dark Mode */}
                                       <ThemeToggle/>
                                        <div className="user-profile">
                                            <button className="user-profile__button flex-align" onClick={showProfileControl}>
                                                <span className="user-profile__thumb">
                                                    <img
                                                        src="assets/images/thumbs/user-profile.png"
                                                        className="cover-img"
                                                        alt=""
                                                    />
                                                </span>
                                            </button>
                                            <ul className={`user-profile-dropdown ${show && "show"} `}>
                                                <li className="sidebar-list__item">
                                                    <a href="dashboard-profile.html" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img
                                                                src="assets/images/icons/sidebar-icon2.svg"
                                                                alt=""
                                                                className="icon"
                                                            />
                                                            <img
                                                                src="assets/images/icons/sidebar-icon-active2.svg"
                                                                alt=""
                                                                className="icon icon-active"
                                                            />
                                                        </span>
                                                        <span className="text">Profile</span>
                                                    </a>
                                                </li>
                                                <li className="sidebar-list__item">
                                                    <a href="setting.html" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img
                                                                src="assets/images/icons/sidebar-icon10.svg"
                                                                alt=""
                                                                className="icon"
                                                            />
                                                            <img
                                                                src="assets/images/icons/sidebar-icon-active10.svg"
                                                                alt=""
                                                                className="icon icon-active"
                                                            />
                                                        </span>
                                                        <span className="text">Settings</span>
                                                    </a>
                                                </li>
                                                <li className="sidebar-list__item">
                                                    <a href="login.html" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img
                                                                src="assets/images/icons/sidebar-icon13.svg"
                                                                alt=""
                                                                className="icon"
                                                            />
                                                            <img
                                                                src="assets/images/icons/sidebar-icon-active13.svg"
                                                                alt=""
                                                                className="icon icon-active"
                                                            />
                                                        </span>
                                                        <span className="text">Logout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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
                                </div>
                            </div>
                        </div>


                        {/* children */}
                        {children}
                        {/* Dashboard Footer */}
                        <div className="dashboard-footer bottom-footer-two mt-32 border-0 bg-white">
                            <div className="bottom-footer__inner flx-between gap-3">
                                <p className="bottom-footer__text font-14">
                                    {" "}
                                    Copyright © 2024 DPmarket, All rights reserved.
                                </p>
                                <div className="footer-links gap-4">
                                    <a href="#" className="footer-link hover-text-heading font-14">
                                        Terms of service
                                    </a>
                                    <a href="#" className="footer-link hover-text-heading font-14">
                                        Privacy Policy
                                    </a>
                                    <a href="#" className="footer-link hover-text-heading font-14">
                                        cookies
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>




        </>
    );
}

export default MasterLayout;