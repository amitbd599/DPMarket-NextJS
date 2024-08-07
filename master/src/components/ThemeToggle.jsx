"use client";

import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-switch-wrapper position-relative">
      <label className="theme-switch" htmlFor="checkbox">
        {isDarkMode ? (
          <>
            <input type="checkbox" className="d-none" id="checkbox" />
            <span
              className="slider text-black header-right__button white-version"
              onClick={toggleTheme}
            >
              <img src="assets/images/icons/sun.svg" alt="" />
            </span>
          </>
        ) : (
          <>
            <span
              className="slider text-black header-right__button dark-version"
              onClick={toggleTheme}
            >
              <img src="assets/images/icons/moon.svg" alt="" />
            </span>
          </>
        )}
      </label>
    </div>
  );
};

export default ThemeToggle;
