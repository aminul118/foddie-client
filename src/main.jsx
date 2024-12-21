import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";

import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import Router from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>
);
