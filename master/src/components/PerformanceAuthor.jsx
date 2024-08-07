"use client";
import { useEffect, useRef } from "react";
import CircleType from "circletype";
import Link from "next/link";

const PerformanceAuthor = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);
  return (
    <section className="top-performance overflow-hidden padding-y-120 position-relative z-index-1">
      <img
        src="assets/images/shapes/spider-net.png"
        alt=""
        className="spider-net position-absolute top-0 end-0 z-index--1 white-version"
      />
      <img
        src="assets/images/shapes/spider-net-white.png"
        alt=""
        className="spider-net position-absolute top-0 end-0 z-index--1 dark-version"
      />
      <img
        src="assets/images/shapes/pattern-curve-four.png"
        alt=""
        className="position-absolute top-0 start-0 z-index--1"
      />
      <img
        src="assets/images/shapes/element2.png"
        alt=""
        className="element two"
      />
      <div className="container container-two">
        <div className="row gy-4 align-items-center flex-wrap-reverse">
          <div className="col-lg-7 pe-lg-5">
            <div className="position-relative">
              <div className="circle style-two static-circle">
                <div className="circle__badge">
                  <img src="assets/images/icons/featured-badge.png" alt="" />
                </div>
                <div className="circle__desc circle__text">
                  <p ref={textRef}>Our Top Performance Our</p>
                </div>
              </div>
              <div className="performance-content">
                <div className="performance-content__item">
                  <span className="performance-content__text font-18">
                    Email Subscription
                  </span>
                  <h4 className="performance-content__count">49,000+</h4>
                </div>
                <div className="performance-content__item">
                  <span className="performance-content__text font-18">
                    Total Products
                  </span>
                  <h4 className="performance-content__count">45,000+</h4>
                </div>
                <div className="performance-content__item">
                  <span className="performance-content__text font-18">
                    Total Download
                  </span>
                  <h4 className="performance-content__count">48,000+</h4>
                </div>
                <div className="performance-content__item">
                  <span className="performance-content__text font-18">
                    Monthly Visitor
                  </span>
                  <h4 className="performance-content__count">65,000+</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Top Performance</h3>
                <p className="section-heading__desc font-18 w-sm">
                  Every month we pick some best products for you. This month's
                  best web themes &amp; templates have arrived, chosen by our
                  content specialists.
                </p>
              </div>
              <Link scroll={false}
                href="/register"
                className="btn btn-main btn-lg pill fw-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAuthor;
