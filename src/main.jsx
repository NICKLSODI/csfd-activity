import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import PortalPassword from "./pages/PortalPassword";

import AncientGate_1 from "./pages/AncientGate_1";
import AncientGate_2 from "./pages/AncientGate_2";
import AncientGate_3 from "./pages/AncientGate_3";

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans Thai', sans-serif`,
    body: `'Noto Sans Thai', sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/AncientGate",
    element: <AncientGate_1 />,
  },
  {
    path: "/AnotherGateTheSecond",
    element: <AncientGate_2 />,
  },
  {
    path: "/RealLastFinalGateOMG",
    element: <AncientGate_3 />,
  },
  {
    path: "/",
    element: <PortalPassword />,
  },
]);
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
