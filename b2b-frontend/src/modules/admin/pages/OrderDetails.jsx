import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../services/apiClient";
import OrderSummaryCard from "../components/OrderSummaryCard";
import OrderItemsTable from "../components/OrderItemsTable";
import OrderItemRow from "../components/OrderItemRow";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await apiClient.get(`/v1/orders/${id}`);
        setOrder(res.data.order);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrder();
  }, [id]);

  if (!order) return <p>Loading...</p>;

  const displayOrder = {
    ...order,
    customer: order.customer || order.userId,
    total: order.total || order.totalAmount,
    items: order.items || []
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Order Details</h1>

      {/* SUMMARY */}
      <OrderSummaryCard order={displayOrder} />

      {/* ITEMS */}
      <OrderItemsTable>
        {displayOrder.items.map((item, index) => (
          <OrderItemRow key={index} item={item} />
        ))}
      </OrderItemsTable>
    </div>
  );
};

export default OrderDetails;