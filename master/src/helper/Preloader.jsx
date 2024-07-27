"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {active === true && (
        <div className="loader-mask">
          <div className="loader">
            <div />
            <div />
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
