import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import {HomeMain}  from "./components/HomeSection/HomeMain";
import {ProjectMain} from "./components/ProjectSection/ProjectMain";
import {GiftMain} from "./components/GiftSection/GiftMain";
import {Login} from "./components/LoginSection/Login";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createHashRouter([
  { path: "/", element: <HomeMain />,errorElement: <ErrorPage /> },
  { path: "/project", element: <ProjectMain />,errorElement: <ErrorPage /> },
  { path: "/gift", element: <GiftMain />,errorElement: <ErrorPage /> },
  { path: "/login", element: <Login />,errorElement: <ErrorPage /> },
   { path: "*", element: <ErrorPage /> }

  ],
     
);

export default function App() {
  return <RouterProvider router={router} />;
}
