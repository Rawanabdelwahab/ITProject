
/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function Heliop() {
  // Array of card data

  const cardData = [
    {
      name: "Ahmed AbdSalam ",
      email: "Ahmed.AbdSalam@waldorfastoria.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}
