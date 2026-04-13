import { useDispatch } from "react-redux";
import { approveUser, rejectUser } from "../adminSlice";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

const UserRow = ({ user }) => {
  const dispatch = useDispatch();

  const handleApprove = async () => {
    if (window.confirm(`Approve ${user.name}?`)) {
      const resultAction = await dispatch(approveUser(user._id));
      if (approveUser.rejected.match(resultAction)) {
        alert(resultAction.payload?.message || "Failed to approve user");
      } else {
        alert("User approved successfully");
      }
    }
  };

  const handleReject = async () => {
    if (window.confirm(`Reject ${user.name}?`)) {
      const resultAction = await dispatch(rejectUser(user._id));
      if (rejectUser.rejected.match(resultAction)) {
        alert(resultAction.payload?.message || "Failed to reject user");
      } else {
        alert("User rejected successfully");
      }
    }
  };

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <StatusBadge status={user.status} />
      </td>
      <td>
        <ActionButtons
          onApprove={handleApprove}
          onReject={handleReject}
          showActions={user.status === "PENDING"}
        />
      </td>
    </tr>
  );
};

export default UserRow;