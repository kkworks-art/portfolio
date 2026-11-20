
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Works } from "./components/Works";
import { About } from "./components/About";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "works", Component: Works },
        { path: "about", Component: About },
      ],
    },
  ],
  {
    basename: "/portfolio",
  }
);
