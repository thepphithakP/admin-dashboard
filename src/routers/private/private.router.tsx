import { RouteObject } from "react-router-dom";
import Dashboard from "../../components/layout/sidebar";
import DashboardPage from "../../pages/Dashboard.page";
import OrdersPage from "../../pages/Orders.page";

const privateRouter: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
];
export default privateRouter;
