const ActionButtons = ({ onApprove, onReject }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={onApprove}
        style={{
          background: "#10b981",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Approve
      </button>

      <button
        onClick={onReject}
        style={{
          background: "#ef4444",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reject
      </button>
    </div>
  );
};

export default ActionButtons;