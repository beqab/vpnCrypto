import React from "react";
import logo from "./logo.svg";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style/index.scss";
import Home from "./routes/home";
import About from "./routes/about";
import { Header } from "./components/header";
import ErrorPage from "./pages/errorPage";
import Register from "./pages/register";
import { DashboardHeader } from "./components/dashboard/dashboardHeader";
import { Dashboard } from "./pages/dashboard";
import { VpnDetails } from "./pages/vpnDetails";
import { VpnSoftware } from "./pages/vpnSoftware";
import { VpnConfig } from "./pages/vpnConfig";
import { Settings } from "./pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wightpaper",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardHeader />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/vpndetails",
        element: <VpnDetails />,
      },
      {
        path: "/dashboard/vpnSoftware",
        element: <VpnSoftware />,
      },
      {
        path: "/dashboard/vpnconfig",
        element: <VpnConfig />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
