/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";
import Header from "./Header";

export default function Golf() {
  // Array of card data

  const cardData = [
    {
      name: "Bakr Abousada",
      email: "Bakr.abousada@conradhotels.com",
      src: template,
    },
    {
      name: "Khaled Elseady",
      email: "Khaled.Elseady@Hilton.com",
      src: template,
    },
  ];

  return (
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
