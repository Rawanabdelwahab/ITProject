
/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function Conrad() {
  // Array of card data

  const cardData = [
    {
      name: "Yasser Abdel Samei",
      email: "yasser.samei@conradhotels.com",
      src: template,
    },
    {
      name: "Ahmed Abouelea",
      email: "Ahmed.Abouelela@ConradHotels.com",
      src: template,
    },
    {
      name: "Sameh Salah",
      email: "Sameh.Salah@conradhotels.com",
      src: template,
    },
    {
      name: "Tamer Salah",
      email: "Tamer.Salah@ConradHotels.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}
