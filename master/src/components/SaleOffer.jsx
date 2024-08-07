"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const SaleOffer = () => {
  let [show, setShow] = useState(true);
  let targetDate = "14-10-2026";
  let targetTime = "12:00";
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const [day, month, year] = targetDate.split("-");
    const formattedDate = `${year}-${month}-${day}T${targetTime}:00`;
    const endDateTime = new Date(formattedDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = endDateTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetDate, targetTime]);

  let showControl = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={show ? `sale-offer` : `d-none`}>
        <div className="container container-full">
          <div className="sale-offer__content flx-between position-relative">
            <div className="sale-offer__countdown">
              <div className="countdown">
                <div className="day">
                  <span className="num">{timeLeft.days}</span>
                  <span className="word">Days</span>
                </div>
                <div className="hour">
                  <span className="num">{timeLeft.hours}</span>
                  <span className="word">Hours</span>
                </div>
                <div className="min">
                  <span className="num">{timeLeft.minutes}</span>
                  <span className="word">Min</span>
                </div>
                <div className="sec">
                  <span className="num">{timeLeft.seconds}</span>
                  <span className="word">Sec</span>
                </div>
              </div>
            </div>
            <div className="sale-offer__discount flx-align gap-2">
              <span className="sale-offer__text text-heading text-capitalize">
                New Year Flash Sale Offer
              </span>
              <strong className="sale-offer__qty text-heading font-heading">
                45% OFF
              </strong>
              <Link scroll={false} href="#" className="btn btn-sm btn-white pill fw-500">
                Shop Now
              </Link>
            </div>
            <div className="sale-offer__button">
              <button
                type="submit"
                className="sale-offer__close text-heading"
                onClick={showControl}
              >
                <i className="las la-times" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleOffer;
