"use client";
import Link from "next/link";
import Slider from "react-slick";

const CartPayment = () => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button className={className} onClick={onClick}>
                <i className="las la-arrow-right" />
            </button>
        );
    }
    function SamplePrevArrow(props) {
        const { className, onClick } = props;

        return (
            <button className={className} onClick={onClick}>
                <i className="las la-arrow-left" />
            </button>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 1000,
        slidesToShow:10,
        slidesToScroll: 10,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (
        <section className="cart-payment padding-y-120 overflow-hidden">
            <div className="container container-two">
                <div className="payment-method">
                    <h5 className="payment-method__title mb-4">Payment Method</h5>
                    <div className="payment-method__slider arrow-sm">
                    <Slider {...settings}>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment1"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment1">
                                <img src="assets/images/thumbs/payment-method1.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment2"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment2">
                                <img src="assets/images/thumbs/payment-method2.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment3"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment3">
                                <img src="assets/images/thumbs/payment-method3.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment4"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment4">
                                <img src="assets/images/thumbs/payment-method4.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment5"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment5">
                                <img src="assets/images/thumbs/payment-method5.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment6"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment6">
                                <img src="assets/images/thumbs/payment-method6.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment7"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment7">
                                <img src="assets/images/thumbs/payment-method7.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment8"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment8">
                                <img src="assets/images/thumbs/payment-method8.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment9"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment9">
                                <img src="assets/images/thumbs/payment-method9.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment10"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment10">
                                <img src="assets/images/thumbs/payment-method10.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment11"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment11">
                                <img src="assets/images/thumbs/payment-method11.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment12"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment12">
                                <img src="assets/images/thumbs/payment-method12.png" alt="" />
                            </label>
                        </div>
                        <div className="payment-method__item">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="payment13"
                                hidden
                            />
                            <label className="form-check-label" htmlFor="payment13">
                                <img src="assets/images/thumbs/payment-method13.png" alt="" />
                            </label>
                        </div>
                        </Slider>
                    </div>
                </div>
                <div className="cart-payment__box position-relative z-index-1 overflow-hidden">
                    <img
                        src="assets/images/shapes/pattern-curve-six.png"
                        alt=""
                        className="position-absolute end-0 top-0 z-index--1"
                    />
                    <img
                        src="assets/images/shapes/pattern-curve-five.png"
                        alt=""
                        className="position-absolute start-0 top-0 z-index--1"
                    />
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-10">
                            <h5 className="cart-payment__title mb-4">Card Details</h5>
                            <div className="cart-payment-card">
                                <form action="#">
                                    <div className="row gy-4">
                                        <div className="col-lg-12">
                                            <label
                                                htmlFor="nmbr"
                                                className="form-label mb-2 font-18 font-heading fw-600"
                                            >
                                                Card Number
                                            </label>
                                            <div className="position-relative">
                                                <input
                                                    type="text"
                                                    className="common-input common-input--bg common-input--withIcon"
                                                    id="nmbr"
                                                    placeholder="5896  1456  0040   2558"
                                                />
                                                <span className="input-icon">
                                                    <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <label
                                                htmlFor="holder"
                                                className="form-label mb-2 font-18 font-heading fw-600"
                                            >
                                                Card Holder
                                            </label>
                                            <div className="position-relative">
                                                <input
                                                    type="text"
                                                    className="common-input common-input--bg common-input--withIcon"
                                                    id="holder"
                                                    placeholder="Michel John"
                                                />
                                                <span className="input-icon">
                                                    <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label
                                                htmlFor="expire"
                                                className="form-label mb-2 font-18 font-heading fw-600"
                                            >
                                                Expire Date
                                            </label>
                                            <div className="position-relative">
                                                <input
                                                    type="text"
                                                    className="common-input common-input--bg common-input--withIcon"
                                                    id="expire"
                                                    placeholder="09/26"
                                                />
                                                <span className="input-icon">
                                                    <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label
                                                htmlFor="CVV"
                                                className="form-label mb-2 font-18 font-heading fw-600"
                                            >
                                                CVV
                                            </label>
                                            <div className="position-relative">
                                                <input
                                                    type="text"
                                                    className="common-input common-input--bg common-input--withIcon"
                                                    id="CVV"
                                                    placeholder={853}
                                                />
                                                <span className="input-icon">
                                                    <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
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
                                                    Save my details for future purchase
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="total-bill flx-between">
                                                <span className="text text-heading font-20 fw-500 font-heading">
                                                    Total Amount
                                                </span>
                                                <span className="amount text-heading font-20 fw-500 font-heading">
                                                    $274.00
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <Link scroll={false}
                                                href="/cart-thank-you"
                                                className="btn btn-main btn-lg w-100 pill"
                                            >
                                                {" "}
                                                Confirm Payment
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-content__bottom flx-between gap-2">
                    <Link scroll={false}
                        href="/cart-personal"
                        className="btn btn-outline-light flx-align gap-2 pill btn-lg"
                    >
                        <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-left" />
                        </span>
                        Back
                    </Link>
                </div>
            </div>
        </section>

    );
}

export default CartPayment;