/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";
import Header from "./Header";

export default function Zamalek() {
  // Array of card data

  const cardData = [
    {
      name: "Mohamed ElTayeb",
      email: "Mohamed.Eltayeb@hilton.comm",
      src: template,
    },
    {
      name: "Abdel-Ruhman Hussein",
      email: "Abdel-Ruhman.Hussein@Hilton.com",
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
