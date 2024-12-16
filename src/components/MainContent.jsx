/* eslint-disable no-unused-vars */
import React from "react";
import MainCards from "./MainCards.jsx";
import template from "../images/template-3.jpg";
export default function MainContent() {
  return (
    <div>
     <MainCards
            name="Hilton Alexandria Corniche "
            title="Hilton Alexandria Corniche"
            src={template}
          />
    </div>
  );
}
