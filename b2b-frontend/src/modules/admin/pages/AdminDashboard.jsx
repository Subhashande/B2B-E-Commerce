import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../adminSlice";
import { selectStats } from "../adminSelectors";
import DashboardCard from "../components/DashboardCard";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const stats = useSelector(selectStats);

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Dashboard Overview</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <DashboardCard title="Users" value={stats.totalUsers || 0} color="#3b82f6" />
        <DashboardCard title="Orders" value={stats.totalOrders || 0} color="#10b981" />
        <DashboardCard title="Revenue" value={stats.revenue || 0} color="#f59e0b" />
      </div>
    </div>
  );
};

export default AdminDashboard;