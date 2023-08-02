import homeRouter from "@/mods/home/router";
import { MainLayout } from "@/component/layout";
import { RouteObject } from "react-router-dom";

export const publicRoutes = [].flat();

export const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: homeRouter,
  },
];
