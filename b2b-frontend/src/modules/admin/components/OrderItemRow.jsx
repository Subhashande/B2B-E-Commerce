const OrderItemRow = ({ item }) => {
  return (
    <tr>
      <td style={{ padding: "10px" }}>{item.name || item.productId}</td>
      <td style={{ padding: "10px" }}>₹{item.price}</td>
      <td style={{ padding: "10px" }}>{item.quantity}</td>
      <td style={{ padding: "10px" }}>
        ₹{item.price * item.quantity}
      </td>
    </tr>
  );
};

export default OrderItemRow;