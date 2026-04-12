import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../adminSlice";
import { selectUsers } from "../adminSelectors";

import AdminTable from "../components/AdminTable";
import UserRow from "../components/UserRow";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>User Management</h1>

      <AdminTable headers={["Name", "Email", "Status", "Actions"]}>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <UserRow key={user._id} user={user} />
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
              No users found
            </td>
          </tr>
        )}
      </AdminTable>
    </div>
  );
};

export default Users;