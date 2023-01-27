import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutClass from "./src/components/AboutClass";
import ContactClass from "./src/components/ContactClass";
import Product from "./src/components/ProductClass";
import Footer from "./src/components/Footer";

const FoodProject = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <FoodProject />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <ContactClass />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoute} />);
