import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth >= 640 && isOpen) {
      setIsOpen(false);
    }
  }, [windowWidth, isOpen]);

  return (
    <div className="header" id="home">
      <div className="headerSection">
        <div className="headerNav">
          <h1>Escape</h1>

          <ul className="desktopMenu">
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {windowWidth < 640 && (
            <IoIosMenu
              className="headerIcon"
              onClick={() => setIsOpen(true)}
            />
          )}

          {isOpen && windowWidth < 640 && (
            <ul className="mobileMenu">
              <HiMiniXMark
                className="closeIcon"
                onClick={() => setIsOpen(false)}
              />
              <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#categories" onClick={() => setIsOpen(false)}>Categories</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>

        <div className="headerHero">
          <h2>Let's do it together.</h2>
          <p>We travel the world in search of stories. Come along for the ride.</p>
          <a href="#posts"><button>View Latest Posts</button></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
