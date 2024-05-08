import React from "react";
import ReactDOM from "react-dom/client";
import "chart.js/auto";
import App from "./Home.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Whiskey from "./pages/Whiskey.jsx";
import Contact from "./pages/Contact.jsx";

// import InnerWhiskey from "./pages/InnerWhiskey.jsx";

// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InnerWhiskey from "./pages/InnerWhiskey.jsx";
import Flavour from "./pages/Flavour.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/whiskey",
    element: <Whiskey />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/whiskey/:id",
    element: <InnerWhiskey />,
  },
  {
    path: "/flavour/:type",
    element: <Flavour />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
