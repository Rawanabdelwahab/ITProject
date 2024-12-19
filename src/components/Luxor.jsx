
/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

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

  return <MainCards cards={cardData} />;
}