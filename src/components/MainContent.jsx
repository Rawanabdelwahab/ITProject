/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards";
import template from "../images/template-3.jpg";
import Header from "./Header";

export default function MainContent() {
  // Array of card data

  const cardData = [
    {
      name: "Hilton Alexandria Green Plaza ",
      title: "Hilton Alexandria Green Plaza",
      src: template,
      link: "/Greenplaza",
    },
    {
      name: "Hilton Alexandria Corniche",
      title: "Hilton Alexandria Corniche",
      link: "/Corniche",
      src: template,
    },

    {
      name: "Hilton Alexandria King's Ranch",
      title: "Hilton Alexandria King's Ranch",
      link: "/King",
      src: template,
    },
    {
      name: "Hilton Cairo Heliopolis",
      title: "Hilton Cairo Heliopolis",
      link: "/Conrad",
      src: template,
    },
    {
      name: "Hilton Pyramids Golf",
      title: "Hilton Pyramids Golf",
      link: "/Golf",
      src: template,
    },
    {
      name: "Waldorf Astoria Cairo",
      title: "Waldorf Astoria Cairo",
      link: "/Woldorf",
      src: template,
    },
    {
      name: "Cairo Ramses Hilton Hotel",
      title: "Cairo Ramses Hilton Hotel",
      link: "/Ramses",
      src: template,
    },
    {
      name: "Hilton Cairo Zamalek Residences",
      title: "Hilton Cairo Zamalek Residences",
      link: "/Zamalek",
      src: template,
    },
    {
      name: "Hilton Hurghada Plaza",
      title: "Hilton Hurghada Plaza",
      link: "/Hurghada",
      src: template,
    },
    {
      name: "Hilton Marsa Alam Nubian Resort",
      title: "Hilton Marsa Alam Nubian Resort",
      link: "/Marsa",
      src: template,
    },
    {
      name: "Doubletree DoubleTree by Hilton Sharm El Sheikh - Sharks Bay Resort",
      title:
        "Doubletree DoubleTree by Hilton Sharm El Sheikh - Sharks Bay Resort",
      link: "/Doubletree",
      src: template,
    },
  ];

  return (
    <div>
      <MainCards cards={cardData} />
    </div>
  );
}
