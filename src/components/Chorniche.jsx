/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function Corniche() {
  // Array of card data

  const cardData = [
    {
      name: "Muhammad Gamal",
      email: "Muhammad.Gamal@hilton.com",
      src: template,
    },
   
  ];

  return <MainCards cards={cardData} />;
}
