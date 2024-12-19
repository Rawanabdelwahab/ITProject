import React from "react";
import ReactDOM from "react-dom/client";
import MainContent from "./components/MainContent";
import Greenplaza from "./components/Greenplaza";
import Conrad from "./components/Conrad";
import Corniche from "./components/Chorniche";
import Doubletree from "./components/Doubletree";
import Golf from "./components/Golf";
import Woldorf from "./components/Woldorf";
import Ramses from "./components/Ramses";
import Zamalek from "./components/Zamalek";
import Hurghada from "./components/Hurghada";
import Luxor from "./components/Luxor";
import Marsa from "./components/Marsa";
import Heliop from "./components/Heliop";
import King from "./components/King";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/Greenplaza",
    element: <Greenplaza />,
  },
  {
    path: "/Conrad",
    element: <Conrad />,
  },
  {
    path: "/Corniche",
    element: <Corniche />,
  },
  {
    path: "/King",
    element: <King />,
  },
  {
    path: "/Luxor",
    element: <Luxor />,
  },
  {
    path: "/Marsa",
    element: <Marsa />,
  },
  {
    path: "/Ramses",
    element: <Ramses />,
  },
  {
    path: "/Woldorf",
    element: <Woldorf />,
  },
  {
    path: "/Zamalek",
    element: <Zamalek />,
  },
  {
    path: "/Hurghada",
    element: <Hurghada />,
  },
  {
    path: "/Doubletree",
    element: <Doubletree />,
  },
  {
    path: "/Golf",
    element: <Golf />,
  },
  {
    path: "/Heliop",
    element: <Heliop />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
