
/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";
import Header from "./Header";

export default function Luxor() {
  // Array of card data

  const cardData = [
    {
      name: "Mahmoud ANasser",
      email: "Mahmoud.ANasser@hilton.com",
      src: template,
    },
    {
      name: "Anwar Raafat",
      email: "Anwar.Raafat@Hilton.com",
      src: template,
    },
    {
      name: "Beshoy Talaat",
      email: "Beshoy.Talaat@Hilton.com",
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
