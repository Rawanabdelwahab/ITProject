/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function DoubleTree() {
  // Array of card data

  const cardData = [
    {
      name: "Ahmed Abbas",
      email: "Ahmed.Abbas@Hilton.com",
      src: template,
    },
    {
      name: "Waheed Mohamed",
      email: "Waheed.Mohamed@Hilton.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}
