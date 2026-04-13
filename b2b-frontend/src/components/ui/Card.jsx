const Card = ({ children }) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "20px",
        marginBottom: "20px"
      }}
    >
      {children}
    </div>
  );
};

export default Card;
