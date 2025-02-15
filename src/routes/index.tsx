import { RouteObject } from "react-router";
import { PATHS } from "@/constants/paths";
import { RootLayout } from "@/layouts/root.layout";
import { HomePage } from "@/pages/home.page";

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
