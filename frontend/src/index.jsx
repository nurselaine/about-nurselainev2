import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./Page/Loading";
import "./utils/styles/globals.scss";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const configChakra = {
  initialColorMode: "dark"
}

const theme = extendTheme(configChakra);

const Home = React.lazy(() => import("./Page/Home.jsx/Home"));
const Timeline = React.lazy(() => import("./Page/Timeline/Timeline"));
const ContactForm = React.lazy(() => import("./Page/ContactForm/ContactForm"));
const ErrorPage = React.lazy(() => import("./Page/ErrorPage"));

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
    <React.Suspense fallback={<Loading />}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.Suspense>
  </React.StrictMode>
);
