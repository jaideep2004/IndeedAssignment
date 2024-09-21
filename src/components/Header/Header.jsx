


import React, { useState } from "react";
import "./header.css";
import "./responsive.css";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const [isCoursesOpen, setIsCoursesOpen] = useState(false); // For Courses submenu toggle

  const handleMouseOver = () => {
    document.querySelector("marquee").stop();
  };

  const handleMouseOut = () => {
    document.querySelector("marquee").start();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCoursesOpen(false); // Close Courses submenu when toggling the main menu
  };

  const toggleCoursesMenu = (e) => {
    // Prevent closing the entire menu when clicking the i icon
    e.stopPropagation();
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <>
      <div className="headWrapper">
        <div className="logo">
          <img src="./images/logo.png" alt="Logo" />
        </div>
        <div className="navlinkContain">
          {/* Hoverable Dropdown for Courses on Desktop */}
          <div className="navlink dropdown">
            Courses <i className="fa-solid fa-chevron-down "></i>
            <div className="dropdown-menu">
              <div className="dropdown-item">Course 1</div>
              <div className="dropdown-item">Course 2</div>
              <div className="dropdown-item">Course 3</div>
              <div className="dropdown-item">Course 4</div>
            </div>
          </div>
          <div className="navlink">Free Materials</div>
          <div className="navlink">Partnerships</div>
          <div className="navlink">Success Stories</div>
          <div className="navlink">About</div>
          <div className="navlink">Blog</div>
          <div className="navlink">Contact</div>
          <div className="navlink">Shop</div>
          <div className="navlink">My Profile</div>
          <div className="navlink">Login</div>
          <div className="navlink">
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"} fa-2xl`}></i>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-navlink">
            Courses
            <i
              className="fa-solid fa-chevron-down fa-lg"
              onClick={toggleCoursesMenu}
            ></i>
            {isCoursesOpen && (
              <div className="dropdown-menu-mobile">
                <div className="dropdown-item">Course 1</div>
                <div className="dropdown-item">Course 2</div>
                <div className="dropdown-item">Course 3</div>
                <div className="dropdown-item">Course 4</div>
              </div>
            )}
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Free Materials
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Partnerships
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Success Stories
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            About
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Blog
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Contact
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Shop
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            My Profile
          </div>
          <div
            className="mobile-navlink"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Login
          </div>
        </div>
      </div>

      <div className="topMarquee">
        <marquee onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          NEW: Free Interactive OET Reading Session. Limited Seats. Register Now!
          ** Notice: Live Group Classes are on Summer break up until 30th
          September 2024. ** Click here for on-demand, live online OET coaching
          classes by experts – fast-track and customised solutions for high OET
          Scores ** Summer Offer: All Writing Corrections at 50% Discount **
          Steal Deals on OET Learning Resources ** OET Writing – Corrected
          Letters eBook**
        </marquee>
      </div>
    </>
  );
};

export default Header;
