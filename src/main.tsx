import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./features/auth/Login.tsx";
import "./index.css";
import AboutUs from "./pages/AboutUs.tsx";
import Services from "./pages/Services.tsx";
import Home from "./pages/index.tsx";
import Appointment from "./pages/Appointment.tsx";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/", element: <Home /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/services", element: <Services /> },
  { path: "/appointment", element: <Appointment /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </StrictMode>
);
