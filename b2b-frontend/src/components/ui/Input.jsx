const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        width: "100%",
        marginBottom: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default Input;
