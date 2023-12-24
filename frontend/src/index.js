import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./Page/Home/Home";
import ErrorPage from "./Page/Error/ErrorPage";
import Timeline from "./Page/Timeline/Timeline";
import { AnimatePresence } from "framer-motion";
import "./utils/style/global.scss";

import { ChakraProvider } from "@chakra-ui/react";
import ContactForm from "./Page/ContactForm/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contactform",
    element: <ContactForm />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </ChakraProvider>
  </React.StrictMode>
);
