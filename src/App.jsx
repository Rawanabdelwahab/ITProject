/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import BodyContainer from "./components/BodyContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BodyContainer />
      </div>
    </>
  );
}

export default App;
