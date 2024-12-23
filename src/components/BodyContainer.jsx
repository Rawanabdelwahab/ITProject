/* eslint-disable no-unused-vars */
import React from "react";
import MainContent from "./MainContent";
import Header from "./Header";
import Footer from "./Footer";

export default function BodyContainer() {
  return (
    <div>
      <Header />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol id="icon-carrd-light" viewBox="0 0 480 552">
            <path d="M446.1,83.3c-1.2-0.7-2.6-0.8-3.9-0.2l-130.7,62.7L37.7,14.4c-1.2-0.6-2.7-0.5-3.9,0.2c-1.2,0.7-1.9,2-1.9,3.4v324.5 c0,1.6,1,3.1,2.5,3.7l143.8,60.2c0.5,0.2,1,0.3,1.5,0.3c0,0,0,0,0,0v129.3c0,1.4,0.7,2.7,1.9,3.4c0.6,0.4,1.4,0.6,2.1,0.6 c0.6,0,1.2-0.1,1.7-0.4l260.1-124.8c1.4-0.7,2.3-2.1,2.3-3.6V86.6C448,85.3,447.3,84,446.1,83.3z M40,339.8V24.4l262.3,125.8 l-78.2,37.5c-0.4-0.6-0.9-1.1-1.6-1.4l-122.4-55.7c-2-0.9-4.4,0-5.3,2c-0.9,2,0,4.4,2,5.3l118.6,54l-33.3,16 c-1.4,0.7-2.3,2.1-2.3,3.6v26.2l-80-32.2c-2.1-0.8-4.4,0.2-5.2,2.2c-0.8,2,0.2,4.4,2.2,5.2l83,33.4v66.3l-80-32.2 c-2.1-0.8-4.4,0.2-5.2,2.2c-0.8,2,0.2,4.4,2.2,5.2l83,33.4v77.2L40,339.8z M440,408.6l-252.1,121V318.3c0,0,0,0,0,0v-74.9 c0,0,0,0,0,0V214L440,93V408.6z M242.7,273.3c-1-2-0.1-4.4,1.9-5.3l135.3-65.4c2-1,4.4-0.1,5.3,1.9c1,2,0.1,4.4-1.9,5.3L248,275.2 c-0.6,0.3-1.2,0.4-1.7,0.4C244.8,275.6,243.3,274.8,242.7,273.3z M242.7,348.2c-1-2-0.1-4.4,1.9-5.3l135.3-65.4 c2-1,4.4-0.1,5.3,1.9c1,2,0.1,4.4-1.9,5.3L248,350.1c-0.6,0.3-1.2,0.4-1.7,0.4C244.8,350.5,243.3,349.6,242.7,348.2z M242.7,423.1 c-1-2-0.1-4.4,1.9-5.3l135.3-65.4c2-1,4.4-0.1,5.3,1.9c1,2,0.1,4.4-1.9,5.3L248,425c-0.6,0.3-1.2,0.4-1.7,0.4 C244.8,425.4,243.3,424.5,242.7,423.1z"></path>
          </symbol>
        </svg>
        <header id="body-container-header">
          <a href="/" className="body-container-logo">
            <svg>
              <use href="#icon-carrd"></use>
            </svg>
            <span className="body-container-label">
              {" "}
              Hilton&apos;s IT Team Drives Innovation.
            </span>
          </a>
        </header>

        <div className="body-container-inner ">
          <section id="intro">
            <div className="body-container-content">
              <svg>
                <use href="#icon-carrd-light"></use>
              </svg>
              <h1>Egypt IT Team&apos;s Structure.</h1>
              <h1> Hilton&apos;s IT Team Drives Innovation.</h1>
            </div>
          </section>

          <section id="highlights" className="style1">
            <MainContent />

            <section>
              <div className="body-container-content">
                <h2>Free</h2>
                <p>
                  Build up to three sites per account and use all of
                  Carrd&apos;s core features – for free!
                </p>
              </div>
            </section>
          </section>
          <section id="pro" className="style1"></section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}