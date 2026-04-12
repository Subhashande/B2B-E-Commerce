const UserApprovalRow = ({ user }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
      <span>{user.name}</span>
      <button>Approve</button>
    </div>
  );
};

export default UserApprovalRow;