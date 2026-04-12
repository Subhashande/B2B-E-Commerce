const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#ef4444",
        color: "#fff",
        border: "none",
        padding: "6px 10px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;