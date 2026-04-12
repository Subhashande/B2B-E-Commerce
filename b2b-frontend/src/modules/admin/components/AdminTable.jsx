const AdminTable = ({ headers, children }) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default AdminTable;