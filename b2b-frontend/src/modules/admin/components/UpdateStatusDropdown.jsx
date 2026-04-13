const UpdateStatusDropdown = ({ status, onChange }) => {
  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
     style={{
  padding: "8px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
}}
    >
      <option value="PENDING">Pending</option>
      <option value="PROCESSING">Processing</option>
      <option value="SHIPPED">Shipped</option>
      <option value="DELIVERED">Delivered</option>
      <option value="CANCELLED">Cancelled</option>
    </select>
  );
};

export default UpdateStatusDropdown;