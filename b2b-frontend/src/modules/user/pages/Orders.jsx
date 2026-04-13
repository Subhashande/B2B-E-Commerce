import React, { useEffect, useState } from "react";
import { fetchMyOrders } from "../../../services/orderService";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const data = await fetchMyOrders();
        setOrders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getOrders();
  }, []);

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>No orders found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "30px" }}>My Orders</h2>
      <div>
        {orders.map((order) => (
          <Card key={order._id}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <div>
                <p style={{ margin: "0 0 5px 0", color: "#666", fontSize: "14px" }}>Order ID: #{order._id}</p>
                <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>Placed on: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              <Badge variant={order.status === "DELIVERED" ? "success" : "warning"}>
                {order.status}
              </Badge>
            </div>
            <div style={{ borderTop: "1px solid #eee", marginTop: "15px", paddingTop: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#444" }}>{order.items.length} Items</span>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>Total: ₹{order.totalAmount}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
