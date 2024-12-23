/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";
import Header from "./Header";
import mahalawy from "../images/mahalawy.jpg";
import rawan from "../images/rawan.jpeg";
export default function Greenplaza() {
  // Array of card data

  const cardData = [
    {
      name: "Mohamed Mahalawy ",
      email: "Mohamed.Mahalawy@hilton.com",
      src: mahalawy,
    },
    {
      name: "Rawan Kandil",
      email: "Rawan.Kandil@hilton.com",
      src: rawan,
    },
  ];

  return (
    <div>
      <Header />
      <div className="body-container-inner ">
        <section id="pro" className="style1">
          <div className="body-container-content">
            <MainCards cards={cardData} />
          </div>
        </section>
      </div>
    </div>
  );
}
