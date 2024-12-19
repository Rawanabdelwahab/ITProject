
/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function King() {
  // Array of card data

  const cardData = [
    {
      name: "Mohamed Mahalawy ",
      email: "Mohamed.Mahalawy@hilton.com",
      src: template,
    },
    {
      name: "Islam Youssef",
      email: "Islam.Youssef@Hilton.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}
