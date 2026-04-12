import { useEffect, useState } from "react";
import OrderTable from "../components/OrderTable";
import OrderRow from "../components/OrderRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TEMP DATA
    setOrders([
      {
        _id: "ORD001",
        customer: "Subhash",
        total: 65000,
        status: "pending",
      },
      {
        _id: "ORD002",
        customer: "Rahul",
        total: 15000,
        status: "shipped",
      },
    ]);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Order Management</h1>

      <OrderTable>
        {orders.map((order) => (
          <OrderRow key={order._id} order={order} />
        ))}
      </OrderTable>
    </div>
  );
};

export default Orders;