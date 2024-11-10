"use client";

import React, { useState } from "react";
import NavbarMenu from "../NavbarMenu";
import styles from "../LandingPage.module.css";
import Styles from "../PsychicCategories/PsychicReading.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo-north-node.png";
import { FiMenu } from "react-icons/fi";
import Footer from "../Footer";
import AboutUsImage from "../../assets/AboutUsImage.png";
import Testimonial from "../Testimonial";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutUs: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      {/* Render NavbarMenu component */}
      {isMenuOpen && (
        <div className={styles.navbarMenuOverlay}>
          <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      )}
      <div
        className={`${styles.landingPage} ${isMenuOpen ? styles.compact : ""}`}
      >
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/" passHref>
              <Image src={logo} alt="North Node Logo" />
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/Login-page" className={styles.joinLink}>
              Join As
            </Link>
            {/* Menu Icon */}
            <FiMenu className={styles.menuIcon} onClick={toggleMenu} />
          </nav>
        </header>
        {/* Horizontal Lines Below Header */}
        <div className={styles.horizontalLines}>
          <div className={styles.line}></div>
          <div className={styles.lineSecond}></div>
        </div>

        <section>
          <div className={Styles.shadowContainer}></div>
          <section className=" py-12 text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-5xl sm:text-6xl font-bold font-baskerville text-white mb-6">
                About Us
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </section>
        </section>

        {!isMenuOpen && (
          <>
            <section className="flex flex-col items-center justify-center  text-white py-12 px-4">
              {/* Video Section */}
              <div className="relative w-full max-w-4xl h-64 md:h-96 overflow-hidden rounded-lg">
                <Image
                  src={AboutUsImage}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button className="text-white bg-white bg-opacity-30 rounded-full p-4 md:p-6 hover:bg-opacity-50 transition ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 md:h-16 md:w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-1.92A.75.75 0 0010 9.75v4.5a.75.75 0 001.555.138l3.197-1.92a.75.75 0 000-1.3z"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Description Text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center mt-6 max-w-7xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </section>
            <section ref={ref} className="relative py-12">
              <div className="flex flex-col md:flex-row justify-center  md:space-y-0 max-w-7xl mx-auto py-8">
                {/* 24/7 Availability */}
                <div className="bg-customDark p-8 flex-1 text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
                  <h3 className="text-4xl sm:text-5xl font-bold text-customGold">
                    {inView && <CountUp start={0} end={24} duration={3} />} / 7
                  </h3>
                  <p className="text-white mt-3 text-2xl font-light">
                    Availability
                  </p>
                </div>

                {/* Divider */}
                <div className="relative flex items-center mx-1">
                  <span className="absolute left-0 h-full w-px bg-gradient-to-b from-gray-500 to-gray-700"></span>
                </div>

                {/* Free Trial */}
                <div className="bg-customDark p-8 flex-1 text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
                  <h3 className="text-4xl sm:text-5xl font-bold text-customGold">
                    {inView && <CountUp start={0} end={1} duration={3} />} Free
                  </h3>
                  <p className="text-white mt-3 text-2xl font-light">Trial</p>
                </div>

                {/* Divider */}
                <div className="relative flex items-center mx-1">
                  <span className="absolute left-0 h-full w-px bg-gradient-to-b from-gray-500 to-gray-700"></span>
                </div>

                {/* Full Board of Advisors */}
                <div className="bg-customDark p-8 flex-1 text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
                  <h3 className="text-4xl sm:text-5xl font-bold text-customGold">
                    {inView && <CountUp start={0} end={50} duration={3} />}+
                  </h3>
                  <p className="text-white mt-3 text-2xl font-light">
                    Board of Advisors
                  </p>
                </div>

                {/* Divider */}
                <div className="relative flex items-center mx-1">
                  <span className="absolute left-0 h-full w-px bg-gradient-to-b from-gray-500 to-gray-700"></span>
                </div>

                {/* Community Members */}
                <div className="bg-customDark p-8 flex-1 text-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-90">
                  <h3 className="text-4xl sm:text-5xl font-bold text-customGold">
                    {inView && (
                      <CountUp
                        start={0}
                        end={10000}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </h3>
                  <p className="text-white mt-3 text-2xl font-light">
                    Community Members
                  </p>
                </div>
              </div>
            </section>

            <section>
              <Testimonial />
            </section>

            <section>
              <Footer />
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default AboutUs;
