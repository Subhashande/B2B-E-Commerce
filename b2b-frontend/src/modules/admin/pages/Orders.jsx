import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders } from "../adminSlice";
import OrderTable from "../components/OrderTable";
import OrderRow from "../components/OrderRow";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.admin.orders) || [];

  useEffect(() => {
    dispatch(getAdminOrders());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Order Management</h1>

      <OrderTable>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order) => (
            <OrderRow key={order._id} order={order} />
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
              No orders found
            </td>
          </tr>
        )}
      </OrderTable>
    </div>
  );
};

export default Orders;