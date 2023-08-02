import { RouteObject } from "react-router-dom";

import OverviewPage from "./pages/overview/OverviewPage";

const router: RouteObject[] = [
  {
    path: "/",
    element: <OverviewPage />,
  },
];

export default router;
