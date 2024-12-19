
/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function Marsa() {
  // Array of card data

  const cardData = [
    {
      name: "Bishoy Nagy",
      email: "Bishoy.Nagy@hilton.com",
      src: template,
    },
    {
      name: "Suliman ElFiky",
      email: "Suliman.ElFiky@Hilton.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}
