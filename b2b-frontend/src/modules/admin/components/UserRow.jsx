import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <StatusBadge status={user.status} />
      </td>
      <td>
        <ActionButtons
          onApprove={() => console.log("Approve", user._id)}
          onReject={() => console.log("Reject", user._id)}
        />
      </td>
    </tr>
  );
};

export default UserRow;