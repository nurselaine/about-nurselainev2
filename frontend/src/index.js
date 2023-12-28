import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import "./utils/style/global.scss";

const Home = React.lazy(() => import("./Page/Home/Home"));
const Timeline = React.lazy(() => import("./Page/Timeline/Timeline"));
const ErrorPage = React.lazy(() => import("./Page/Error/ErrorPage"));
const ContactForm = React.lazy(() => import("./Page/ContactForm/ContactForm"));
const Loading = React.lazy(() => import('./Page/Loading'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<Loading />}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
  {
    path: "/timeline",
    element: (
      <React.Suspense fallback={<Loading />}>
        <Timeline />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<Loading />}>
        <ErrorPage />
      </React.Suspense>
    ),
  },
  {
    path: "/contactform",
    element: (
      <React.Suspense fallback={<Loading />}>
        <ContactForm />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<Loading />}>
        <ErrorPage />
      </React.Suspense>
    ),
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
