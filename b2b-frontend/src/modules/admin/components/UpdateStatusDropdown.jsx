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
      <option value="pending">Pending</option>
      <option value="shipped">Shipped</option>
      <option value="delivered">Delivered</option>
    </select>
  );
};

export default UpdateStatusDropdown;