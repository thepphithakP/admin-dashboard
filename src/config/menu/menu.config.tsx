import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const menuList = [
  {
    path: "/",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "/orders",
    label: "Orders",
    icon: <ShoppingCartIcon />,
  },
];

export default menuList;
