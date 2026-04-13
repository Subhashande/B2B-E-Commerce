const Badge = ({ children, variant = "primary" }) => {
  const styles = {
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "600",
    background: variant === "success" ? "#d1fae5" : "#fef3c7",
    color: variant === "success" ? "#065f46" : "#92400e",
  };

  return <span style={styles}>{children}</span>;
};

export default Badge;
