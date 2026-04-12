import { useEffect, useState } from "react";
import OrderSummaryCard from "../components/OrderSummaryCard";
import OrderItemsTable from "../components/OrderItemsTable";
import OrderItemRow from "../components/OrderItemRow";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // MOCK DATA (replace with API later)
    setOrder({
      _id: "ORD001",
      customer: "Subhash",
      total: 65000,
      status: "pending",
      items: [
        { name: "Laptop", price: 50000, quantity: 1 },
        { name: "Printer", price: 15000, quantity: 1 },
      ],
    });
  }, []);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Order Details</h1>

      {/* SUMMARY */}
      <OrderSummaryCard order={order} />

      {/* ITEMS */}
      <OrderItemsTable>
        {order.items.map((item, index) => (
          <OrderItemRow key={index} item={item} />
        ))}
      </OrderItemsTable>
    </div>
  );
};

export default OrderDetails;