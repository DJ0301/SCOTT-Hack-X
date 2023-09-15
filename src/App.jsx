import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Data } from "./screens/Data";
import { Reservation } from "./screens/Reservation";
import { HomeHf } from "./screens/HomeHf";
import { ReservationFormHf } from "./screens/ReservationFormHf";
import { ReservationForm } from "./screens/ReservationForm";
import { ReservationFormScreen } from "./screens/ReservationFormScreen";
import { DivWrapper } from "./screens/DivWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Data />,
  },
  {
    path: "/data",
    element: <Data />,
  },
  {
    path: "/reservation-confirmation",
    element: <Reservation />,
  },
  {
    path: "/home-hf",
    element: <HomeHf />,
  },
  {
    path: "/reservation-form-hf",
    element: <ReservationFormHf />,
  },
  {
    path: "/reservation-form-phone-enterd",
    element: <ReservationForm />,
  },
  {
    path: "/reservation-form-filled",
    element: <ReservationFormScreen />,
  },
  {
    path: "/reservation-form-enter-phone",
    element: <DivWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
