/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function Greenplaza() {
  // Array of card data

  const cardData = [
    {
      name: "Mohamed Mahalawy ",
      email: "Mohamed.Mahalawy@hilton.com",
      src: template,
    },
    {
      name: "Rawan Kandil",
      email: "Rawan.Kandil@hilton.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}
