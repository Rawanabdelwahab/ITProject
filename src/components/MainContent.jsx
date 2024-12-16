/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";

export default function MainContent() {
  // Array of card data
  const cardData = [
    {
      name: "Hilton Alexandria Corniche",
      title: "Luxury at its best",
      email: "contact@hilton.com",
      src: template,
    },
    {
      name: "Four Seasons Hotel Alexandria",
      title: "Elegance and Comfort",
      email: "info@fourseasons.com",
      src: template,
    },
    {
      name: "Sheraton Montazah Hotel",
      title: "Sea View Bliss",
      email: "reservations@sheraton.com",
      src: template,
    },
    {
      name: "Sheraton Montazah Hotel",
      title: "Sea View Bliss",
      email: "reservations@sheraton.com",
      src: template,
    },
    {
      name: "Sheraton Montazah Hotel",
      title: "Sea View Bliss",
      email: "reservations@sheraton.com",
      src: template,
    },
  ];

  return <MainCards cards={cardData} />;
}

