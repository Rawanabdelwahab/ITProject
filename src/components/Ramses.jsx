/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function Ramses() {
  // Array of card data

  const cardData = [
    {
      name: "Weaam Moustafa",
      email: "Weaam.Moustafa@hilton.com",
      src: template,
    },
    {
      name: "AbdelRahman Said",
      email: "AbdelRahman.said@Hilton.com",
      src: template,
    },
    {
      name: "Ahmed Mosdaq",
      email: "Ahmed.Mosdaq@Hilton.com",
      src: template,
    },
    {
      name: "Mohamed Joumaa",
      email: "Mohamed.Joumaa@Hilton.com",
      src: template,
    },

    {
      name: "Shaimaa Anter",
      email: "Shaimaa.Anter@Hilton.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}
