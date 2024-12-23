/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";
import Header from "./Header";
import gamal from "../images/gamal.jpg";
export default function Corniche() {
  // Array of card data

  const cardData = [
    {
      name: "Muhammad Gamal",
      email: "Muhammad.Gamal@hilton.com",
      src: template,
    },
   
  ];

  return(
    <div>
    <Header/>
    <div className="body-container-inner ">
    <section id="pro" className="style1">
    <div className="body-container-content">
   <MainCards cards={cardData} />
   </div>
   </section>
   </div>
   </div>
  )
}
