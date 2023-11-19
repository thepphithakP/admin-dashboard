import { useEffect } from "react";

type Props = {};

function OrdersPage({}: Props) {
  useEffect(() => {
    document.title = "Orders";
    return () => {
      document.title = "";
    };
  }, []);
  return <div>Orders.page</div>;
}

export default OrdersPage;
