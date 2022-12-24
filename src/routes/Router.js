import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Notification = lazy(() => import("../views/ui/Notification"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Application = lazy(() => import("../views/ui/Application"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/notification", exact: true, element: <Notification /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/application", exact: true, element: <Application /> },
    
    ],
  },
];

export default ThemeRoutes;
