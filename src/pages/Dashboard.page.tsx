import { useEffect } from "react";

type Props = {};

const DashboardPage = ({}: Props) => {
  useEffect(() => {
    document.title = "Dashboard";
    return () => {
      document.title = "";
    };
  }, []);

  return <div>Dashboard.page</div>;
};

export default DashboardPage;
