import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutClass from "./src/components/AboutClass";
import ContactClass from "./src/components/ContactClass";
import Product from "./src/components/ProductClass";
import Footer from "./src/components/Footer";
import Profile from "./src/components/Profile";

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
        path: "/about", // /about or about can be used =>>> root/about >>> / means from root ie localhost:1234
        element: <AboutClass />,
        children: [
          {
            path: "profile", // this means localhost:1234/about/profile >>> if u write /profile it gives localhost/profile
            element: <Profile />,
          },
        ],
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
